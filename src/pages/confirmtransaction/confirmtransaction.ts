import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';

import {TransactionsentPage} from '../transactionsent/transactionsent';

/**
 * Generated class for the ConfirmtransactionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirmtransaction',
  templateUrl: 'confirmtransaction.html',
})
export class ConfirmtransactionPage {

  user = {} as User;
  value;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
    console.log(this.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmtransactionPage');
  }

  next(el) {
    el.setFocus();
  }

  cambio(uno,dos,tres,cuatro){


      this.user.codigoseguridad = uno + dos + tres + cuatro;

      this.navCtrl.setRoot(TransactionsentPage,{
        item:this.value,
        });


  }
}
