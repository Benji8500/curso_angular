import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRRoutingModule } from './user-r-routing.module';
import {UserRComponent} from './user-r/user-r.component';


@NgModule({
  declarations: [
      UserRComponent
  ],
  imports: [
    CommonModule,
    UserRRoutingModule
  ]
})
export class UserRModule { }
