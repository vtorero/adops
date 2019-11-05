import { Component, OnInit, AfterViewInit, NgModule} from '@angular/core';
import { Chart } from 'chart.js';  
import {ApiService} from '../api.service';
import * as Prism from 'prismjs';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Datos} from '../modelos/datos';
import { OwlDateTimeModule, OwlNativeDateTimeModule, DateTimeAdapter } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';
import "ng-pick-datetime/assets/style/picker.min.css";
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})

@NgModule({
  imports: [OwlDateTimeModule,OwlNativeDateTimeModule,BrowserModule],
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
console.log(this.selectedMoment);
console.log(this.selectedMoment2);
this.loadDatos();

  }

 loadDatos(){
  var piechar = new Chart('canvas');
  piechar.destroy;
  var barchar = new Chart('canvas2');
barchar.destroy;
this.labels=[];
this.values=[];


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

}

