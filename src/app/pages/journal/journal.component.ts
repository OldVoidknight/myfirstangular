import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  entries=[{entrydate:'',entrycontent:''}]

  // entryArray=new FormGroup({
  //   entrydate:new FormControl(''),
  //   entrycontent:new FormControl('')
  // })


  constructor() { }

  ngOnInit() {
  }


  addEntry(){
    console.log(this.entries)
    this.entries.push()
  }
}
