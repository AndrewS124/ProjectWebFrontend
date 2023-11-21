import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioVotanteService } from 'src/app/services/usuario-votante.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  registrationError: string = '';

  constructor(
    private router: Router,
    private usuarioVService: UsuarioVotanteService,
    private authService: AuthService
  ) {}

  handleRegister() {
    const newUser = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    };

    this.usuarioVService.registerUser(newUser).subscribe(
      (response) => {
        // Redirect to login page on successful registration
        this.router.navigate(['/login']);
      },
      (error) => {
        // Display error message on registration failure
        this.registrationError = 'Error en el registro';
        console.error('Error de registro:', error);
      }
    );
  }
}
