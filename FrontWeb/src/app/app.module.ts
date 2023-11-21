import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterCancionesPipe } from './componentes/list-canciones/filter-canciones.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionamientoComponent } from './componentes/funcionamiento/funcionamiento.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
//MATERIAL
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './componentes/admin/admin.component';
import { AlertComponent } from './componentes/alert/alert.component';
import { ListCancionesComponent } from './componentes/list-canciones/list-canciones.component';
import { ListGenerosComponent } from './componentes/list-generos/list-generos.component';
import {AuthInterceptor} from "./services/intercept.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    PerfilComponent,
    FuncionamientoComponent,
    HomeComponent,
    RegisterComponent,
    ListCancionesComponent,
    ListGenerosComponent,
    FilterCancionesPipe,
    AlertComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
