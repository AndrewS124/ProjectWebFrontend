import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nombreUsuario: string = '';
  correoUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const usuarioInfo = this.authService.getUsuarioData();
    console.log('Usuario Info:', usuarioInfo);

    if (usuarioInfo) {
      this.nombreUsuario = usuarioInfo.nombre;
      this.correoUsuario = usuarioInfo.email;
    }
  }

  handleLogout(){
    this.authService.logout();
  }
}
