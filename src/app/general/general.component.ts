import { Component, OnInit } from '@angular/core';
import   {Datosgeneral} from '../modelos/datosgeneral';
import {ApiService} from '../api.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
public datosGeneral:Datosgeneral;
  constructor(private api:ApiService,private _login:LoginService,private router:Router) { 
    this.datosGeneral = new Datosgeneral("","","","");
  }

  getDatos(){
    let emp = localStorage.getItem("currentEmpresa");
    this.api.getDatosGeneral(emp).subscribe(res=>{
      console.log(res['data']);
      this.datosGeneral.correo=res['data'].map(res => res.correo);
      this.datosGeneral.nombres=res['data'].map(res => res.nombres);
      this.datosGeneral.telefono=res['data'].map(res => res.telefono);
    },err=>{console.log(err)})
  }

  ngOnInit() {
    if(this._login.getCurrentUser==false){
      this.router.navigate(['']);
      }

     this.getDatos();

  }
  onSubmit(){
    console.log("datos",this.datosGeneral);
    this.datosGeneral.empresa=localStorage.getItem("currentEmpresa")
    this.api.GuardarDatosGeneral(this.datosGeneral).subscribe(
      data=>{
        console.log(data);
      },
      erro=>{console.log(erro)}
  
      );
      
  }

}
