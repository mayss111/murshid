import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>© 2026 Murshid (مُرشِد). جميع الحقوق محفوظة. منصة تعلّم إسلامي تكيّفية تُرشد بالذكاء الاصطناعي.</p>
        <div class="footer-links">
          <a href="#">Tajweed</a>
          <a href="#">Fiqh</a>
          <a href="#">Hadith</a>
          <a href="#">Tafsir</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--border-light);
      margin-top: 4rem;
      padding: 2rem 0;
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .footer-links {
      display: flex;
      gap: 1.25rem;
    }
    .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      transition: var(--transition);
    }
    .footer-links a:hover {
      color: var(--primary-gold);
    }
  `]
})
export class FooterComponent {}
