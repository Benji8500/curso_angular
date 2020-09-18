import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {PlatoService} from '../../services/plato.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { EditorComponent } from './components/editor/editor.component';
import {AdminService} from '../../services/admin.service';
import {AuthService} from '../../services/auth.service';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, EditorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
      MatCardModule,
      MatButtonModule,
      HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],

  providers: [
    PlatoService,
      AdminService,
      AuthService
  ]

})
export class AdminModule { }
