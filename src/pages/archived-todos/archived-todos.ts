import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  public archiveTodos = [];
  public tmpData;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private todoService: TodoServiceProvider) {
  }

  ionViewDidLoad() {
    this.archiveTodos = this.todoService.getArchivedTodos();
  }


}
