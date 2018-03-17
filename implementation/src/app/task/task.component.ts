import { Component, OnInit } from '@angular/core';
import { Task } from "./../class/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task [];
  
  
  public add(form) {
    this.tasks.push(new Task(0, form.name, form.info, form.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
