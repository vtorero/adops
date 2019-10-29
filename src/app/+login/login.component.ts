import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:string;
password:string;
error_user:boolean;

constructor(private router:Router,private login:LoginService) { }

  loginUser(formData){
    event.preventDefault();
    //if(!this.user){this.error_user=true; return false} else{this.error_user=false;}
    console.log(formData.value.user);
    if(this.user){
      this.login.loginUser(this.user,this.password).subscribe(data=>{
        console.log(data);
      })
    }
//this.router.navigate(['dash']);
  }

  ngOnInit() {
  }

}
