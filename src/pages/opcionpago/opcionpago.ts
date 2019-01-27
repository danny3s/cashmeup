import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SModalPage} from '../s-modal/s-modal';

import {RModalPage} from '../r-modal/r-modal';
import {HomePage} from '../home/home';

/**
 * Generated class for the OpcionpagoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-opcionpago',
  templateUrl: 'opcionpago.html',
})
export class OpcionpagoPage {

  smodal=SModalPage;
  rmodal=RModalPage;
  home=HomePage;


  active: boolean;
  headerImage:any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
