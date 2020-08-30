import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Routing por componente:
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module'). then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module'). then(m => m.AdminModule)},
  {path: 'list', loadChildren: () => import('./pages/list/list.module'). then(m => m.ListModule)}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild(ruta niño), for root(raiz)
  exports: [RouterModule]
})
export class AppRouting { }
