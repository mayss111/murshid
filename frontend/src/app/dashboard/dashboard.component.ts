import { Component, OnInit } from '@angular/core';
import { Parcours } from '../shared/models/parcours.model';
import { ParcoursService } from '../parcours/services/parcours.service';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parcours: Parcours[] = [];
  user: User | null = null;
  totalPoints = 0;
  completedCount = 0;
  activeCount = 0;
  loading = true;

  constructor(
    private parcoursService: ParcoursService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadStats();
    this.loadParcours();
  }

  loadProfile(): void {
    this.authService.getCurrentUser().subscribe({
      next: (u) => this.user = u,
      error: () => {}
    });
  }

  loadParcours(): void {
    this.parcoursService.obtenirMesParcours().subscribe({
      next: (data) => {
        this.parcours = data;
        if (!this.completedCount) {
          this.completedCount = data.filter(p => p.status === 'TERMINE').length;
        }
        if (!this.activeCount) {
          this.activeCount = data.filter(p => p.status === 'EN_COURS').length;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('خطأ في تحميل المسارات', err);
        this.loading = false;
      }
    });
  }

  loadStats(): void {
    this.authService.getUserStats().subscribe({
      next: (stats) => {
        this.totalPoints = stats.totalPoints || 0;
        this.completedCount = stats.completedParcours || 0;
        this.activeCount = stats.activeParcours || 0;
      },
      error: (err) => console.error('خطأ في تحميل الإحصائيات', err)
    });
  }
}
