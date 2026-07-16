import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TtsService {
  private apiUrl = `${environment.apiUrl}/tts`;

  constructor(private http: HttpClient) {}

  /**
   * Request server-side Arabic TTS (MP3). Returns the raw audio bytes.
   * The backend uses VoiceRSS so every user hears the same Arabic voice,
   * regardless of the device's installed voices.
   */
  speakArabic(text: string): Observable<Blob> {
    const headers = new HttpHeaders({ Accept: 'audio/mpeg' });
    return this.http.get(`${this.apiUrl}/arabic`, {
      headers,
      params: { text },
      responseType: 'blob'
    });
  }
}
