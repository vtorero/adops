import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Usuario} from '../modelos/usuario';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports:      [BrowserModule,FormsModule,ReactiveFormsModule],
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public usuario :Usuario;

constructor(private router:Router,private login:LoginService) {
  this.usuario= new Usuario("","");
 }

 loginUser(formData){
    event.preventDefault();
    //if(!this.user){this.error_user=true; return false} else{this.error_user=false;}
    console.log(this.usuario);
    if(this.usuario.usuario){
      this.login.loginUser(this.usuario.usuario,this.usuario.password).subscribe(data=>{
        console.log(data);
      })
    }
//this.router.navigate(['dash']);
  }

  ngOnInit() {
  }

}
