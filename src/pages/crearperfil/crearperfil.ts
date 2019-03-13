import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2/database';

import {RegispasscodePage} from '../regispasscode/regispasscode';
import {CrearbilleteraPage} from '../crearbilletera/crearbilletera';

/**
 * Generated class for the CrearperfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-crearperfil',
  templateUrl: 'crearperfil.html',
})
export class CrearperfilPage {

  user = {} as User;
  text;


  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase,public menuCtrl: MenuController, private Auth: AngularFireAuth, private toast: ToastController) {
  

       this.menuCtrl.swipeEnable(false);
  }

  
  crearperfil(){

    this.user.balance = "0";

    let rand = Math.floor((Math.random()+12315678910978892347569283452345)*20);

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 20; i++)
      this.text += charset.charAt(Math.floor(Math.random() * charset.length));

      for (var i = 0; i < 20; i++)
      this.text += this.text.charAt(Math.floor(Math.random() * this.text.length));


      var data = this.text.split('undefined');
    this.user.billetera = data[1];


    this.Auth.authState.subscribe( data =>{
      this.afDatabase.object(`Users/${data.uid}/datos`).set(this.user)




      // this.afDatabase.object(`Users/${data.uid}/dia/1`).update(this.Nutricion)



      .then(() => this.navCtrl.setRoot(CrearbilleteraPage));
        
    })

   
  }

}
