import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../services/auth.service';


@NgModule({
  declarations: [
      LoginComponent,
      NgElseDirective],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
      ReactiveFormsModule,
      MatSidenavModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      HttpClientModule


  ],

  providers: [
      AuthService
  ]
})
export class LoginModule { }
