import { Component } from '@angular/core';
import { CancionService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarListaCanciones = false;
  mostrarListaGeneros = false;

  // Otras propiedades, como canciones y cancionesPorGenero, deben definirse y llenarse con datos
  canciones: any = {};

  constructor( private cancionService: CancionService){
  }

  mostrarCanciones() {
    this.mostrarListaCanciones = true;
    this.mostrarListaGeneros = false;
  }

  mostrarGeneros() {
    this.mostrarListaCanciones = false;
    this.mostrarListaGeneros = true;
  }
  ngOnInit() {
    // Puedes utilizar el servicio aquí, por ejemplo:
    this.cancionService.obtenerCanciones().subscribe((data: any) => {
      this.canciones = data;
    });
  }
}

