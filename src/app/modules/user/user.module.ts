import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ad1Component} from '../admin/components/ad1/ad1.component';
import {Ad2Component} from '../admin/components/ad2/ad2.component';
import {Ad3Component} from '../admin/components/ad3/ad3.component';
import {Us1Component} from './components/us1/us1.component';
import {Us2Component} from './components/us2/us2.component';



@NgModule({
  declarations: [
    Us1Component,
    Us2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Us1Component,
    Us2Component
  ]
})
export class UserModule { }
