import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        () => {
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
