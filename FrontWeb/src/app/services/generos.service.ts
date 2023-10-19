import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Cancion {
  id: number;
  nombre: string;
  autor: string;
  votos: number;
}

@Injectable({
  providedIn: 'root'
})
export class GenerosService {


  
}
