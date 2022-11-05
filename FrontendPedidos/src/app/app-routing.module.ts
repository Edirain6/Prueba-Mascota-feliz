import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Plantilla/error/error.component';
import { InicioComponent } from './Plantilla/inicio/inicio.component';

const routes: Routes = [{
  path:"",
  component: InicioComponent
},
{
  path:"/",
  pathMatch: 'full',
  redirectTo: '/inicio'
},
{
  path: 'seguridad',
  loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
},
{
  path: 'seguridad',
  loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
},
{
  path: 'seguridad',
  loadChildren: () => import("./modulos/pedidos/pedidos.module").then(x => x.PedidosModule)
},
{
  path:'**',
  component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
