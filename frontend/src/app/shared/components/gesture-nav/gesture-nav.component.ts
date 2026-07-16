import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GestureService, GestureStatus } from '../../gesture/gesture.service';
import {
  CursorPos,
  DEFAULT_GESTURE_ACTIONS,
  GestureAction,
  GestureSettings,
  GestureType,
  HandGesture,
} from '../../gesture/gestures';

interface GestureLog {
  type: GestureType;
  label: string;
  time: string;
}

@Component({
  selector: 'app-gesture-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gesture-nav.component.html',
  styleUrls: ['./gesture-nav.component.css'],
})
export class GestureNavComponent implements OnDestroy {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  readonly GestureType = GestureType;
  enabled = false;
  status: GestureStatus = 'idle';
  error = '';
  current: HandGesture | null = null;
  lastLabel = '';
  flash = false;
  clicking = false;
  cursor: CursorPos | null = null;
  history: GestureLog[] = [];
  settings: GestureSettings = {
    holdFrames: 3,
    cooldownMs: 1200,
    swipeThreshold: 0.22,
    sound: true,
  };

  actions: GestureAction[] = DEFAULT_GESTURE_ACTIONS;

  private subs: Subscription[] = [];
  private audioCtx: AudioContext | null = null;

  constructor(private gesture: GestureService, private router: Router) {
    this.subs.push(
      this.gesture.status$.subscribe((s) => {
        this.status = s;
        this.enabled = s === 'running';
      })
    );
    this.subs.push(this.gesture.error$.subscribe((e) => (this.error = e)));
    this.subs.push(this.gesture.settings$.subscribe((s) => (this.settings = s)));
    this.subs.push(this.gesture.cursor$.subscribe((c) => (this.cursor = c)));
    this.subs.push(
      this.gesture.gesture$.subscribe((g) => {
        this.current = g;
        this.onRecognized(g);
      })
    );
  }

  async toggle(): Promise<void> {
    this.error = '';
    if (this.enabled) {
      this.gesture.stop();
      return;
    }
    await this.gesture.start(this.videoRef.nativeElement, this.canvasRef.nativeElement);
  }

  /** Close the panel and stop the camera. */
  close(): void {
    this.gesture.stop();
  }

  private onRecognized(g: HandGesture): void {
    const action = this.actions.find((a) => a.gesture === g.type);
    if (!action) {
      return;
    }
    this.lastLabel = action.label ?? g.type;
    this.pushHistory(g.type, this.lastLabel);
    this.triggerFlash();
    if (this.settings.sound) {
      this.beep();
    }

    if (action.click) {
      this.dispatchClick();
    } else if (action.back) {
      window.history.back();
    } else if (action.forward) {
      window.history.forward();
    } else if (action.scroll) {
      window.scrollBy({ top: action.scroll * 320, behavior: 'smooth' });
    } else if (action.commands) {
      this.router.navigate(action.commands);
    }
    // FIST (grab-scroll) and any action without nav props: feedback only.
  }

  /** Dispatch a real DOM click at the current virtual-cursor position. */
  private dispatchClick(): void {
    if (!this.cursor) {
      return;
    }
    const x = this.cursor.x * window.innerWidth;
    const y = this.cursor.y * window.innerHeight;
    const target = document.elementFromPoint(x, y) as HTMLElement | null;
    this.clicking = true;
    setTimeout(() => (this.clicking = false), 180);
    if (target) {
      target.click();
      target.focus?.();
    }
  }

  private pushHistory(type: GestureType, label: string): void {
    const time = new Date().toLocaleTimeString();
    this.history = [{ type, label, time }, ...this.history].slice(0, 6);
  }

  private triggerFlash(): void {
    this.flash = true;
    setTimeout(() => (this.flash = false), 250);
  }

  private beep(): void {
    try {
      this.audioCtx = this.audioCtx ?? new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.frequency.value = 660;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.2);
    } catch {
      /* audio not available */
    }
  }

  updateHold(v: number): void {
    this.gesture.updateSettings({ holdFrames: v });
  }

  updateCooldown(v: number): void {
    this.gesture.updateSettings({ cooldownMs: v });
  }

  updateSwipe(v: number): void {
    this.gesture.updateSettings({ swipeThreshold: v });
  }

  toggleSound(): void {
    this.gesture.updateSettings({ sound: !this.settings.sound });
  }

  gestureLabel(type: GestureType): string {
    return this.actions.find((a) => a.gesture === type)?.label ?? type;
  }

  handLabel(handedness: string): string {
    return handedness === 'Right' ? 'اليد اليمنى' : handedness === 'Left' ? 'اليد اليسرى' : handedness;
  }

  ngOnDestroy(): void {
    this.gesture.stop();
    this.subs.forEach((s) => s.unsubscribe());
  }
}
