import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthStore } from '../store/auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authStore: AuthStore,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authStore.isLoggedIn$.pipe(
      tap((isLoggedIn) => !isLoggedIn && this.router.navigate(['/login'])),
    );
  }
}
