import { Component } from '@angular/core';
import { AuthStore } from '@socketio/chat/feature-auth';

@Component({
  template: `<header
    tng-header
    *ngIf="{ in: isLoggedIn$ | async }.in as isLoggedIn"
  >
    <h5 logo routerLink="">Chat</h5>
    <ng-container links>
      <a routerLink="">Home</a>
      <a routerLink="login" *ngIf="!isLoggedIn">Login</a>
      <a (click)="logout()" *ngIf="isLoggedIn">Logout</a>
    </ng-container>
  </header>`,
})
export class PrivateComponent {
  isLoggedIn$ = this.authStore.isLoggedIn$;
  constructor(private readonly authStore: AuthStore) {}

  logout(): void {
    this.authStore.logout();
  }
}
