import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  tipoUsuarioLogged: String = '';
  

  usuarioData: { nombre: string, correo: string } | null = null; // Agregamos la propiedad para almacenar el nombre y el correo


  constructor(private usuarioService: UsuarioService) {}

  authenticate(username: string, password: string) {
    return this.usuarioService.getAllUsuarios().pipe(
      map((usuarios: any[]) => {
        
        
        const user = usuarios.find((u) => u.nombre === username && u.contrasena === password);

        if (user) {
          this.tipoUsuarioLogged = user.tipo;
          this.usuarioData = { nombre: user.nombre, correo: user.correo };
          this.isAuthenticated = true; 
          return true;
        } else {
          this.isAuthenticated = false;
          return false; 
        }
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
  }


  tipoUsuario(){
    return this.tipoUsuarioLogged;
  }

  setUsuarioData(usuarioData: { nombre: string, correo: string } ) {
    this.usuarioData = usuarioData;
  }

  getUsuarioData(): { nombre: string, correo: string } | null {
    return this.usuarioData;
  }
 
}
