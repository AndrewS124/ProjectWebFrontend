import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {

  constructor(private router: Router, private authService: AuthService,  private alertService: AlertService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  handleImageClick() {
    this.router.navigate(['/home']);
  }

  handleFunctionalityClick() {
    this.router.navigate(['/funcionamiento']);
  }

  handleAboutUsClick() {
    // Implementa la lógica para el botón "Quiénes Somos"
  }

  handleContactClick() {
    // Implementa la lógica para el botón de contacto
  }

  handleLoginClick() {
    this.router.navigate(['/login']);
  }

  handleLogout() {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }

  handleRegisterClick() {
    this.router.navigate(['/register'])
  }

  handleImagePerfilClick() {
    this.router.navigate(['/perfil']);
  }



}
