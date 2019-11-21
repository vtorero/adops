import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Chart } from 'chart.js';  
import 'rxjs/add/operator/map';
import { Global } from './global';
import { map } from 'rxjs/operators';
import { Impresiones } from './modelos/impresiones';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string;
  constructor(public _http: HttpClient,) {
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

public getTablaInicial(empresa:string):Observable<Impresiones[]> {
  return this._http.post<Impresiones[]>(Global.BASE_API_URL+'api.php/tabla',{
    emp:empresa
},{ headers: this.headers }).pipe(map(result => result));
}


public getTablaConsultar(ini:string,fin:string,empresa:string):Observable<Impresiones[]> {
  return this._http.post<Impresiones[]>(Global.BASE_API_URL+'api.php/tablaconsulta',{
    ini:ini,
    fin:fin,
    emp:empresa
},{ headers: this.headers }).pipe(map(result => result));
}


getPie(labels:any,datos:any,canvas:string,titulo:string){

  return new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          fill: true,
          lineTension: 0,
          //backgroundColor: "RGBA(0,233,168,0.3)",
          //borderColor: "#3cb371",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "3cb371",
          pointBackgroundColor: "3cb371",
          pointBorderWidth: 0,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#3cb371",
          pointHoverBorderColor: "3cb371",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: datos,
          //borderColor: '#3cba9f',
          //fill: true,
          backgroundColor: [  
            "#3cb371",  
            "#0000FF",  
            "#9966FF",  
            "#4C4CFF",  
            "#00FFFF",  
            "#f990a7",  
            "#aad2ed",  
            "#FF00FF",  
            "Blue",  
            "Red",  
            "Blue"  
          ]
        }
      
      ],

    },
    options: {
      legend: {
        display: true,
        position:'right',
        },
      responsive: true,
      title:{
          display:true,
          text:titulo,
          fontSize:14
      },
      tooltips: {
          mode: 'index',
          intersect: true
      },
      hover: {
          mode: 'nearest',
          intersect: true
      },
        
        scales: {
          xAxes: [],
          yAxes: []
        }          
    }  
  }
  )

}
  
}
