import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  charset= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./;'[]\=-)(*&^%$#@!~`";
  pwlength=10;
  userdata={unm:'',pwd:''}

  constructor(
    private router:Router,
    private user:UserService
  ) { }

  ngOnInit() {
    if (document.cookie.split('=')[1] === undefined) {
      this.user.callRequest()
      .subscribe(rd=>{
        document.cookie="_appcookie="+rd['PHPSESSID']
      })
    } else{

    }
  }
  
  login(){
    let form={unm:this.userdata.unm,pwd:this.userdata.pwd,a:"authverify",s:"auth",ctx:"2",m:"l",ssi:this.user.getcookie("_appcookie")}
    this.user.login(form)
    .subscribe(rd=>{
      console.log(rd)
      if (rd['success']) {
        this.router.navigate(['dash'])
        localStorage.setItem('loggedinStatus',JSON.stringify(true))
    }
    })
    // this.router.navigate(['dash'])
  }

  generatepw(){
     let pwkey='';
    for (let i=0;i<this.pwlength;i++){
      pwkey += this.charset.charAt(Math.floor(Math.random()*this.charset.length))
    }
    return console.log(pwkey);
  }
}
