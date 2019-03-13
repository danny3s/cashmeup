import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegispasscodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-regispasscode',
  templateUrl: 'regispasscode.html',
})
export class RegispasscodePage {

  user = {} as User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase,public menuCtrl: MenuController, private Auth: AngularFireAuth, private toast: ToastController) {
  

    this.menuCtrl.swipeEnable(false);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegispasscodePage');
  }

  next(el) {
    el.setFocus();
  }

  cambio(uno,dos,tres,cuatro){

    this.Auth.authState.subscribe( data =>{


      this.user.codigoseguridad = uno + dos + tres + cuatro;
      this.afDatabase.object(`Users/${data.uid}/datos`).update(this.user)
      
      .then(() => this.navCtrl.setRoot(TabsPage,  {tabIndex: 2}));

        
    })


  }

}
