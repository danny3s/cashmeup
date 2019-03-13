import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {ChatPage} from '../chat/chat';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = ProfilePage;
  tab4Root = ContactPage;
  
  public tabIndex: Number = 0;

  constructor(public params: NavParams) {
    let tabIndex = this.params.get('tabIndex');
    if (tabIndex) {
      this.tabIndex = tabIndex;
    }
  }
}
