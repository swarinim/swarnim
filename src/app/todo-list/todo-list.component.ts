import { Component, OnInit } from '@angular/core';
import {Todos} from '../predef-todo';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = Todos;
  
  selectedtodo:Todo;
  onselect(todo: Todo): void {
    this.selectedtodo = todo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
