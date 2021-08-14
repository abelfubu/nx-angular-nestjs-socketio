import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TngValidators {
  static passwordsMatch(form: AbstractControl): ValidationErrors | null {
    if (form.get('password')?.value !== form.get('passwordConfirm')?.value) {
      return { passwordsMatch: true };
    }
    return null;
  }
}
