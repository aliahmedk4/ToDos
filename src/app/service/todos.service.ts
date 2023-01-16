import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public refereshtodos: BehaviorSubject<boolean> = new BehaviorSubject(false);
  todoList = new Array<Todo>();
  constructor() { }

  deleteTodo(item:Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

  }

  addTodo(name:string) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      name: name,
      isCompleted: false,
      isActive:true,
      date: new Date()
    }
    this.todoList.unshift(item);
  }
  
  refereshTodos(){
    this.refereshtodos.next(true);
  }


}
