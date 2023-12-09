import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;
  //Use the names `email` and `password` for form controls.
  public email: string = '';
  public password: string = '';

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
