import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { MockAuthService } from '../mock/mock-auth.service';

describe('LoginComponent', () => {

  describe('Test with real AuthService and localStorage', () => {
    let component: LoginComponent;
    beforeEach(() => {
      const authService: AuthService = new AuthService();
      component = new LoginComponent(authService);
    });
    afterEach(() => {
      component = null;
    });
    it('should able to show login when with token', () => {
      localStorage.removeItem('token');
      expect(component.needLogin()).toBeTruthy();
    });
    it('should able to hidden login when without token', () => {
      localStorage.setItem('token', '12345');
      expect(component.needLogin()).toBeFalsy();
    });
  });

  describe('Test with MockAuthService', () => {
    let component: LoginComponent;
    let authService: MockAuthService;

    beforeEach(() => {
      authService = new MockAuthService();
      component = new LoginComponent(authService);
    });
    afterEach(() => {
      component = null;
      authService = null;
    });
    it('should able to show login when with token', () => {
      authService.authenticated = false;
      expect(component.needLogin()).toBeTruthy();
    });
    it('should able to hidden login when without token', () => {
      authService.authenticated = true;
      expect(component.needLogin()).toBeFalsy();
    });
  });

  describe('Test with spyOn', () => {
    let component: LoginComponent;
    let authService: AuthService;
    beforeEach(() => {
      authService = new AuthService();
      component = new LoginComponent(authService);
    });
    afterEach(() => {
      component = null;
    });
    it('should able to show login when without token', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(false);
      expect(component.needLogin()).toBeTruthy();
      expect(authService.isAuthenticated).toHaveBeenCalled();
    });
    it('should able to hidden login when without token', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(component.needLogin()).toBeFalsy();
      expect(authService.isAuthenticated).toHaveBeenCalledTimes(1);
    });
  });

  describe('UI', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
