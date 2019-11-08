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
line=[];
values=[];
ingreso:number;
data:string= localStorage.getItem("data");
  window: any;
  
  constructor(private api:ApiService,private _login:LoginService,private router:Router,dateTimeAdapter: DateTimeAdapter<any>){
    dateTimeAdapter.setLocale('es-PE');

  }

  ngOnInit() {

    if(this._login.getCurrentUser==false){
      this.router.navigate(['']);
      
    }
    let emp=localStorage.getItem("currentEmpresa")
    this.api.getDatos(emp)
    .subscribe(res => {
      this.ingreso= res['ingreso'].map(res => res.ingreso);
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
          pieceLabel: {
            fontColor: '#000'
        },
          legend: {
            display: true,
            labels: {
              fontColor: 'rgb(0,0,0)',
              boxWidth: 10,
              padding: 20
          }
        },
          title: {
            display: true,
            text: 'Ingresos por dispositivo',
            position:'top'
        },
         
          scales: {
            xAxes: [{
              ticks:{beginAtZero:true}
            }],
            yAxes: [{
              ticks:{beginAtZero:true}
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
          title: {
            display: true,
            text: 'Ingresos por día',
            position:'top'
        },
          legend: {
            display: false,
            position: 'bottom',
        },
        }
      })
  
  
      this.barchar = new Chart('canvas3', {
        type: 'line',
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
          title: {
            display: true,
            text: 'Ingresos por día',
            position:'top'
        },
          legend: {
            display: false,
            position: 'bottom',
        },
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
  this.ingreso= res['ingreso'].map(res => res.ingreso);
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
  this
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

resetChart(){
var pieChartContent = document.getElementById('pieChartContent');
pieChartContent.innerHTML = '&nbsp;';
pieChartContent.innerHTML='<canvas id="canvas"><canvas>';

var barChartContent = document.getElementById('barChartContent');
barChartContent.innerHTML = '&nbsp;';
barChartContent.innerHTML='<canvas id="canvas2"><canvas>';
}

}

