import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) 
  {  }

  tipoUsuario(): Observable<string | null> {
    return this.authService.tipoUsuario();
  }
  

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  handleAdminButton() {
    this.router.navigate(['/admin']);
  }

  handleImageClick() {
    if(this.isAuthenticated()==false){
      this.alertService.openAlert('Porfavor inicia sesion o registrate.');
    }else{
      this.router.navigate(['/home']);
    }
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
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

  handleRegisterClick() {
    this.router.navigate(['/register']);
  }

  handleImagePerfilClick() {
    this.router.navigate(['/perfil']);
  }
}
