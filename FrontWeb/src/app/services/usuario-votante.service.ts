import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVotanteService {

  private urlApi = 'http://localhost:8080/UsuarioVotante/';

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders();
    }
  }

  // Método para registrar un nuevo usuario
  registerUser(newUser: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.urlApi, newUser, { headers });
  }
}
