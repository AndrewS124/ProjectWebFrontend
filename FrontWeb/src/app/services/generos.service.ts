import { Injectable } from '@angular/core';

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

  constructor() { }
}
