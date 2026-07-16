import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SpeechState {
  /** Whether a text is currently being spoken or queued. */
  speaking: boolean;
  /** Language used for the last/next utterance. */
  lang: string;
}

const DEFAULT_LANG = 'ar-SA';
const ARABIC_LANG = 'ar-SA';
const STORAGE_KEY = 'murshid.speech.lang';

/**
 * Text-to-speech helper wrapping the Web Speech API (SpeechSynthesis).
 * Handles the asynchronous voice-loading race in Chrome by waiting for
 * getVoices() before speaking, and selecting an explicit Arabic voice.
 */
@Injectable({ providedIn: 'root' })
export class SpeechService {
  private readonly _state$ = new BehaviorSubject<SpeechState>({
    speaking: false,
    lang: this.loadLang(),
  });

  readonly state$: Observable<SpeechState> = this._state$.asObservable();

  private lastText = '';
  private voices: SpeechSynthesisVoice[] = [];
  private pending: { text: string; lang: string } | null = null;
  private voicesReady = false;

  constructor(private zone: NgZone) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      this.syncSpeakingState();
    }
  }

  get speaking(): boolean {
    return this._state$.value.speaking;
  }

  get lang(): string {
    return this._state$.value.lang;
  }

  get supported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  setLang(lang: string): void {
    this._state$.next({ ...this._state$.value, lang });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage may be unavailable */
    }
  }

  /** Read the given text aloud in Arabic. Cancels any ongoing speech first. */
  speak(text: string, lang: string = ARABIC_LANG): void {
    if (!this.supported || !text?.trim()) {
      return;
    }
    this.lastText = text;
    this.pending = null;

    if (!this.voicesReady) {
      // Voices not loaded yet: cache and try again once they arrive.
      this.pending = { text, lang: ARABIC_LANG };
      this.loadVoices();
      return;
    }
    this.doSpeak(text, ARABIC_LANG);
  }

  /** Stop any ongoing speech. */
  stop(): void {
    if (!this.supported) {
      return;
    }
    this.pending = null;
    window.speechSynthesis.cancel();
    this.syncSpeakingState();
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

  private loadVoices(): void {
    if (!this.supported) {
      return;
    }
    this.voices = window.speechSynthesis.getVoices() || [];
    this.voicesReady = this.voices.length > 0;
    if (this.voicesReady && this.pending) {
      const { text, lang } = this.pending;
      this.pending = null;
      this.doSpeak(text, lang);
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

  private doSpeak(text: string, lang: string): void {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.voice = this.pickVoice(lang);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onstart = () => this.zone.run(() => this._state$.next({ speaking: true, lang }));
    utter.onend = () => this.zone.run(() => this.syncSpeakingState());
    utter.onerror = () => this.zone.run(() => this.syncSpeakingState());
    window.speechSynthesis.speak(utter);
  }

  private syncSpeakingState(): void {
    const speaking = this.supported && window.speechSynthesis.speaking;
    this._state$.next({ speaking, lang: this.lang });
  }

  private loadLang(): string {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return raw;
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_LANG;
  }
}
