import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private storage = inject(StorageService);
    private router = inject(Router);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.storage.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.storage.removeToken();
                    this.router.navigate(['/login']);
                }
                return throwError(() => error);
            })
        );
    }
}
