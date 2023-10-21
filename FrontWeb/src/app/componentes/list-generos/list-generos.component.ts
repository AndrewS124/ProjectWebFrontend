import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-list-generos',
  templateUrl: './list-generos.component.html',
  styleUrls: ['./list-generos.component.css']
})
export class ListGenerosComponent implements OnInit {
  generos: any[] = [];
  searchText: string = '';

  constructor(private router: Router, private generoService: GenerosService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData() {
    this.generoService.getGenerosConCanciones().subscribe(data => {
      this.generos = data;
      console.log(this.generos);
    });
  }
}

