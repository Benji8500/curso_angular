import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlatoComponent} from './plato.component';
import {PlatoService} from '../../services/plato.service';
import {PlatoRoutingModule} from './plato-routing.module';



@NgModule({
  declarations: [PlatoComponent],
  imports: [
    CommonModule,
    PlatoRoutingModule
  ],
  providers: [
      PlatoService
  ]
})
export class PlatoModule { }
