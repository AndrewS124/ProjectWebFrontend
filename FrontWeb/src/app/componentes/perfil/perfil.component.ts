import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private router: Router, private authService: AuthService) {}

  nombreUsuario: string = '';
  correoUsuario: string = '';

  ngOnInit(): void {
    const usuarioData = this.authService.getUsuarioData();
    if (usuarioData) {
      this.nombreUsuario = usuarioData.nombre;
      this.correoUsuario = usuarioData.correo;
    }
  }

  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
