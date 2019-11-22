import { Component, OnInit } from '@angular/core';
import   {Datosgeneral} from '../modelos/datosgeneral';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
public datosGeneral:Datosgeneral;
  constructor(private api:ApiService) { 
    this.datosGeneral = new Datosgeneral("","","");
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.datosGeneral);
    this.api.GuardarDatosGeneral(this.datosGeneral).subscribe(
      data=>{

      },
      erro=>{console.log("error")}
      
      )
  }

}
