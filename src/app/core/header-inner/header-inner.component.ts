import { Component } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})

export class HeaderInnerComponent {
usuario:string;
public imagen:string

  constructor(){}


  ngOnInit() {
    let cimagen = localStorage.getItem("currentAvatar")
    let nombre = localStorage.getItem("currentNombre")
    this.imagen=cimagen;
    this.usuario=nombre;
  }

}



