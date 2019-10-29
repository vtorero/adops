import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Chart } from 'chart.js';  
import {ApiService} from '../api.service';
import * as Prism from 'prismjs';

import {Datos} from '../modelos/datos';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent{
datos:Datos;
pie = [];  
piechar =[];
barchar =[];
labels=[];
values=[];

  constructor(private api:ApiService){}

  ngOnInit() {
    this.api.getDatos()
      .subscribe(res => {
        
        
        let alldates = res['data'].map(res => res.total)
        let alllabels = res['data'].map(res => res.dimensionad_exchange_device_category)

        alllabels.forEach((res) => {
          this.labels.push(res);
          
        })
        
        alldates.forEach((res) => {
          this.values.push(res);
          
        })
        
        this.piechar = new Chart('canvas', {
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
}