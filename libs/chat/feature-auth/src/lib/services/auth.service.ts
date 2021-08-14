import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { StorageService } from './storage.service';
import { TokenResponse } from '@socketio/shared/models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '.prisma/client';
import { RegisterRequest } from '../models/register-request';

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
      // catchError((error) => this.handleErrorResponse(error)),
    );
  }

  register(credentials: RegisterRequest): Observable<User> {
    return this.httpClient
      .post<TokenResponse>('/api/register', credentials)
      .pipe(
        tap(({ token }) => this.storageService.setLocalStorage(token)),
        map(({ token }) => this.decodeJwtToken(token)),
        // catchError((error) => this.handleErrorResponse(error)),
      );
  }

  decodeJwtToken(token: string): User {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }

  private handleErrorResponse(
    error: HttpErrorResponse,
  ): Observable<HttpErrorResponse> {
    this.storageService.removeLocalStorage();
    return of(error);
  }
}
