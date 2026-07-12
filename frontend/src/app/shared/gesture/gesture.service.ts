import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  CursorPos,
  DEFAULT_GESTURE_SETTINGS,
  GestureSettings,
  GestureType,
  HandGesture,
} from './gestures';

// MediaPipe Tasks Vision — modern Google API for hand landmark detection.
import {
  FilesetResolver,
  HandLandmarker,
  DrawingUtils,
  NormalizedLandmark,
} from '@mediapipe/tasks-vision';

const WASM_PATH = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL_PATH =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

const SETTINGS_KEY = 'murshid.gesture.settings';
const PINCH_THRESHOLD = 0.045;
const SCROLL_GAIN = 1.6;

export type GestureStatus = 'idle' | 'loading' | 'running' | 'error';

@Injectable({ providedIn: 'root' })
export class GestureService implements OnDestroy {
  private readonly _status$ = new BehaviorSubject<GestureStatus>('idle');
  private readonly _gesture$ = new Subject<HandGesture>();
  private readonly _cursor$ = new BehaviorSubject<CursorPos | null>(null);
  private readonly _error$ = new Subject<string>();
  private readonly _settings$ = new BehaviorSubject<GestureSettings>(this.loadSettings());

  readonly status$: Observable<GestureStatus> = this._status$.asObservable();
  readonly gesture$: Observable<HandGesture> = this._gesture$.asObservable();
  readonly cursor$: Observable<CursorPos | null> = this._cursor$.asObservable();
  readonly error$: Observable<string> = this._error$.asObservable();
  readonly settings$: Observable<GestureSettings> = this._settings$.asObservable();

  private landmarker: HandLandmarker | null = null;
  private stream: MediaStream | null = null;
  private rafId = 0;
  private video: HTMLVideoElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private drawingUtils: DrawingUtils | null = null;

  // Debounce / cooldown state.
  private lastEmitted: GestureType = GestureType.NONE;
  private heldGesture: GestureType = GestureType.NONE;
  private heldCount = 0;
  private lastEmitTime = 0;

  // Swipe tracking state (hand centre over time).
  private swipeTracking = false;
  private swipeStart = { x: 0, y: 0 };
  private swipeLocked = false;

  // Grab-to-scroll state (FIST held + vertical hand movement).
  private prevFistY: number | null = null;

  constructor(private zone: NgZone) {}

  get status(): GestureStatus {
    return this._status$.value;
  }

  get settings(): GestureSettings {
    return this._settings$.value;
  }

