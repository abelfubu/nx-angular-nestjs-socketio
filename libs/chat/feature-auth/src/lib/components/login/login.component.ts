import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'socketio-login',
  templateUrl: './login.component.html',
  styleUrls: ['../styles.scss'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private readonly authStore: AuthStore,
    private readonly formBuilder: FormBuilder,
  ) {}

  login(credentials: LoginRequest): void {
    if (this.form.invalid) return;
    this.authStore.login(credentials);
  }
}
