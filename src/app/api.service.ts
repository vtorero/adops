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

getReportes(inicio: string, final: string,empresa:string) {
  const url = Global.BASE_API_URL + 'api.php/reporte';
  return this._http.post(url,{
      ini: inicio,
      fin: final,
      emp:empresa
  }, { headers: this.headers }).pipe(map(data => data));
}


getDatos(empresa:string) {
  return this._http.post(Global.BASE_API_URL+'api.php/inicio',
  {
    emp:empresa
  },{ headers: this.headers }
  ).pipe(map(result => result));
}
  
}
