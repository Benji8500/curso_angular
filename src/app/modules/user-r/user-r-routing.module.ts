import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRComponent} from './user-r/user-r.component';
import {Userr1Component} from './userr1/userr1.component';
import {Userr2Component} from './userr2/userr2.component';

const routes: Routes = [
  {path: '', component: UserRComponent,
  children: [
    {path: 'userr1', component: Userr1Component},
    {path: 'userr2', component: Userr2Component}
  ]}// path por defecto

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRRoutingModule { }
