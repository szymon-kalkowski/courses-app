import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';
  isLogged$ = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isAuthorized$.subscribe((isAuthorized) => {
      this.isLogged$ = isAuthorized;
    });
  }

  onLoginButtonClick(): void {
    this.router.navigate(['/login']);
  }

  onLogoutButtonClick(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
