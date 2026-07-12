import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="progress-bar-wrapper">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" [style.width.%]="value"></div>
      </div>
      <span class="progress-label" *ngIf="showLabel">{{ value }}%</span>
    </div>
  `,
  styles: [`
    .progress-bar-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
    }
    .progress-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary-gold);
      min-width: 40px;
    }
  `]
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() showLabel: boolean = true;
}
