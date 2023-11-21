import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVotanteService {

  private urlApi = 'http://localhost:8080/auth'; // Update the URL

  constructor(private http: HttpClient) { }

  registerUser(newUser: any) {
    return this.http.post(`${this.urlApi}/register`, newUser);
  }
}
