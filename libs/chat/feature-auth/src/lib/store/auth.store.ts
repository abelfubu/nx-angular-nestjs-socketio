import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { User } from '@prisma/client';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { RegisterRequest } from '../models/register-request';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

export interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

const DEFAULT_STATE: AuthState = {
  user: {} as User,
  isLoggedIn: false,
};

@Injectable({ providedIn: 'root' })
export class AuthStore extends ComponentStore<AuthState> {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly storageService: StorageService,
  ) {
    super(DEFAULT_STATE);
    const token = this.storageService.getLocalStorage();
    if (!token) return;
    this.setUser(this.authService.decodeJwtToken(token));
  }

  readonly user$ = this.select(({ user }) => user);
  readonly isLoggedIn$ = this.select(({ isLoggedIn }) => isLoggedIn);

  readonly login = this.effect((credentials$: Observable<LoginRequest>) =>
    credentials$.pipe(
      switchMap((credentials) =>
        this.authService.login(credentials).pipe(
          tap(() => this.router.navigate(['/'])),
          tapResponse(
            (user) => this.setUser(user),
            (error) => console.log(error),
          ),
        ),
      ),
    ),
  );

  readonly register = this.effect((credentials$: Observable<RegisterRequest>) =>
    credentials$.pipe(
      switchMap((credentials) =>
        this.authService.register(credentials).pipe(
          tap(() => this.router.navigate(['/'])),
          tapResponse(
            (user) => this.setUser(user),
            (error) => console.log(error),
          ),
        ),
      ),
    ),
  );

  readonly logout = this.effect((trigger$) =>
    trigger$.pipe(
      tap(() => {
        this.storageService.removeLocalStorage();
        this.router.navigate(['/login']);
      }),
    ),
  );

  readonly setUser = this.updater((state, user: User) => ({
    ...state,
    user,
    isLoggedIn: true,
  }));
}

// SwitchMap cancels previous requests and only perform the last one
// MergeMap performs all requests in parallel
// ConcatMap Performs all requests in sequence
// ExhaustMap cancels last requests until first request is finished
