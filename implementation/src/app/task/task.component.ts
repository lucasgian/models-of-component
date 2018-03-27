import { Component, OnInit } from '@angular/core';
import { Task } from "./../class/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = new Task();
  tasks = [];

  constructor() { }

  add(form) {
    this.tasks.push(this.task);
  }

  ngOnInit() { 
  }

}
