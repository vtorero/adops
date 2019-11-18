import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Chart } from 'chart.js';  


import 'rxjs/add/operator/map';
import { Global } from './global';
import { map } from 'rxjs/operators';
import { Usuario } from './modelos/usuario';
import { Usuarios } from './modelos/usuarios';

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

public getUsuarios():Observable<Usuarios[]> {
  return  this._http.get<Usuarios[]>
                  ('http://apiuser.azurewebsites.net/api/usuarios');
}

getPie(labels:any,datos:any,canvas:string,titulo:string){

  return new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          fill: true,
          lineTension: 0,
          //backgroundColor: "RGBA(0,233,168,0.3)",
          borderColor: "#3cb371",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "3cb371",
          pointBackgroundColor: "3cb371",
          pointBorderWidth: 1,
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
        display: false,
        },
      responsive: true,
      title:{
          display:false,
          text:titulo,
          fontSize:17
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
        yAxes: [{
            ticks: {
                beginAtZero:false
            },
            scaleLabel: {
                 display: true,
                 labelString: 'Dolares',
                 fontSize: 25 
              }
        }]            
    }  
  }
  })

}
  
}
