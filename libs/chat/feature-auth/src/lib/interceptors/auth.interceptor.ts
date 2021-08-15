import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly storageService: StorageService) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const authRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.storageService.getLocalStorage(),
      ),
    });

    return next.handle(authRequest);
  }
}
