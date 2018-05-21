import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, AlertController, reorderArray} from 'ionic-angular';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {
  private todos = [];
  private archivedTodos = [];
  

  constructor(private alertController: AlertController,) {
    
  }

  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  getArchivedTodos(){
    return this.archivedTodos;
  }

  getTodos(){
    return this.todos;
  }

  addTodos(todo){
    this.todos.push(todo);
  }

  editTodo(todoContent, todoIndex){
    this.todos[todoIndex] = todoContent;
  }
}
