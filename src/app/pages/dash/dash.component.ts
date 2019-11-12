import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
cards=[{title:'TodoList'},{title:'card b'}]
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  jumptodo($event){
    console.log($event)
    this.router.navigate(['todo'])
  }
}
