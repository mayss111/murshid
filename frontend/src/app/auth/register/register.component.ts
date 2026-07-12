import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  dialecte = 'arabe';
  error = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'يرجى تعبئة جميع الحقول المطلوبة';
      return;
    }
    this.loading = true;
    this.error = '';
    this.authService.register(this.email, this.password, this.firstName, this.lastName, this.dialecte).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = err.error?.message || "حدث خطأ أثناء التسجيل";
        this.loading = false;
      }
    });
  }
}
