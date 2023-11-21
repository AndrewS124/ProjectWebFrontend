import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { filter } from 'rxjs/operators';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuard]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private authGuard: AuthGuard
  ) {}

  ngOnInit(): void {
    if (this.authService.hasValidToken()) {
      this.router.navigate(['/home']);
    }

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url === '/login' && !this.authGuard.canActivate()) {
        this.router.navigate(['/home']);
      }
    });
  }

  handleLogin() {
    this.authService.authenticate(this.email, this.password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        if (this.authService.hasValidToken()) {
          this.router.navigate(['/home']);
        } else {
          this.alertService.openAlert('Token inválido');
        }
      } else {
        this.alertService.openAlert('Usuario o Contraseña incorrecta');
      }
    });
  }
}
