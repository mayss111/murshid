import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcours } from '../../shared/models/parcours.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ParcoursService {
    private apiUrl = `${environment.apiUrl}/parcours`;

    constructor(private http: HttpClient) {}

    genererParcours(matiere: string): Observable<Parcours> {
        return this.http.post<Parcours>(`${this.apiUrl}/generer`, { matiere });
    }

    obtenirParcours(id: number): Observable<Parcours> {
        return this.http.get<Parcours>(`${this.apiUrl}/${id}`);
    }

    obtenirMesParcours(): Observable<Parcours[]> {
        return this.http.get<Parcours[]>(`${this.apiUrl}/mes-parcours`);
    }

    obtenirProgression(id: number): Observable<{ progression: number }> {
        return this.http.get<{ progression: number }>(`${this.apiUrl}/${id}/progression`);
    }
}
