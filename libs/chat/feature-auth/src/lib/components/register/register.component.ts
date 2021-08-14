import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthStore } from '@socketio/chat/feature-auth';
import { RegisterRequest } from '../../models/register-request';
import { TngValidators } from '../../utils/TngValidators';

@Component({
  selector: 'socketio-register',
  templateUrl: './register.component.html',
  styleUrls: ['../styles.scss'],
})
export class RegisterComponent {
  form = this.formBuilder.group(
    {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validators: TngValidators.passwordsMatch },
  );

  constructor(
    private readonly authStore: AuthStore,
    private readonly formBuilder: FormBuilder,
  ) {}

  register({ password, email, username }: RegisterRequest): void {
    if (this.form.invalid) return;
    this.authStore.register({ password, email, username });
  }
}
