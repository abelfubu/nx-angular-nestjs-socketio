import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { StorageService } from './storage.service';
import { TokenResponse } from '@socketio/shared/models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '.prisma/client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storageService: StorageService,
  ) {}

  login(credentials: LoginRequest): Observable<User> {
    return this.httpClient.post<TokenResponse>('/api/login', credentials).pipe(
      tap(({ token }) => this.storageService.setLocalStorage(token)),
      map(({ token }) => this.decodeJwtToken(token)),
      catchError(() => this.handleErrorResponse()),
    );
  }

  decodeJwtToken(token: string): User {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }

  private handleErrorResponse(): Observable<never> {
    this.storageService.removeLocalStorage();
    return EMPTY;
  }
}
