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
labeldias=[];
dias_value=[]
dias_value_movil=[];
dias_value_tablet=[];
ingreso_cpm:number;
ingreso_total:number;
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
      this.ingreso_cpm= res['ingreso'].map(res => res.ingreso_cpm)
      this.ingreso_total= res['ingreso'].map(res => res.ingreso_total)
      let alldates = res['data'].map(res => res.total)
      let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)
      let dias_val = res['diario'].map(res=>res.dimensionad_exchange_date)
      let dias_valdesc =res['diario_descktop'].map(res=>res.total)
      let dias_valmovil =res['diario_movil'].map(res=>res.total)
      let dias_valtablet =res['diario_table'].map(res=>res.total)
  
      alllabels.forEach((res)=>{this.labels.push(res)});
      alldates.forEach((res) =>{this.values.push(res)});

      dias_val.forEach((res)=>{this.labeldias.push(res)})
      dias_valdesc.forEach((res)=>{this.dias_value.push(res)})
      dias_valmovil.forEach((res)=>{this.dias_value_movil.push(res)})
      dias_valtablet.forEach((res)=>{this.dias_value_tablet.push(res)})
      
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
        type: 'line',
        data: {
          labels: this.labeldias,
          datasets: [
            {
              label: "Desktop",
              fill: true,
              lineTension: 0,
              backgroundColor: "RGBA(0,233,168,0.3)",
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
              // notice the gap in the data and the spanGaps: true
              data: this.dias_value,
              spanGaps: true,
            },
            {
              label: "Mobil",
              fill: true,
              lineTension: 0,
              backgroundColor: "RGBA(61,0,255,0.3)",
              borderColor: "blue", // The main line color
              borderCapStyle: 'butt',
              borderDash: [], // try [5, 15] for instance
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "blue",
              pointBackgroundColor: "white",
              pointBorderWidth: 1,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "blue",
              pointHoverBorderColor: "blue",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 10,
              // notice the gap in the data and the spanGaps: false
              data:this.dias_value_movil,
              spanGaps: false,
            },
            {
              label: "Tablet",
              fill: true,
              lineTension: 0,
              backgroundColor: "RGBA(246,91,246,0.3)",
              borderColor: "#F65BF6", // The main line color
              borderCapStyle: 'butt',
              borderDash: [], // try [5, 15] for instance
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "#F65BF6",
              pointBackgroundColor: "F65BF6",
              pointBorderWidth: 1,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "#F65BF6",
              pointHoverBorderColor: "#F65BF6",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 10,
              // notice the gap in the data and the spanGaps: false
              data: this.dias_value_tablet,
              spanGaps: false,
            }
          ],
       
        },
        options: {
          legend: {
            display: true,
            },
          responsive: true,
          title:{
              display:true,
              text:'Ingreso por día'
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
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'Dolares',
                     fontSize: 20 
                  }
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

  /*carga datos click*/ 

loadDatos(inicio:string,final:string,empresa:string){

      this.labels=[];
      this.values=[];
      this.labeldias=[];
      this.dias_value=[];
      this.dias_value_movil=[];
      this.dias_value_tablet=[];
      this.resetChart();

      this.api.getReportes(inicio,final,empresa)
      .subscribe(res => {
        this.ingreso_cpm= res['ingreso'].map(res => res.ingreso_cpm);
        this.ingreso_total= res['ingreso'].map(res => res.ingreso_total)
        let alldates = res['data'].map(res => res.total)
        let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)

        let dias = res['diario_desktop'].map(res=>res.dimensionad_exchange_date)
        let dias_val =res['diario_desktop'].map(res=>res.total)
        let dias_valmovil =res['diario_movil'].map(res=>res.total)
        let dias_valtablet =res['diario_table'].map(res=>res.total)
    
        alllabels.forEach((res)=>{this.labels.push(res)});
        alldates.forEach((res) =>{this.values.push(res)});
  
        dias.forEach((res)=>{this.labeldias.push(res)})
        dias_val.forEach((res)=>{this.dias_value.push(res)})
        dias_valmovil.forEach((res)=>{this.dias_value_movil.push(res)})
        dias_valtablet.forEach((res)=>{this.dias_value_tablet.push(res)})
  
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


  this.barchar = new Chart('canvas2', {
    type: 'line',
    data: {
      labels: this.labeldias,
      datasets: [
        {
          label: "Desktop",
          fill: true,
          lineTension: 0,
          backgroundColor: "RGBA(0,233,168,0.3)",
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
          // notice the gap in the data and the spanGaps: true
          data: this.dias_value,
          spanGaps: true,
        },
        {
          label: "Mobil",
          fill: true,
          lineTension: 0,
          backgroundColor: "RGBA(61,0,255,0.3)",
          borderColor: "blue", // The main line color
          borderCapStyle: 'butt',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "blue",
          pointBackgroundColor: "white",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "blue",
          pointHoverBorderColor: "blue",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: false
          data:this.dias_value_movil,
          spanGaps: false,
        },
        {
          label: "Tablet",
          fill: true,
          lineTension: 0,
          backgroundColor: "RGBA(246,91,246,0.3)",
          borderColor: "#F65BF6", // The main line color
          borderCapStyle: 'butt',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#F65BF6",
          pointBackgroundColor: "F65BF6",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#F65BF6",
          pointHoverBorderColor: "#F65BF6",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          // notice the gap in the data and the spanGaps: false
          data: this.dias_value_tablet,
          spanGaps: false,
        }
      ],
   
    },
    options: {
      legend: {
        display: true,
        },
      responsive: true,
      title:{
          display:true,
          text:'Ingreso por día'
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
                beginAtZero:true
            },
            scaleLabel: {
                 display: true,
                 labelString: 'Dolares',
                 fontSize: 20 
              }
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

