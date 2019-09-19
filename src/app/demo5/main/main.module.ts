import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
