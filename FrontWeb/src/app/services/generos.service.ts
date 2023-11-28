import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private urlApi = 'http://127.0.0.1:8080/Genero/';

  constructor(private http: HttpClient) {}

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para agregar el token al encabezado de las solicitudes
  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      // Si no hay token, se devuelve un encabezado vacío
      return new HttpHeaders();
    }
  }

  // Método para obtener géneros
  public getGeneros(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.urlApi, { headers });
  }

  // Método para agregar un género
  public agregarGenero(tipo: string): Observable<any> {
    const genero = { tipo: tipo };
    const headers = this.getHeaders();
    return this.http.post(this.urlApi, genero, { headers });
  }

  // Método para eliminar un género
  public eliminarGenero(id: number): Observable<any> {
    const url = `${this.urlApi}${id}`;
    const headers = this.getHeaders();
    return this.http.delete(url, { headers });
  }

  // Método para obtener el ID de un género por tipo
  public obtenerIdGeneroPorTipo(tipo: string): Observable<number | null> {
    return this.getGeneros().pipe(
      map((generos: any[]) => {
        const generoEncontrado = generos.find((genero) => genero.tipo === tipo);
        return generoEncontrado ? generoEncontrado.id : null;
      })
    );
  }

  // Método para obtener géneros con canciones incluidas
  public getGenerosConCanciones(): Observable<any[]> {
    const url = `${this.urlApi}?include=canciones`;
    const headers = this.getHeaders();
    return this.http.get<any[]>(url, { headers });
  }
}
