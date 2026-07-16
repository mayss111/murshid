import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parcours } from '../../shared/models/parcours.model';
import { Lecon } from '../../shared/models/lecon.model';
import { ParcoursService } from '../services/parcours.service';

@Component({
  selector: 'app-parcours-detail',
  templateUrl: './parcours-detail.component.html',
  styleUrls: ['./parcours-detail.component.css']
})
export class ParcoursDetailComponent implements OnInit {
  parcours: Parcours | null = null;
  selectedLesson: Lecon | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private parcoursService: ParcoursService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.parcoursService.obtenirParcours(id).subscribe({
        next: (data) => {
          data.lecons = [...(data.lecons || [])].sort((a, b) => (a.ordreSequence || 0) - (b.ordreSequence || 0));
          this.parcours = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }

  openLessonModal(lecon: Lecon): void {
    this.selectedLesson = lecon;
  }

  closeLessonModal(): void {
    this.selectedLesson = null;
  }

  getSelectedLessonContent(): string {
    if (!this.selectedLesson) {
      return '';
    }

    return this.selectedLesson.contenu;
  }
}
