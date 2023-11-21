import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UsuarioService} from './usuario.service';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  tipoUsuarioLogged: String = '';
  usuarioData: { nombre: string, correo: string } | null = null;
  private tokenKey = 'jwt_token';

  private baseUrl = 'http://localhost:8080';
  private loginUrl = '/auth/login';

  constructor(private usuarioService: UsuarioService, private router: Router, private http: HttpClient) {
  }

  authenticate(email: string, password: string): Observable<boolean> {
    const loginData = {email, password}; // Modify this based on your DTO structure

    return this.http.post<any>(`${this.baseUrl}${this.loginUrl}`, loginData).pipe(
      map((response) => {
        const token = response.accessToken;

        if (token) {
          this.parseAndStoreToken(token);
          this.checkTokenExpiration();
          return true;
        } else {
          this.isAuthenticated = false;
          return false;
        }
      })
    );
  }

  private parseAndStoreToken(token: string): void {
    const tokenPayload = this.parseJwt(token);
    this.tipoUsuarioLogged = tokenPayload.tipo;
    this.usuarioData = {nombre: tokenPayload.nombre, correo: tokenPayload.correo};
    this.isAuthenticated = true;

    // Almacenar el token en el almacenamiento local
    localStorage.setItem(this.tokenKey, token);
  }


  logout() {
    this.isAuthenticated = false;
    // Eliminar el token al cerrar sesión
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  checkTokenExpiration() {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      const tokenPayload = this.parseJwt(token);
      const expirationDate = tokenPayload.exp * 1000; // Convertir a milisegundos

      if (Date.now() >= expirationDate) {
        // Token expirado, realizar acciones necesarias
        this.logout();
      }
    }
  }

  private parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }

  //Usado para mostrar u ocultar rutas o botones dentro de la aplicacion
  hasRole(role: string): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      const tokenPayload = this.parseJwt(token);
      const userRole = tokenPayload.tipo;

      return userRole === role;
    }

    return false;
  }

  tipoUsuario() {
    return this.tipoUsuarioLogged;
  }

  setUsuarioData(usuarioData: { nombre: string, correo: string }) {
    this.usuarioData = usuarioData;
  }

  getUsuarioData(): { nombre: string, correo: string } | null {
    return this.usuarioData;
  }

}
