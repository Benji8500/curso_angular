import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRComponent} from './user-r/user-r.component';

const routes: Routes = [
  {path: '', component: UserRComponent}// path por defecto

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRRoutingModule { }
