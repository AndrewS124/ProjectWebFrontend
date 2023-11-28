import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/Register.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private registerService: RegisterService,
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

    this.registerService.registerUser(newUser).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de registro:', error);
      }
    );
  }
}
