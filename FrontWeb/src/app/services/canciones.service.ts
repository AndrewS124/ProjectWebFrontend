import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  private urlApi = 'http://localhost:8080/Cancion/';

  constructor(private http: HttpClient) {}

  public getCanciones(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public agregarCancion(nombreCancion: string, autor: string): Observable<any> {
    const nuevaCancion = { nombreCancion, autor };
    return this.http.post(this.urlApi, nuevaCancion);
  }

  public eliminarCancion(id: number): Observable<any> {
    const url = this.urlApi + id;
    return this.http.delete(url);
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
