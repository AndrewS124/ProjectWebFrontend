import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Genero {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private baseUrl = 'http://127.0.0.1:8080/Cancion/'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) { }

  obtenerCanciones(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
