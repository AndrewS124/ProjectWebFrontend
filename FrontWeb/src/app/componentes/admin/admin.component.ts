import { Component } from '@angular/core';
import { CancionService } from 'src/app/services/canciones.service';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  nombreCancion: string = '';
  autor: string = '';
  tipo: string = '';
  nombreEliminarCancion: string = '';
  nombreEliminarGenero: string = '';
  divVisible: string = ''; // Agrega una variable para controlar la visibilidad de los divs

  constructor(private cancionService: CancionService, private generosService: GenerosService) {}

  agregarCancion() {
    this.cancionService.agregarCancion(this.nombreCancion, this.autor).subscribe(
      (response) => {
        console.log('Canción agregada con éxito:', response);
        this.nombreCancion = '';
        this.autor = '';
      },
      (error) => {
        console.error('Error al agregar la canción:', error);
      }
    );
  }

  eliminarCancion() {
    const nombreCancionAEliminar = this.nombreEliminarCancion;

    if (nombreCancionAEliminar) {
      this.cancionService.obtenerIdCancionPorNombre(nombreCancionAEliminar).subscribe(
        (idCancionAEliminar) => {
          if (idCancionAEliminar) {
            this.cancionService.eliminarCancion(idCancionAEliminar).subscribe(
              (response) => {
                console.log('Canción eliminada con éxito:', response);
                this.nombreEliminarCancion = '';
              },
              (error) => {
                console.error('Error al eliminar la canción:', error);
              }
            );
          } else {
            console.error('Canción no encontrada');
          }
        },
        (error) => {
          console.error('Error al buscar el ID de la canción:', error);
        }
      );
    } else {
      console.error('Nombre de canción no válido. Ingresa un nombre válido.');
    }
  }


  agregarGenero() {
    if (this.tipo) {
      this.generosService.agregarGenero(this.tipo).subscribe(
        (response) => {
          console.log('Género agregado con éxito:', response);
          this.tipo = ''; // Limpia el campo de texto
        },
        (error) => {
          console.error('Error al agregar el género:', error);
        }
      );
    } else {
      console.error('Tipo de género no válido. Ingresa un tipo válido.');
    }
  }

  eliminarGenero() {
    const tipoGeneroAEliminar = this.nombreEliminarGenero;

    if (tipoGeneroAEliminar) {
      this.generosService.obtenerIdGeneroPorTipo(tipoGeneroAEliminar).subscribe(
        (idGeneroAEliminar) => {
          if (idGeneroAEliminar) {
            this.generosService.eliminarGenero(idGeneroAEliminar).subscribe(
              (response) => {
                console.log('Género eliminado con éxito:', response);
                this.nombreEliminarGenero = ''; //limpiar
              },
              (error) => {
                console.error('Error al eliminar el género:', error);
              }
            );
          } else {
            console.error('Género no encontrado');
          }
        },
        (error) => {
          console.error('Error al buscar el ID del género:', error);
        }
      );
    } else {
      console.error('Tipo de género no válido. Ingresa un tipo válido.');
    }
  }

  // Agrega la función para mostrar/ocultar los divs
  mostrarDiv(divId: string) {
    this.divVisible = divId;
  }
}
