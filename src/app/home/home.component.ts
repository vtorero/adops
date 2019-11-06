import { Component, OnInit, AfterViewInit, NgModule} from '@angular/core';
import { Chart } from 'chart.js';  
import {ApiService} from '../api.service';
import * as Prism from 'prismjs';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Datos} from '../modelos/datos';
import { OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';
import "ng-pick-datetime/assets/style/picker.min.css";
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';


export const MY_MOMENT_FORMATS = {
  parseInput: 'l LT',
  fullPickerInput: 'l LT',
  datePickerInput: 'l',
  timePickerInput: 'LT',
  monthYearLabel: 'MM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MM YYYY',
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})

@NgModule({
  imports: [OwlDateTimeModule,OwlNativeDateTimeModule,BrowserModule],
  providers:[{provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},]
})


export class HomeComponent{
public selectedMoment = new Date();
public selectedMoment2 = new Date();
datos:Datos;
pie = [];  
piechar =[];
barchar =[];
labels=[];
values=[];
data:string= localStorage.getItem("data");
  window: any;
  
  constructor(private api:ApiService,private _login:LoginService,private router:Router,dateTimeAdapter: DateTimeAdapter<any>){
    dateTimeAdapter.setLocale('es-PE');

  }

  ngOnInit() {

    if(this._login.getCurrentUser==false){
      this.router.navigate(['']);
      
    }
    this.api.getDatos()
    .subscribe(res => {
      let alldates = res['data'].map(res => res.total)
      let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)
  
      alllabels.forEach((res) => {
        this.labels.push(res);
        
      })
      
      alldates.forEach((res) => {
        this.values.push(res);
        
      })
      
      var piechar = new Chart('canvas', {
        type: 'doughnut',
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.values,
              borderColor: '#3cba9f',
              fill: true,
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
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })
  
      this.barchar = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.values,
              borderColor: '#3cba9f',
              fill: true,
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
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })
  
  
    })
  

  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

enviaFechas(){
this.labels=[];
this.values=[];
var empresa = localStorage.getItem("currentEmpresa");
console.log("empresa",empresa);

var fec1 = this.selectedMoment.toDateString().split(" ",4); 
var fec2 = this.selectedMoment2.toDateString().split(" ",4); 
this.loadDatos(fec1[1]+fec1[2]+fec1[3],fec2[1]+fec2[2]+fec2[3],empresa);

  }

 loadDatos(inicio:string,final:string,empresa:string){
this.labels=[];
this.values=[];
this.resetChart();

this.api.getReportes(inicio,final,empresa)
.subscribe(res => {
  let alldates = res['data'].map(res => res.total)
  let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)

  alllabels.forEach((res) => {
    this.labels.push(res);
    
  })
  
  alldates.forEach((res) => {
    this.values.push(res);
    
  })
  
  if(this.window != undefined)
  this.window.destroy();
  this.window = new Chart(this.piechar, {});
  
  var piechar = new Chart('canvas2', {
    type: 'doughnut',
    data: {
      labels: this.labels,
      datasets: [
        {
          data: this.values,
          borderColor: '#3cba9f',
          fill: true,
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
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  })
  this
   this.barchar = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          data: this.values,
          borderColor: '#3cba9f',
          fill: true,
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
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  })


})

}

resetChart(){
var pieChartContent = document.getElementById('pieChartContent');
pieChartContent.innerHTML = '&nbsp;';
pieChartContent.innerHTML='<canvas id="canvas"><canvas>';

var barChartContent = document.getElementById('barChartContent');
barChartContent.innerHTML = '&nbsp;';
barChartContent.innerHTML='<canvas id="canvas2"><canvas>';
}

}

