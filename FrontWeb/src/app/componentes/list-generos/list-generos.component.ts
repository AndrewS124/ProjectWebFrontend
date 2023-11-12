import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-list-generos',
  templateUrl: './list-generos.component.html',
  styleUrls: ['./list-generos.component.css'],
})
export class ListGenerosComponent implements OnInit {
  generos: any[] = [];
  searchText: string = '';

  constructor(private router: Router, private generoService: GenerosService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData() {
    this.generoService.getGeneros().subscribe((generos) => {
      this.generos = generos;
      // Agregar la propiedad mostrarCanciones a cada género
      this.generos.forEach((genero) => {
        genero.mostrarCanciones = false;
      });

      const observables = this.generos.map((genero) => this.generoService.obtenerCancionesPorGenero(genero.id));

      forkJoin(observables).subscribe((canciones) => {
        canciones.forEach((cancionesPorGenero, index) => {
          this.generos[index].canciones = cancionesPorGenero;
        });
      });
    });
  }

  toggleCanciones(genero: any) {
    genero.mostrarCanciones = !genero.mostrarCanciones;
  }


}
