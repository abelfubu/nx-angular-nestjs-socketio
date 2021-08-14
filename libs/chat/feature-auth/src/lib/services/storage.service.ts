import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly KEY = 'USR_TKN';

  setLocalStorage(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  getLocalStorage(): string {
    return localStorage.getItem(this.KEY) ?? '';
  }

  removeLocalStorage(): void {
    localStorage.removeItem(this.KEY);
  }
}
