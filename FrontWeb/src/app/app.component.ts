import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontWeb';



  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/login']); //poner como principal /home :c

  }


}
