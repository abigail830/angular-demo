import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserCredentials } from '../models/user-credentials';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user';
import { fail } from 'assert';

describe('Demo1 UserService', () => {

  describe('Test with HttpTestingController', () => {
    let service: UserService;
    let testingController: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UserService]
      });
      service = TestBed.get(UserService);
      testingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      testingController.verify();
    });

    it('Should able to get user when login success', (done: DoneFn) => {
      // given
      const userCredentials: UserCredentials = {
        email: 'email',
        password: 'password'
      };
      const expectUser: User = {
        email: 'email',
        username: 'username',
        token: 'token'
      };
      // when
      service.login(userCredentials).subscribe(user => {
        expect(user).toEqual(expectUser);
        done();
      }, fail);

      const request = testingController.expectOne(service.loginUrl);
      expect(request.request.method).toEqual('POST');
      request.flush(expectUser);
    });

    it('Should able to get error when login fail', () => {
      // given
      const userCredentials: UserCredentials = {
        email: 'email',
        password: 'password'
      };
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const error = 'Invalid request parameters';

      // when
      service.login(userCredentials).subscribe(
        user => fail('Fail to simulate error'),
        err => {
          expect(err.error).toBe(error);
          expect(err.status).toBe(400);
        }
      );

      // then
      const request = testingController.expectOne(service.loginUrl);
      expect(request.request.method).toEqual('POST');
      request.flush(error, mockErrorResponse);
    });
  });

});
