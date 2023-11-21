import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { FuncionamientoComponent } from './componentes/funcionamiento/funcionamiento.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListCancionesComponent } from './componentes/list-canciones/list-canciones.component';
import { ListGenerosComponent } from './componentes/list-generos/list-generos.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AuthGuard } from './componentes/toolbar/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent},
    //quienes somos
    //contacto

  { path: 'register', component: RegisterComponent},
  { path: 'perfil', component: PerfilComponent , canActivate: [AuthGuard]},
  { path: 'canciones', component: ListCancionesComponent, canActivate: [AuthGuard]},
  { path: 'generos', component: ListGenerosComponent, canActivate: [AuthGuard]},
  { path: 'admin', component:AdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
