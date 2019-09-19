import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserCredentials } from '../models/user-credentials';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  login(userCredentials: UserCredentials): Observable<User> {
    return this.apiService.post('/users/login', {user: userCredentials});
  }
}
