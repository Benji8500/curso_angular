import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonaComponent} from './components/persona/persona.component';



@NgModule({
  declarations: [
      PersonaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      PersonaComponent
  ]
})
export class PersonaModule { }
