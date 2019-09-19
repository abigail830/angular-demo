import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static authenticated: boolean;
  constructor() { }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
