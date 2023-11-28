import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) {}

  handleLogin() {
    this.authService.authenticate(this.username, this.password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.authService.initializeUserData().subscribe((userDataInitialized) => {
          if (userDataInitialized) {
            this.router.navigate(['/home']);
          } else {
            this.alertService.openAlert('Error al obtener los datos del usuario');
          }
        });
      } else {
        this.alertService.openAlert('Usuario o Contraseña incorrecta');
      }
    });
  }
  
  
}
