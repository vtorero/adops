import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Global } from '../global';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedStatus = false;
   constructor(private http: HttpClient){ }
   headers: HttpHeaders = new HttpHeaders({ "Content-type": "application/json" });
  loginUser(user: string, password: string) {
    const url = Global.BASE_API_URL + ' api.php';
    return this.http.post(url, {
      usuario: user,
      password: password
    }, { headers: this.headers }).pipe(map(data => data));
  }
}
