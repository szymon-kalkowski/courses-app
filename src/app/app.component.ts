import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';

  constructor(private router: Router) {}

  onLoginButtonClick(): void {
    this.router.navigate(['/login']);
  }
}
