import { Component } from '@angular/core';
import { TodosService } from './service/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlename = '';

  constructor(private todosService:TodosService) { 
  }

  onSubmit(){
    this.todosService.addTodo(this.titlename);   
    this.todosService.refereshTodos(); 
  }
 
}
