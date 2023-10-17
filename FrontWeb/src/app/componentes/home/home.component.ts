import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarListaCanciones = false;
  mostrarListaGeneros = false;

  // Otras propiedades, como canciones y cancionesPorGenero, deben definirse y llenarse con datos

  mostrarCanciones() {
    this.mostrarListaCanciones = true;
    this.mostrarListaGeneros = false;
  }

  mostrarGeneros() {
    this.mostrarListaCanciones = false;
    this.mostrarListaGeneros = true;
  }
}

