import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoArray=[]
  task=''
  constructor() { }

  ngOnInit() {
    
  }

  addTask(){
    console.log(this.task)
    this.todoArray.push(this.task)
  }
  deleteTask(task){
    console.log(task)
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(this.task== this.todoArray[i]){this.todoArray.splice(i,1)    }
    }
  }
}
