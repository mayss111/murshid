import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat.model';

const STORAGE_KEY = 'murshid.chat.history';

@Injectable({ providedIn: 'root' })
export class ChatHistoryService {
  private readonly welcome: ChatMessage = {
    role: 'assistant',
    content: 'السلام عليكم! أنا «مُرشِد»، معلّمك الإسلامي. اسألني في التجويد أو الفقه أو الحديث أو التفسير، وأنا معك. 🌿'
  };

  load(): ChatMessage[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [this.clone(this.welcome)];
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (!Array.isArray(parsed) || parsed.length === 0) return [this.clone(this.welcome)];
      return parsed;
    } catch {
      return [this.clone(this.welcome)];
    }
  }

  save(messages: ChatMessage[]): void {
    try {
      const toStore = messages
        .filter((m) => !m.pending)
        .map((m) => ({ role: m.role, content: m.content, timestamp: m.timestamp }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    } catch {
      /* storage unavailable */
    }
  }

  clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  private clone(m: ChatMessage): ChatMessage {
    return { role: m.role, content: m.content };
  }
}
