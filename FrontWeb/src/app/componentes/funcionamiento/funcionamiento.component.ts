import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.css']
})
export class FuncionamientoComponent {

  constructor(private router: Router, private authService: AuthService) { }

  handleVotarInicio() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
