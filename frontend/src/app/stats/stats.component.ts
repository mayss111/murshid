import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class StatsComponent {
  totalQuestionsAnswered = 14;
  successRate = 92;
  studyDaysStreak = 5;
}
