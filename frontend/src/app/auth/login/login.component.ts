import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.error = 'يرجى تعبئة جميع الحقول';
      return;
    }
    this.loading = true;
    this.error = '';
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = err.error?.message || 'بيانات الدخول غير صحيحة أو الخادم غير متاح';
        this.loading = false;
      }
    });
  }

  fillDemoUser(): void {
    this.email = 'ahmed@example.com';
    this.password = 'Test@123456';
  }
}
