import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TodoslistComponent } from './pages/todoslist/todoslist.component';


const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  // {path: 'add', component: TodoFormComponent},
  {path: 'list', component: TodoslistComponent},
  // {path: 'favorite', component: TodoListComponent},
  // {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
