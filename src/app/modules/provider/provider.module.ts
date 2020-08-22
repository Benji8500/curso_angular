import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {Provider1Component} from './components/provider1/provider1.component';
import {Provider2Component} from './components/provider2/provider2.component';



@NgModule({
  declarations: [
      Provider1Component,
      Provider2Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProviderModule { }
