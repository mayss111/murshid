import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluationResponse, Question } from '../../shared/models/question.model';
import { Lecon } from '../../shared/models/lecon.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuizService {
    private apiUrl = `${environment.apiUrl}/question`;

    constructor(private http: HttpClient) {}

    obtenirQuestionsParLecon(leconId: number): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.apiUrl}/lecon/${leconId}`);
    }

    obtenirLeconDetails(leconId: number): Observable<Lecon> {
        return this.http.get<Lecon>(`${this.apiUrl}/lecon-details/${leconId}`);
    }

    soumettre(questionId: number, reponse: string): Observable<EvaluationResponse> {
        return this.http.post<EvaluationResponse>(`${this.apiUrl}/soumettre`, { questionId, reponse });
    }
}
