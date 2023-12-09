import { AbstractControl } from '@angular/forms';

const emailValidator = (control: AbstractControl) => {
  const email = control.value;
  if (!email) {
    return null;
  }
  const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailRegexp.test(email) ? null : { emailValidator: true };
};

export default emailValidator;
