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
  private urlApi = 'http://127.0.0.1:8080/Cancion/';


  constructor(private http: HttpClient) { }

  public getCanciones(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
