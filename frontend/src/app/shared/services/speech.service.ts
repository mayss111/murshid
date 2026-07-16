import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TtsService } from './tts.service';

export interface SpeechState {
  /** Whether a text is currently being spoken or queued. */
  speaking: boolean;
  /** Language used for the last/next utterance. */
  lang: string;
}

const ARABIC_LANG = 'ar-SA';

/**
 * Arabic text-to-speech. Uses the server-side TTS endpoint (VoiceRSS) so every
 * user hears the same Arabic voice, independent of the device's installed voices.
 * Falls back to the browser's SpeechSynthesis (Arabic voice) if the server fails.
 */
@Injectable({ providedIn: 'root' })
export class SpeechService {
  private readonly _state$ = new BehaviorSubject<SpeechState>({
    speaking: false,
    lang: ARABIC_LANG,
  });

  readonly state$: Observable<SpeechState> = this._state$.asObservable();

  private lastText = '';
  private audio: HTMLAudioElement | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private pending: { text: string } | null = null;
  private voicesReady = false;

  constructor(private zone: NgZone, private tts: TtsService) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  get speaking(): boolean {
    return this._state$.value.speaking;
  }

  get lang(): string {
    return this._state$.value.lang;
  }

  get supported(): boolean {
    return true; // server TTS works without browser SpeechSynthesis
  }

  /** Read the given Arabic text aloud via the server TTS. */
  speak(text: string, lang: string = ARABIC_LANG): void {
    const content = text?.trim();
    if (!content) {
      return;
    }
    this.lastText = content;
    this.stop();
    this.setSpeaking(true);

    this.tts.speakArabic(content).subscribe({
      next: (blob) => this.playBlob(blob, content),
      error: () => this.speakFallback(content),
    });
  }

  /** Stop any ongoing speech. */
  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.pending = null;
    this.setSpeaking(false);
  }

  /**
   * Toggle reading of the given text. If already speaking, stop; otherwise read.
   * Reuses the last text when `text` is omitted.
   */
  toggle(text?: string): void {
    if (this.speaking) {
      this.stop();
      return;
    }
    const toRead = (text ?? this.lastText ?? '').trim();
    if (toRead) {
      this.speak(toRead);
    }
  }

  /** Collect the readable text of the main content area. */
  readPageContent(): string {
    if (typeof document === 'undefined') {
      return '';
    }
    const root =
      document.querySelector('main') ??
      document.querySelector('.content') ??
      document.querySelector('router-outlet')?.parentElement ??
      document.body;
    if (!root) {
      return '';
    }
    const clone = root.cloneNode(true) as HTMLElement;
    clone
      .querySelectorAll('script, style, noscript, app-gesture-nav, nav, header, footer')
      .forEach((el) => el.remove());
    return (clone.textContent ?? '').replace(/\s+/g, ' ').trim();
  }

  private playBlob(blob: Blob, text: string): void {
    if (!blob || blob.size === 0) {
      this.speakFallback(text);
      return;
    }
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    this.audio = audio;
    audio.onended = () => {
      URL.revokeObjectURL(url);
      this.audio = null;
      this.setSpeaking(false);
    };
    audio.onerror = () => {
      URL.revokeObjectURL(url);
      this.audio = null;
      this.setSpeaking(false);
      this.speakFallback(text);
    };
    audio.play().catch(() => {
      URL.revokeObjectURL(url);
      this.audio = null;
      this.setSpeaking(false);
      this.speakFallback(text);
    });
  }

  /** Fallback to the browser's Arabic speech synthesis if the server TTS fails. */
  private speakFallback(text: string): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.setSpeaking(false);
      return;
    }
    if (!this.voicesReady) {
      this.pending = { text };
      this.loadVoices();
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = ARABIC_LANG;
    utter.voice = this.pickVoice(ARABIC_LANG);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = () => this.setSpeaking(false);
    utter.onerror = () => this.setSpeaking(false);
    window.speechSynthesis.speak(utter);
  }

  private loadVoices(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    this.voices = window.speechSynthesis.getVoices() || [];
    this.voicesReady = this.voices.length > 0;
    if (this.voicesReady && this.pending) {
      const { text } = this.pending;
      this.pending = null;
      this.speakFallback(text);
    }
  }

  private pickVoice(lang: string): SpeechSynthesisVoice | undefined {
    if (!this.voices.length) return undefined;
    const base = lang.split('-')[0].toLowerCase();
    return (
      this.voices.find((v) => v.lang?.toLowerCase() === lang.toLowerCase()) ??
      this.voices.find((v) => v.lang?.toLowerCase().startsWith(base)) ??
      this.voices.find((v) => v.name?.toLowerCase().includes(base)) ??
      this.voices.find((v) => v.default)
    );
  }

  private setSpeaking(value: boolean): void {
    this.zone.run(() => this._state$.next({ speaking: value, lang: ARABIC_LANG }));
  }
}
