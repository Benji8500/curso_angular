import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
      MatSidenavModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule
  ],
  providers: [
      ProductService
  ]
})
export class AdminModule { }
