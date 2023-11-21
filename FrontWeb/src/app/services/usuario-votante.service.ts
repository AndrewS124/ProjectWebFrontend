import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioVotanteDTO } from '../DTO/UsuarioVotanteDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVotanteService {

  private urlApi = 'http://localhost:8080/UsuarioVotante/';

  constructor(private http: HttpClient) { }

  registerUser(newUser: UsuarioVotanteDTO) {
    return this.http.post(this.urlApi, newUser);
  }
}
