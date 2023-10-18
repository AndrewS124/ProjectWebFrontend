// filter-canciones.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCanciones'
})
export class FilterCancionesPipe implements PipeTransform {
  transform(canciones: any[], searchText: string): any[] {
    if (!canciones || !searchText) {
      return canciones;
    }
    searchText = searchText.toLowerCase();

    return canciones.filter(cancion => {
      return cancion.nombre.toLowerCase().includes(searchText);
    });
  }
}
