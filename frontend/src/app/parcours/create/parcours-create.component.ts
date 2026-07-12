import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParcoursService } from '../services/parcours.service';

@Component({
  selector: 'app-parcours-create',
  templateUrl: './parcours-create.component.html',
  styleUrls: ['../../auth/login/login.component.css']
})
export class ParcoursCreateComponent {
  matiere = 'Tajweed';
  loading = false;
  error = '';

  constructor(private parcoursService: ParcoursService, private router: Router) {}

  onGenerer(): void {
    this.loading = true;
    this.error = '';
    this.parcoursService.genererParcours(this.matiere).subscribe({
      next: (parcours) => {
        this.router.navigate(['/parcours', parcours.id]);
      },
      error: (err) => {
        this.error = err.error?.message || "حدث خطأ أثناء التوليد بالذكاء الاصطناعي";
        this.loading = false;
      }
    });
  }
}
