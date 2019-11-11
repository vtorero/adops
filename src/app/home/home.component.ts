import { Component, NgModule, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';  
import {ApiService} from '../api.service';
import * as Prism from 'prismjs';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Datos} from '../modelos/datos';
import { OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';
import "ng-pick-datetime/assets/style/picker.min.css";
import {MatPaginatorModule, PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



export const MY_MOMENT_FORMATS = {
  parseInput: 'l LT',
  fullPickerInput: 'l LT',
  datePickerInput: 'l',
  timePickerInput: 'LT',
  monthYearLabel: 'MM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MM YYYY',
};

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})

@NgModule({
  imports: [OwlDateTimeModule,OwlNativeDateTimeModule,BrowserModule,MatPaginatorModule],
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
creat_dias=[];
creat_total=[];
ingreso_cpm:number;
ingreso_total:number;
impresiones:number;
datatable=[]
cargando:boolean=false;
pageEvent: PageEvent;
data:string= localStorage.getItem("data");
  window: any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.datatable);
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  
  constructor(private api:ApiService,private _login:LoginService,private router:Router,dateTimeAdapter: DateTimeAdapter<any>){
    dateTimeAdapter.setLocale('es-PE');

  }
  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    if(this._login.getCurrentUser==false){
      this.router.navigate(['']);

    }

    this.cargando=true;
    let emp=localStorage.getItem("currentEmpresa")
    this.api.getDatos(emp)
        .subscribe(res => {
          let dataTable = res['creatives'];
          console.log("",dataTable);


      this.ingreso_cpm= res['ingreso'].map(res => res.ingreso_cpm);
      this.ingreso_total= res['ingreso'].map(res => res.ingreso_total);
      this.impresiones= res['ingreso'].map(res => res.impresiones);
      let alldates = res['data'].map(res => res.total)
      let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)
      let dias_val = res['diario'].map(res=>res.dimensionad_exchange_date)
      let dias_valdesc =res['diario_desktop'].map(res=>res.total)
      let dias_valmovil =res['diario_movil'].map(res=>res.total)
      let dias_valtablet =res['diario_tablet'].map(res=>res.total)
      let creative_sizes = res['creatives'].map(res=>res.dimensionad_exchange_creative_sizes);
      let creative_total = res['creatives'].map(res=>res.total);
  
      alllabels.forEach((res)=>{this.labels.push(res)});
      alldates.forEach((res) =>{this.values.push(res)});

      dias_val.forEach((res)=>{this.labeldias.push(res)})
      dias_valdesc.forEach((res)=>{this.dias_value.push(res)})
      dias_valmovil.forEach((res)=>{this.dias_value_movil.push(res)})
      dias_valtablet.forEach((res)=>{this.dias_value_tablet.push(res)})

      creative_sizes.forEach((res)=>{this.creat_dias.push(res)})
      creative_total.forEach((res)=>{this.creat_total.push(res)})

      var otro= this.api.getPie(this.creat_dias,this.creat_total,'canvas4','Ingreso por creatividad');

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
  
    this.cargando=false;
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
      this.cargando=true;

      this.api.getReportes(inicio,final,empresa)
      .subscribe(res => {
        this.ingreso_cpm= res['ingreso'].map(res => res.ingreso_cpm);
        this.ingreso_total= res['ingreso'].map(res => res.ingreso_total);
        this.impresiones= res['ingreso'].map(res => res.impresiones);
        let alldates = res['data'].map(res => res.total)
        let  alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)

        let dias = res['diario_desktop'].map(res=>res.dimensionad_exchange_date)
        let dias_val =res['diario_desktop'].map(res=>res.total)
        let dias_valmovil =res['diario_movil'].map(res=>res.total)
        let dias_valtablet =res['diario_tablet'].map(res=>res.total)
    
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
this.cargando=false;


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

