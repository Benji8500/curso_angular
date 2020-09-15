import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { LoginComponent } from './login.component';
import {NgElseDirective} from '../shared/directives/ng-else.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../shared/services/auth.service';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
      LoginComponent,
      NgElseDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
