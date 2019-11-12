import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  charset= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./;'[]\=-)(*&^%$#@!~`";
  pwlength=10;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }
  
  login(){
    this.router.navigate(['dash'])
  }

  generatepw(){
     let pwkey='';
    for (let i=0;i<this.pwlength;i++){
      pwkey += this.charset.charAt(Math.floor(Math.random()*this.charset.length))
    }
    return console.log(pwkey);
  }
}
