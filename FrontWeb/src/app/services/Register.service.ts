import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = 'http://localhost:8080/registro';

  constructor(private http: HttpClient) {}

  registerUser(newUser: any): Observable<any> {
    return this.http.post(this.registerUrl, newUser);
  }
}
