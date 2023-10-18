import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private urlApi = 'http://127.0.0.1:8080/Genero/';

  constructor(private http: HttpClient) { }
  public getGeneros(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
