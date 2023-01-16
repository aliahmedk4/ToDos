import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todos';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent implements OnInit {
  todoList = new Array<Todo>();

  constructor(private todosService:TodosService) { 
    this.LoadTodoList();
  }

  ngOnInit(){
    this.todosService.refereshtodos.subscribe(_load => {
      if(_load)
      this.LoadTodoList();
     })
  }

  LoadTodoList(){
    this.todoList = this.todosService.todoList;
  }

}
