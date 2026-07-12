import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    private TOKEN_KEY = 'jwt_token';
    private USER_KEY = 'user_info';

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
    }

    setUser(user: any): void {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }

    getUser(): any | null {
        const u = localStorage.getItem(this.USER_KEY);
        return u ? JSON.parse(u) : null;
    }
}
