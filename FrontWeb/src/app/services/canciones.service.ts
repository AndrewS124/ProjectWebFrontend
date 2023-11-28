import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  private urlApi = 'http://localhost:8080/Cancion/';

  constructor(private http: HttpClient) {}

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

  public getCanciones(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.urlApi, { headers });
  }

  public agregarCancion(nombreCancion: string, autor: string): Observable<any> {
    const nuevaCancion = { nombreCancion, autor };
    const headers = this.getHeaders();
    return this.http.post(this.urlApi, nuevaCancion, { headers });
  }

  public eliminarCancion(id: number): Observable<any> {
    const url = `${this.urlApi}${id}`;
    const headers = this.getHeaders(); // Obtener los encabezados de autorización
  
    // Pasar los encabezados de autorización en la solicitud DELETE
    return this.http.delete(url, { headers });
  }
  

  public obtenerIdCancionPorNombre(nombreCancion: string): Observable<number | null> {
    return this.getCanciones().pipe(
      map((canciones: any[]) => {
        const cancionEncontrada = canciones.find((cancion) => cancion.nombreCancion === nombreCancion);
        return cancionEncontrada ? cancionEncontrada.id : null;
      })
    );
  }
  
}
