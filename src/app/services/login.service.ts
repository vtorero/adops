import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 loggedStatus = false;
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({ "Content-type": "application/json" });
  loginUser(user: string, password: string) {
      const url = Global.BASE_API_URL + 'api.php/login';
      return this.http.post(url, {
          user: user,
          password: password
      }, { headers: this.headers }).pipe(map(data => data));
  }
}
