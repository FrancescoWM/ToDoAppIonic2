import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TodosPage } from '../todos/todos';

/**
 * Generated class for the AddTodoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
	
  todos:any;
  todo:any;

  constructor(public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {

  	this.todo = {
  		id:'',
  		text: '',
  		body: '',
  		due:''
  	}
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddTodoPage');
    this.storage.ready().then( () => {
    	this.storage.get('todos').then((val) => {
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


guidGenarator() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

  onAddSubmit(){
  	//console.log(this.todo.text);

  	this.todo.id = this.guidGenarator();
  	this.todos.push(this.todo);

  	this.storage.ready().then( () => {
    	//set todo

    	this.storage.set('todos', JSON.stringify(this.todos));

    	//redirect
    	this.navCtrl.push(TodosPage);
    });


  }


}
