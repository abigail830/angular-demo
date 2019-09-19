import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from '../models/user-credentials';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly loginUrl = 'http://conduit.productionready.io/api/users/login';

  constructor(private http: HttpClient) { }

  login(userCredentials: UserCredentials): Observable<User> {
    return this.http.post<User>(this.loginUrl, userCredentials);
  }
}
