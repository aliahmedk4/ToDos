import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todos';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() tododetail: Todo=<Todo>{};

  constructor(public todoService: TodosService) { }

  ChangeStatus(todo:Todo){
    todo.isCompleted = !todo.isCompleted;
  }

  Delete(todo:Todo){
      this.todoService.deleteTodo(todo);
      this.todoService.refereshTodos();
  }

}
