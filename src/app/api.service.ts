import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import { Global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string;
  constructor(public _http: HttpClient) {
    this.url="http://slim.com/api.php/productos";
    
   }
   headers: HttpHeaders = new HttpHeaders({ "Content-type":"application/json" });
   getProductos(): Observable<any>{
    return this._http.get(this.url);
}

getReportes(inicio: string, final: string) {
  const url = Global.BASE_API_URL + 'api.php/reporte';
  return this._http.post(url,{
      ini: inicio,
      fin: final
  }, { headers: this.headers }).pipe(map(data => data));
}


getDatos() {
  return this._http.get("http://35.231.78.51/api/api.php/productos").map(result => result);
}
  
}
