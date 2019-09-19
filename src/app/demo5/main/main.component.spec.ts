import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Router } from '@angular/router';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        { provide: Router, useValue: routerSpy}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test button go to register', async(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(routerSpy.navigateByUrl).toHaveBeenCalled();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/register');

  }));

});
