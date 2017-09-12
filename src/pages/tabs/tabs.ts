import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddTodoPage } from '../add-todo/add-todo';
import { TodosPage } from '../todos/todos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = TodosPage;
  tab5Root = AddTodoPage;

  constructor() {

  }
}
