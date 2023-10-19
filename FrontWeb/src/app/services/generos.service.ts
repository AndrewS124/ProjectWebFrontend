import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private urlApi = 'http://127.0.0.1:8080/Genero/';

  constructor(private http: HttpClient) {}

  public getGeneros(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public agregarGenero(tipo: string): Observable<any> {
    const genero = { tipo: tipo };
    return this.http.post(this.urlApi, genero);
  }

  public eliminarGenero(id: number): Observable<any> {
    const url = this.urlApi + id;
    return this.http.delete(url);
  }

  public obtenerIdGeneroPorTipo(tipo: string): Observable<number | null> {
    return this.getGeneros().pipe(
      map((generos: any[]) => {
        const generoEncontrado = generos.find((genero) => genero.tipo === tipo);
        return generoEncontrado ? generoEncontrado.id : null;
      })
    );
  }
  
}
