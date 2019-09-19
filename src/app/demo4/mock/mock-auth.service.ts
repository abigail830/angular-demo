import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService extends AuthService {

  authenticated = false;

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
