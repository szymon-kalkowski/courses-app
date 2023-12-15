import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import emailValidator from '../utils/emailValidator';

@Directive({
  selector: '[emailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }
}
