import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TodoDetailsPage } from '../todo-details/todo-details';

/**
 * Generated class for the TodosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  todos:any;

  constructor(public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    //console.log('ionViewDidLoad TodosPage');
    this.storage.ready().then( () => {
    	this.storage.get('todos').then((val) => {

    		//console.log(val);

    		if(val){
    			this.todos = JSON.parse(val);
    		}else{
    			this.todos = [];
    		}
    	}).catch( (err) => {
    		console.log(err);
    	});
    });
  }

  todoSelected(todo){

  	this.navCtrl.push(TodoDetailsPage, todo);
  }

}
