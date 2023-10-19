import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  authenticate(username: string, password: string) {
    return this.usuarioService.getAllUsuarios().pipe(
      map((usuarios: any[]) => {
        const user = usuarios.find((u) => u.nombre === username && u.contraseña === password);
        if (user) {
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



}
