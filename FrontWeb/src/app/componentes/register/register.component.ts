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
  usuario: string = '';
  password: string = '';
  correo: string = '';

  constructor(
    private router: Router,
    private usuarioVService: UsuarioVotanteService,
    private authService: AuthService
  ) {}

  handleRegister() {
    
    const newUser = {
      nombre: this.usuario,
      contraseña: this.password,
      correo: this.correo,
      autenticacion: true,
      tipo: 'Votante',
      activacion: true,
    };

    this.usuarioVService.registerUser(newUser).subscribe(
      (response) => {
        this.authService.setUsuarioData({ nombre: newUser.nombre, correo: newUser.correo });

        this.authService.isAuthenticated = true;
        this.router.navigate(['/home']);

        // Limpia los campos del formulario
        this.usuario = '';
        this.password = '';
        this.correo = '';
      },
      (error) => {
        console.error('Error de registro:', error);
      }
    );
  }
}
