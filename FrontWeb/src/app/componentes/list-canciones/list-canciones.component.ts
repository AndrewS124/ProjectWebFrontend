import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/canciones.service';

@Component({
  selector: 'app-list-canciones',
  templateUrl: './list-canciones.component.html',
  styleUrls: ['./list-canciones.component.css']
})
export class ListCancionesComponent implements OnInit{

  canciones: any[] = [];
  searchText: string = '';


  constructor( private router: Router,private cancionService: CancionService){}

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
