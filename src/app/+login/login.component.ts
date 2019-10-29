import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  loginUser(event){
    event.preventDefault();
    console.log("ingreso");
    this.router.navigate(['dash']);
  }

  ngOnInit() {
  }

}
