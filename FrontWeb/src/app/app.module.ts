import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { FuncionamientoComponent } from './componentes/funcionamiento/funcionamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    PerfilComponent,
    FuncionamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
