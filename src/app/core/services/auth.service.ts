import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly TOKEN_KEY = 'token'

  setToken(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value)
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isSignedIn() {
    return !!this.getToken()
  }
}
