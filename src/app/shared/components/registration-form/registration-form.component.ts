import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailValidator from '../../utils/emailValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.
  public constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.registrationForm.value);
  }
}
