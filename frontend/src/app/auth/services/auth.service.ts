import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse, User, UserStats } from '../../shared/models/user.model';
import { StorageService } from '../../core/services/storage.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient, private storage: StorageService) {}

    register(email: string, password: string, firstName: string, lastName: string, dialecte: string = 'arabe'): Observable<AuthResponse> {
        const dto = { email, password, firstName, lastName, dialecte };
        return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, dto).pipe(
            tap(response => {
                this.storage.setToken(response.token);
                this.storage.setUser(response);
            })
        );
    }

    login(email: string, password: string): Observable<AuthResponse> {
        const dto = { email, password };
        return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, dto).pipe(
            tap(response => {
                this.storage.setToken(response.token);
                this.storage.setUser(response);
            })
        );
    }

    getCurrentUser(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/users/me`);
    }

    getUserStats(): Observable<UserStats> {
        return this.http.get<UserStats>(`${this.apiUrl}/users/me/stats`);
    }

    logout(): void {
        this.storage.removeToken();
    }

    isAuthenticated(): boolean {
        return !!this.storage.getToken();
    }
}
