import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/Usuario/';

  constructor(private http: HttpClient) {}

  public getAllUsuarios(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

}
