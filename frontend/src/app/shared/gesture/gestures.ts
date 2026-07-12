export enum GestureType {
  NONE = 'NONE',
  FIST = 'FIST',
  OPEN_HAND = 'OPEN_HAND',
  POINT = 'POINT',
  PEACE = 'PEACE',
  THUMBS_UP = 'THUMBS_UP',
  THUMBS_DOWN = 'THUMBS_DOWN',
  ROCK = 'ROCK',
  OK = 'OK',
  PINCH = 'PINCH',
  SWIPE_LEFT = 'SWIPE_LEFT',
  SWIPE_RIGHT = 'SWIPE_RIGHT',
  SWIPE_UP = 'SWIPE_UP',
  SWIPE_DOWN = 'SWIPE_DOWN',
}

export interface HandGesture {
  type: GestureType;
  /** Handedness reported by MediaPipe ('Left' | 'Right'), already swapped to physical hand. */
  handedness: string;
  /** Confidence 0..1 derived from how clearly the pose is held. */
  confidence: number;
}

/** Normalized pointer position on screen (x,y in 0..1, already mirrored for display). */
export interface CursorPos {
  x: number;
  y: number;
}

/**
 * Navigation action triggered by a detected gesture.
 */
export interface GestureAction {
  gesture: GestureType;
  /** Router command, e.g. ['/dashboard']. Ignored when `back`/`forward`/`scroll`/`click` are set. */
  commands?: any[];
  /** When true, navigate to the previous history entry instead of a route. */
  back?: boolean;
  /** When true, navigate to the next history entry (location.forward). */
  forward?: boolean;
  /** When set, scroll the page vertically by the given sign (-1 up, 1 down). */
  scroll?: -1 | 1;
  /** When true, dispatch a real click at the virtual cursor position. */
  click?: boolean;
  /** Optional label shown in the UI. */
  label?: string;
}

/**
 * Default mapping between gestures and app actions.
 * Uses only routes that exist in AppRoutingModule, plus history/scroll/click actions.
 */
export const DEFAULT_GESTURE_ACTIONS: GestureAction[] = [
  { gesture: GestureType.OPEN_HAND, commands: ['/dashboard'], label: 'لوحة التحكم' },
  { gesture: GestureType.POINT, commands: ['/parcours'], label: 'المسارات' },
  { gesture: GestureType.PEACE, commands: ['/stats'], label: 'الإحصائيات' },
  { gesture: GestureType.THUMBS_UP, back: true, label: 'السابق' },
  { gesture: GestureType.PINCH, click: true, label: 'نقرة (المؤشر)' },
  { gesture: GestureType.FIST, label: 'التمرير (إغلاق القبضة)' },
  { gesture: GestureType.SWIPE_LEFT, back: true, label: 'السابق (تمرير)' },
  { gesture: GestureType.SWIPE_RIGHT, forward: true, label: 'التالي (تمرير)' },
  { gesture: GestureType.SWIPE_UP, scroll: -1, label: 'تمرير لأعلى' },
  { gesture: GestureType.SWIPE_DOWN, scroll: 1, label: 'تمرير لأسفل' },
];

export interface GestureSettings {
  /** Number of consecutive frames a gesture must be held before firing. */
  holdFrames: number;
  /** Minimum delay (ms) between two emissions of the same gesture. */
  cooldownMs: number;
  /** Normalized displacement needed to register a swipe. */
  swipeThreshold: number;
  /** Play a short beep when a gesture is recognized. */
  sound: boolean;
}

export const DEFAULT_GESTURE_SETTINGS: GestureSettings = {
  holdFrames: 3,
  cooldownMs: 1200,
  swipeThreshold: 0.22,
  sound: true,
};