  updateSettings(patch: Partial<GestureSettings>): void {
    const next = { ...this._settings$.value, ...patch };
    this._settings$.next(next);
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    } catch {
      /* storage may be unavailable */
    }
  }

  private loadSettings(): GestureSettings {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        return { ...DEFAULT_GESTURE_SETTINGS, ...JSON.parse(raw) };
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_GESTURE_SETTINGS;
  }

  async start(video: HTMLVideoElement, canvas?: HTMLCanvasElement): Promise<void> {
    if (this._status$.value === 'running' || this._status$.value === 'loading') {
      return;
    }
    this._status$.next('loading');
    this.video = video;
    this.canvas = canvas ?? null;
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.drawingUtils = this.ctx ? new DrawingUtils(this.ctx) : null;
    }

    try {
      if (!this.landmarker) {
        const fileset = await FilesetResolver.forVisionTasks(WASM_PATH);
        this.landmarker = await HandLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: MODEL_PATH, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numHands: 1,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
      }

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 },
        audio: false,
      });
      video.srcObject = this.stream;
      await video.play();

      this.resetSwipe();
      this._status$.next('running');
      this.zone.runOutsideAngular(() => this.detectLoop());
    } catch (err: any) {
      this._status$.next('error');
      const msg = err?.message ?? 'Échec du démarrage de la caméra / MediaPipe.';
      this._error$.next(msg);
      this.cleanup();
    }
  }

  stop(): void {
    this._status$.next('idle');
    this._cursor$.next(null);
    this.cleanup();
    this.lastEmitted = GestureType.NONE;
    this.heldGesture = GestureType.NONE;
    this.heldCount = 0;
    this.prevFistY = null;
    this.resetSwipe();
  }

  private resetSwipe(): void {
    this.swipeTracking = false;
    this.swipeLocked = false;
    this.swipeStart = { x: 0, y: 0 };
  }

  private cleanup(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    if (this.video) {
      this.video.srcObject = null;
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  private detectLoop = (): void => {
    if (!this.video || !this.landmarker || this.video.readyState < 2) {
      this.rafId = requestAnimationFrame(this.detectLoop);
      return;
    }

    const now = performance.now();
    const result = this.landmarker.detectForVideo(this.video, now);
    const s = this.settings;

    if (result.landmarks && result.landmarks.length > 0) {
      const landmarks = result.landmarks[0];
      const raw = result.handednesses?.[0]?.[0]?.categoryName ?? 'Unknown';
      // MediaPipe assumes a pre-mirrored selfie frame; we feed the raw frame,
      // so swap Left<->Right to report the user's physical hand.
      const handedness =
        raw === 'Left' ? 'Right' : raw === 'Right' ? 'Left' : raw;

      const pose = this.classify(landmarks);
      const swipe = this.detectSwipe(landmarks, s.swipeThreshold, handedness);
      const gesture: HandGesture = swipe.type !== GestureType.NONE ? swipe : pose;

      this.updateCursor(landmarks);
      this.updateGrabScroll(pose.type, landmarks);

      this.draw(landmarks);
      this.evaluate(gesture, handedness, s.holdFrames, s.cooldownMs);
    } else {
      this._cursor$.next(null);
      this.prevFistY = null;
      this.resetSwipe();
      this.evaluate({ type: GestureType.NONE, handedness: '', confidence: 0 }, '', s.holdFrames, s.cooldownMs);
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }

    this.rafId = requestAnimationFrame(this.detectLoop);
  };

  /**
   * Virtual cursor: map the index-fingertip position to a normalized, mirrored
   * screen coordinate so the user can point at UI elements.
   */
  private updateCursor(landmarks: NormalizedLandmark[]): void {
    const tip = landmarks[8];
    const pos: CursorPos = { x: 1 - tip.x, y: tip.y };
    this._cursor$.next(pos);
  }

  /**
   * Grab-to-scroll: while a FIST is held, vertical hand movement scrolls the page.
   */
  private updateGrabScroll(pose: GestureType, landmarks: NormalizedLandmark[]): void {
    if (pose === GestureType.FIST) {
      const y = landmarks[9].y;
      if (this.prevFistY !== null) {
        const dy = y - this.prevFistY;
        const delta = dy * window.innerHeight * SCROLL_GAIN;
        if (Math.abs(delta) > 0.5) {
          window.scrollBy({ top: delta, behavior: 'auto' });
        }
      }
      this.prevFistY = y;
    } else {
      this.prevFistY = null;
    }
  }

  /**
   * Debounce the raw classification: require the same gesture for a few frames,
   * then emit on change with a cooldown so navigation isn't spammed.
   */
  private evaluate(
    gesture: HandGesture,
    handedness: string,
    holdFrames: number,
    cooldownMs: number
  ): void {
    if (gesture.type === this.heldGesture) {
      this.heldCount++;
    } else {
      this.heldGesture = gesture.type;
      this.heldCount = 1;
    }

    if (this.heldCount < holdFrames) {
      return;
    }

    const stable: HandGesture = { ...gesture, handedness };
    const now = performance.now();

    if (
      stable.type !== this.lastEmitted &&
      stable.type !== GestureType.NONE &&
      now - this.lastEmitTime >= cooldownMs
    ) {
      this.lastEmitted = stable.type;
      this.lastEmitTime = now;
      this.zone.run(() => this._gesture$.next(stable));
    }
  }

  private draw(landmarks: NormalizedLandmark[]): void {
    if (!this.ctx || !this.canvas || !this.drawingUtils) {
      return;
    }
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.scale(-1, 1);
    this.ctx.translate(-this.canvas.width, 0);
    this.drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, {
      color: '#2dd4bf',
      lineWidth: 3,
    });
    this.drawingUtils.drawLandmarks(landmarks, {
      color: '#0f766e',
      radius: 3,
      lineWidth: 1,
    });
    this.ctx.restore();
  }

  /**
   * Detect a directional swipe from the hand centre (middle-finger MCP).
   * Returns NONE unless a clear horizontal/vertical movement is registered.
   */
  private detectSwipe(
    landmarks: NormalizedLandmark[],
    threshold: number,
    handedness: string
  ): HandGesture {
    const centre = landmarks[9];
    if (!this.swipeTracking) {
      this.swipeTracking = true;
      this.swipeStart = { x: centre.x, y: centre.y };
      this.swipeLocked = false;
      return { type: GestureType.NONE, handedness: '', confidence: 1 };
    }

    const dx = centre.x - this.swipeStart.x;
    const dy = centre.y - this.swipeStart.y;
    const moved = Math.max(Math.abs(dx), Math.abs(dy));

    if (!this.swipeLocked) {
      if (moved >= threshold) {
        this.swipeLocked = true;
        const horizontal = Math.abs(dx) >= Math.abs(dy);
        const type = horizontal
          ? dx < 0
            ? GestureType.SWIPE_LEFT
            : GestureType.SWIPE_RIGHT
          : dy < 0
            ? GestureType.SWIPE_UP
            : GestureType.SWIPE_DOWN;
        return { type, handedness, confidence: 1 };
      }
      return { type: GestureType.NONE, handedness: '', confidence: 1 };
    }

    // Lock released only when the hand returns near its start position.
    if (moved < threshold * 0.3) {
      this.swipeLocked = false;
      this.swipeStart = { x: centre.x, y: centre.y };
    }
    return { type: GestureType.NONE, handedness: '', confidence: 1 };
  }

  /**
   * Classify a single hand's 21 normalized landmarks into a coarse gesture.
   * Assumes the user faces the camera with an upright hand.
   */
  private classify(landmarks: NormalizedLandmark[]): HandGesture {
    const dist = (a: NormalizedLandmark, b: NormalizedLandmark) =>
      Math.hypot(a.x - b.x, a.y - b.y);

    const wrist = landmarks[0];
    const thumbTip = landmarks[4];
    const thumbIp = landmarks[3];
    const indexTip = landmarks[8];
    const indexPip = landmarks[6];
    const middleTip = landmarks[12];
    const middlePip = landmarks[10];
    const ringTip = landmarks[16];
    const ringPip = landmarks[14];
    const pinkyTip = landmarks[20];
    const pinkyPip = landmarks[18];

    // Pinch: thumb tip touches index tip — used as a "click".
    if (dist(thumbTip, indexTip) < PINCH_THRESHOLD) {
      return { type: GestureType.PINCH, handedness: '', confidence: 1 };
    }

    const index = indexTip.y < indexPip.y - 0.02;
    const middle = middleTip.y < middlePip.y - 0.02;
    const ring = ringTip.y < ringPip.y - 0.02;
    const pinky = pinkyTip.y < pinkyPip.y - 0.02;

    // Thumb: extended when its tip is farther from the wrist than the IP joint.
    const thumb = dist(thumbTip, wrist) > dist(thumbIp, wrist) * 1.15;

    const count = [index, middle, ring, pinky].filter(Boolean).length;

    let type = GestureType.NONE;

    if (count === 0 && !thumb) {
      type = GestureType.FIST;
    } else if (count === 5 || (count >= 4 && !thumb)) {
      type = GestureType.OPEN_HAND;
    } else if (index && !middle && !ring && !pinky) {
      type = GestureType.POINT;
    } else if (index && middle && !ring && !pinky) {
      type = GestureType.PEACE;
    } else if (index && !middle && !ring && pinky) {
      type = GestureType.ROCK;
    } else if (thumb && count === 0) {
      // Thumbs up when the thumb tip is above the wrist, otherwise thumbs down.
      type = thumbTip.y < wrist.y ? GestureType.THUMBS_UP : GestureType.THUMBS_DOWN;
    } else if (thumb && count >= 3 && dist(thumbTip, indexTip) < 0.06) {
      type = GestureType.OK;
    }

    return { type, handedness: '', confidence: 1 };
  }

  ngOnDestroy(): void {
    this.cleanup();
  }
}
