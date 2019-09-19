import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserCredentials } from '../models/user-credentials';
import { User } from '../models/user';
import { of } from 'rxjs';

describe('Demo2 UserService', () => {
  let service: UserService;
  let apiClientSpy;
  const userCredentials: UserCredentials = {
    email: 'email',
    password: 'password'
  };
  const expectUser: User = {
    email: 'email',
    username: 'username',
    token: 'token'
  };

  it('should able to get user when login sucsess', (done: DoneFn) => {
    // given
    apiClientSpy = jasmine.createSpyObj('ApiService', ['post']);
    apiClientSpy.post.and.returnValue(of(expectUser));
    service = new UserService(apiClientSpy);
    // when
    service.login(userCredentials).subscribe(
      user => {
        // then
        expect(user).toEqual(expectUser);
        done();
      },
      error => fail('Fail to simulate login success'),
    );
  });

});
