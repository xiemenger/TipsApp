import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController} from 'ionic-angular';
import { ArchivedTodosPage } from '../archived-todos/archived-todos';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  public archivedTodosPage = ArchivedTodosPage;
  public archivedTodos = [];

  constructor(public navCtrl: NavController,
              private alertController: AlertController,
              private todoSeverice: TodoServiceProvider,
              private toastController: ToastController) {
    this.todos = this.todoSeverice.getTodos();
  }

  openTodoAlert(){;
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addtodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.addtodoInput;
            this.todoSeverice.addTodos(todoText);

            addTodoAlert.onDidDismiss(()=>{
              let addTodoToast = this.toastController.create({
                message:"Todo is added",
                duration: 2000
              });
              addTodoToast.present();
            })
          }
        }
      ]
    });
    addTodoAlert.present();

  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  // Delect todo
  archiveTodo(todoIndex){
    this.todoSeverice.archiveTodo(todoIndex);
  }

  editTodo(todoIndex){
    let editTodoAlert = this.alertController.create({
      title: "Edit a Todo",
      message: "Edit Your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          // present the current todo
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Edit Todo",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.editTodoInput;
            this.todoSeverice.editTodo(todoText, todoIndex);

            editTodoAlert.onDidDismiss(() => {
              let editTodoToast = this.toastController.create({
                message: "Todo Edited",
                duration: 2000,
              });
              editTodoToast.present();
            });
          }
        }
      ]
    });
    editTodoAlert.present();
  }
}

