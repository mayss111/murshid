import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from './services/chat.service';
import { ChatMessage } from './models/chat.model';
import { SpeechService } from '../shared/services/speech.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  messages: ChatMessage[] = [];
  input = '';
  sending = false;
  error = '';
  speaking = false;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private chatService: ChatService, private speech: SpeechService) {
    this.speech.state$.subscribe((st) => (this.speaking = st.speaking));
  }

  ngOnInit(): void {
    this.messages.push({
      role: 'assistant',
      content: 'السلام عليكم! أنا «مُرشِد»، معلّمك الإسلامي. اسألني في التجويد أو الفقه أو الحديث أو التفسير، وأنا معك. 🌿'
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  send(): void {
    const text = this.input.trim();
    if (!text || this.sending) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    const assistantMsg: ChatMessage = { role: 'assistant', content: '', pending: true };
    this.messages.push(userMsg, assistantMsg);
    this.input = '';
    this.error = '';
    this.sending = true;

    const history = this.messages
      .filter((m) => !m.pending)
      .map((m) => ({ role: m.role, content: m.content }));

    this.chatService.sendMessage({ message: text, history }).subscribe({
      next: (res) => {
        assistantMsg.content = res.reply;
        assistantMsg.pending = false;
        this.sending = false;
      },
      error: () => {
        assistantMsg.content = 'عذراً، حدث خطأ أثناء الاتصال. حاول مرة أخرى.';
        assistantMsg.pending = false;
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

  speak(text: string): void {
    this.speech.speak(text, 'ar-SA');
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch {
      /* element not ready */
    }
  }
}
