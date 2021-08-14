import { User } from '.prisma/client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenResponse } from '@socketio/shared/models';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { RegisterRequest } from '../models/register-request';
import { StorageService } from './storage.service';

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
      catchError((error) => this.handleErrorResponse(error)),
    );
  }

  register(credentials: RegisterRequest): Observable<User> {
    const url = '/api/register';
    return this.httpClient.post<TokenResponse>(url, credentials).pipe(
      tap(({ token }) => this.storageService.setLocalStorage(token)),
      map(({ token }) => this.decodeJwtToken(token)),
      catchError((error) => this.handleErrorResponse(error)),
    );
  }

  decodeJwtToken(token: string): User {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }

  isJwtExpired(): boolean {
    const helper = new JwtHelperService();
    const token = this.storageService.getLocalStorage();
    return helper.isTokenExpired(token);
  }

  private handleErrorResponse(error: HttpErrorResponse): Observable<never> {
    this.storageService.removeLocalStorage();
    return throwError(() => error);
  }
}
