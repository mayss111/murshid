import { Component, OnInit } from '@angular/core';
import { Parcours } from '../../shared/models/parcours.model';
import { ParcoursService } from '../services/parcours.service';

@Component({
  selector: 'app-parcours-list',
  templateUrl: './parcours-list.component.html',
  styleUrls: ['../../dashboard/dashboard.component.css']
})
export class ParcoursListComponent implements OnInit {
  parcoursList: Parcours[] = [];
  loading = true;

  constructor(private parcoursService: ParcoursService) {}

  ngOnInit(): void {
    this.parcoursService.obtenirMesParcours().subscribe({
      next: (data) => {
        this.parcoursList = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
