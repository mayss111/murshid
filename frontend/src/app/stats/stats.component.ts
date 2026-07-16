import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class StatsComponent implements OnInit {
  totalQuestionsAnswered = 0;
  successRate = 0;
  studyDaysStreak = 0;
  loading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserStats().subscribe({
      next: (stats) => {
        this.totalQuestionsAnswered = stats.questionsAnswered || 0;
        this.successRate = stats.successRate || 0;
        this.studyDaysStreak = stats.studyDaysStreak || 0;
        this.loading = false;
      },
      error: (err) => {
        console.error('خطأ في تحميل الإحصائيات', err);
        this.loading = false;
      }
    });
  }
}
