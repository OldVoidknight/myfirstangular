import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  callRequest() {
    let form={s:"l",m:"o"}

    return this.http.post('http://worktimer.kitchencarelimited.com/biz/bis/',JSON.stringify(form))
  }

  login(form){
    
    return this.http.post('http://worktimer.kitchencarelimited.com/biz/bis/',JSON.stringify(form))
  }

  getcookie(name){
    let value=";"+document.cookie;
    let parts=value.split(";"+name+"=");
    if (parts.length===2) {
        return parts.pop().split(";").shift()
    }
}
}
