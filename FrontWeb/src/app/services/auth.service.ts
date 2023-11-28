import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  tipoUsuarioLogged: string = '';
  usuarioData: { nombre: string, correo: string, tipo: string} | null = null;
  private tipoUsuarioSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/auth', { nombre: username, contraseña: password })
      .pipe(
        map(response => {
          if (response && response.token) {
            // Si el backend devuelve un token válido, establece la autenticación como true
            this.isAuthenticated = true;
            // Guardar el token en el localStorage
            localStorage.setItem('token', response.token);

            // Obtener los datos del usuario al autenticarse
            return this.initializeUserData();
          } else {
            this.isAuthenticated = false;
            return of(false);
          }
        })
      );
  }

  initializeUserData(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.get<any>('http://localhost:8080/userData', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).pipe(
        map((userData: any) => {
          this.tipoUsuarioLogged = userData.tipo;
          this.usuarioData = { nombre: userData.nombre, correo: userData.correo, tipo: userData.tipo };
          this.isAuthenticated = true;
          this.tipoUsuarioSubject.next(userData.tipo);
          return true;
        }),
        catchError((error) => {
          console.error('Error al obtener datos del usuario:', error);
          return of(false);
        })
      );
    } else {
      return of(false);
    }
  }

  tipoUsuario(): Observable<string | null> {
    return this.tipoUsuarioSubject.asObservable();
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.tipoUsuarioLogged = '';
    this.tipoUsuarioSubject.next(null);
    this.usuarioData = null;
  }

  setUsuarioData(usuarioData: { nombre: string, correo: string , tipo: string}) {
    this.usuarioData = usuarioData;
  }

  getUsuarioData(): { nombre: string, correo: string } | null {
    return this.usuarioData;
  }
}

