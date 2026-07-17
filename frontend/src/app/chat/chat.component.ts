import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { ChatService } from './services/chat.service';
import { ChatHistoryService } from './services/chat-history.service';
import { ChatMessage } from './models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  messages: ChatMessage[] = [];
  input = '';
  sending = false;
  error = '';
  listening = false;

  private recognition: any = null;
  private readonly speechLang = 'ar-SA';

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(
    private chatService: ChatService,
    private history: ChatHistoryService
  ) {}

  ngOnInit(): void {
    this.messages = this.history.load();
    this.initSpeechRecognition();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.stopListening();
  }

  send(): void {
    const text = this.input.trim();
    if (!text || this.sending) return;

    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    const userMsg: ChatMessage = { role: 'user', content: text, timestamp: timeStr };
    const assistantMsg: ChatMessage = { role: 'assistant', content: '', pending: true, timestamp: timeStr };
    this.messages.push(userMsg, assistantMsg);
    this.input = '';
    this.error = '';
    this.sending = true;

    const history = this.messages
      .filter((m) => !m.pending)
      .map((m) => ({ role: m.role, content: m.content }));

    this.chatService.sendMessage({ message: text, history }).subscribe({
      next: (res) => {
        const nowResp = new Date();
        assistantMsg.content = res.reply;
        assistantMsg.pending = false;
        assistantMsg.timestamp = nowResp.getHours().toString().padStart(2, '0') + ':' + nowResp.getMinutes().toString().padStart(2, '0');
        this.sending = false;
        this.persist();
      },
      error: () => {
        const nowErr = new Date();
        assistantMsg.content = 'عذراً، حدث خطأ أثناء الاتصال. حاول مرة أخرى.';
        assistantMsg.pending = false;
        assistantMsg.timestamp = nowErr.getHours().toString().padStart(2, '0') + ':' + nowErr.getMinutes().toString().padStart(2, '0');
        this.sending = false;
        this.error = 'تعذّر إرسال الرسالة.';
      }
    });
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  // --- Micro (reconnaissance vocale) ---
  toggleMic(): void {
    if (!this.recognition) {
      this.error = 'الميكروفون غير مدعوم في هذا المتصفّح.';
      return;
    }
    if (this.listening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  private startListening(): void {
    try {
      this.recognition.lang = this.speechLang;
      this.recognition.start();
    } catch {
      /* already started */
    }
  }

  private stopListening(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {
        /* ignore */
      }
    }
  }

  private initSpeechRecognition(): void {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.lang = this.speechLang;
    rec.interimResults = true;
    rec.continuous = false;

    rec.onstart = () => {
      this.listening = true;
    };
    rec.onend = () => {
      this.listening = false;
    };
    rec.onerror = () => {
      this.listening = false;
    };
    rec.onresult = (event: any) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      this.input = transcript;
    };

    this.recognition = rec;
  }

  clearHistory(): void {
    this.history.clear();
    this.messages = [this.history.load()[0]];
    this.error = '';
  }

  private persist(): void {
    this.history.save(this.messages);
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch {
      /* element not ready */
    }
  }
}
