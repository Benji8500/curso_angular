import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Routing por componente:
const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: 'pages', loadChildren: () => import('./pages/pages.module'). then(m => m.PagesModule)}



];

/*const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages1/home/home.module'). then(m => m.HomeModule)},
  {path: 'admin', loadChildren: () => import('./pages1/admin/admin.module'). then(m => m.AdminModule)},
  {path: 'list', loadChildren: () => import('./pages1/list/list.module'). then(m => m.ListModule)}



];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild(ruta niño), for root(raiz)
  exports: [RouterModule]
})
export class AppRouting { }
