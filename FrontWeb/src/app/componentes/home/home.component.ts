import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
handleGeneros() {
  this.router.navigate(['/generos']);
}



  mostrarListaCanciones = false;
  mostrarListaGeneros = false;

  // Otras propiedades, como canciones y cancionesPorGenero, deben definirse y llenarse con datos
  canciones: any[] = [];

  constructor( private router: Router,private cancionService: CancionService){}


  handleCanciones() {
    this.router.navigate(['/canciones']);
  }

  ngOnInit() {
    this.llenarDta();
  }

  llenarDta(){
    this.cancionService.getCanciones().subscribe(canciones => {
      this.canciones =  canciones;
      console.log(this.canciones);
    })
  }


}

