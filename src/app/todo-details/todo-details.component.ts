import { Component, OnInit, Input} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() todo:Todo;

  
  
  constructor() { }

  ngOnInit(): void {
  }

}


