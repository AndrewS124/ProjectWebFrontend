import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { FuncionamientoComponent } from './componentes/funcionamiento/funcionamiento.component';

const routes: Routes = [
  { path: 'funcionamiento', component: FuncionamientoComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
