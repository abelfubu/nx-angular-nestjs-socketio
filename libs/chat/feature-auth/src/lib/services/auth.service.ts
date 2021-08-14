import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { StorageService } from './storage.service';
import { TokenResponse } from '@socketio/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storageService: StorageService,
  ) {}

  login(credentials: LoginRequest): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>('/api/login', credentials).pipe(
      tap(({ token }) => this.storageService.setLocalStorage(token)),
      catchError(() => this.handleErrorResponse()),
    );
  }

  private handleErrorResponse(): Observable<never> {
    this.storageService.removeLocalStorage();
    return EMPTY;
  }
}
