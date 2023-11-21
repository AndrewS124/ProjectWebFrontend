import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CancionDto } from '../DTO/CancionDTO';
import { GeneroDTO } from '../DTO/GeneroDTO';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  private urlApi = 'http://127.0.0.1:8080/Genero/';

  constructor(private http: HttpClient) {}

  public getGeneros(): Observable<GeneroDTO[]> {
    return this.http.get<GeneroDTO[]>(this.urlApi);
  }

  public agregarGenero(tipo: string): Observable<any> {
    const genero = { tipo: tipo, Lista: [], Admin: { nombre: '', correo: '', contraseña: '', autenticacion: false } };
    return this.http.post(this.urlApi, genero);
  }

  public eliminarGenero(id: number): Observable<any> {
    const url = `${this.urlApi}${id}`;
    return this.http.delete(url);
  }

  public obtenerIdGeneroPorTipo(tipo: string): Observable<number | null> {
    return this.getGeneros().pipe(
      map((generos: GeneroDTO[]) => {
        const generoEncontrado = generos.find((genero) => genero.tipo === tipo);
        return generoEncontrado ? generoEncontrado.id : null;
      })
    );
  }

  // ...

public obtenerCancionesPorGenero(generoId: number): Observable<CancionDto[]> {
  const url = `${this.urlApi}${generoId}/canciones`; // Asegúrate de que esta URL sea válida
  return this.http.get<CancionDto[]>(url);
}

// ...

}
