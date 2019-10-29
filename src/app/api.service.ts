import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string;
  constructor(public _http: HttpClient) {
    this.url="http://slim.com/api.php/productos";
   }
  
   getProductos(): Observable<any>{
    return this._http.get(this.url);
}

getDatos() {
  return this._http.get("http://35.231.78.51/api/api.php/productos").map(result => result);
}
  
}
