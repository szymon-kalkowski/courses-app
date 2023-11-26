import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [
    /*Add your code here*/
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
