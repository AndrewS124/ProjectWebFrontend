import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router, private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  handleImagePerfilClick() {
    this.router.navigate(['/perfil']);
  }
  

  handleRegisterClick() {
    // Implementa la lógica para el botón de registro
  }

  handleLoginClick() {
    this.router.navigate(['/login']);
  }

  handleContactClick() {
    // Implementa la lógica para el botón de contacto
  }

  handleAboutUsClick() {
    // Implementa la lógica para el botón "Quiénes Somos"
  }

  handleFunctionalityClick() {
    this.router.navigate(['/funcionamiento']);
  }

  handleImageClick() {
    this.router.navigate(['']);
  }

  handleLogout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }

}
