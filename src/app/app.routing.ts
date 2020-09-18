import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Routing por componente:
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./modules/login/login.module'). then(m => m.LoginModule)},
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),

  }


];

/*const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', loadChildren: () => import('./pages1/admin/admin.module'). then(m => m.AdminModule)},
  {path: 'admin', loadChildren: () => import('./pages1/admin/admin.module'). then(m => m.AdminModule)},
  {path: 'list', loadChildren: () => import('./pages1/list/list.module'). then(m => m.ListModule)}



];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild(ruta niño), for root(raiz)
  exports: [RouterModule]
})
export class AppRouting { }
