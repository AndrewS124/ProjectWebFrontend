import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosDTO } from '../DTO/UsuariosDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/Usuario/';

  constructor(private http: HttpClient) {}

  public getAllUsuarios(): Observable<UsuariosDTO[]> {
    console.log('Realizando solicitud GET a: ' + this.baseUrl); // Agrega un mensaje de registro
    return this.http.get<UsuariosDTO[]>(this.baseUrl);
  }

}
