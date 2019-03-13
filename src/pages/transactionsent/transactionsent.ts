import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the TransactionsentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactionsent',
  templateUrl: 'transactionsent.html',
})
export class TransactionsentPage {

  value;
  user = {} as User;
  text;
  balancex;
  balancey;

  profileData: Observable<any>

  perfil: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase,public menuCtrl: MenuController, private Auth: AngularFireAuth, private toast: ToastController) {
  
    this.value = navParams.get('item');
    console.log(this.value);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsentPage');
  }

  next(){

    var a = 1;

    var array = this.value.split('-');

    if(array[0] == "rb1o3u5zhalcsaggz05ooznez3hzauduuahccheu"){
      this.user.balance = array[1];
      this.user.billetera = array[0];
      this.user.apellido = "nan"

      console.log("check values");
      console.log(array[0]);
      console.log(array[1]);
  
      //get values

      this.afDatabase.list(`Users/Yko6IW499beGUaH6z6y87mVyGR42/datos`)
      .valueChanges()
      .subscribe(res => {
          console.log(res);
          console.log(res[1]);
          this.balancex = res[1];
          this.balancex = parseInt(this.balancex);
          console.log(this.balancex);

          this.afDatabase.list(`Users/qQEgffqpTqORed1rZfFi7vNFiv12/datos`)
          .valueChanges()
          .subscribe(res => {
              console.log(res);
              console.log(res[1]);
              this.balancey = res[1];
              this.balancey = parseInt(this.balancey);
              console.log(this.balancey);

              console.log("first----")
              console.log(this.balancex);
              console.log(this.balancey);
    
              this.balancex = parseInt(this.balancex) - parseInt(array[1]);
              this.balancey = parseInt(this.balancey) + parseInt(array[1]);
        
              console.log("ok----")
              console.log(this.balancex);
              console.log(this.balancey);

              if(a == 1){

                
                this.user.billetera = "O7BY8O7IQOIMJEWZHXI3RW89328HO";

                this.user.balance = this.balancex.toString();
    
                this.afDatabase.object(`Users/Yko6IW499beGUaH6z6y87mVyGR42/datos`).update(this.user);
        
                this.user.billetera = "rb1o3u5zhalcsaggz05ooznez3hzauduuahccheu";
              this.user.balance = this.balancey.toString();
        
                this.afDatabase.object(`Users/qQEgffqpTqORed1rZfFi7vNFiv12/datos`).update(this.user);
                
                a = a + 1;
              }

          })

  
      })

    }


    if(array[0] == "O7BY8O7IQOIMJEWZHXI3RW89328HO"){
      this.user.balance = array[1];
      this.user.billetera = array[0];
      this.user.apellido = "nan"

      console.log("check values");
      console.log(array[0]);
      console.log(array[1]);
  
      //get values

      this.afDatabase.list(`Users/qQEgffqpTqORed1rZfFi7vNFiv12/datos`)
      .valueChanges()
      .subscribe(res => {
          console.log(res);
          console.log(res[1]);
          this.balancex = res[1];
          this.balancex = parseInt(this.balancex);
          console.log(this.balancex);

          this.afDatabase.list(`Users/Yko6IW499beGUaH6z6y87mVyGR42/datos`)
          .valueChanges()
          .subscribe(res => {
              console.log(res);
              console.log(res[1]);
              this.balancey = res[1];
              this.balancey = parseInt(this.balancey);
              console.log(this.balancey);

              console.log("first----")
              console.log(this.balancex);
              console.log(this.balancey);
    
              this.balancex = parseInt(this.balancex) - parseInt(array[1]);
              this.balancey = parseInt(this.balancey) + parseInt(array[1]);
        
              console.log("ok----")
              console.log(this.balancex);
              console.log(this.balancey);

              if(a == 1){

                this.user.billetera = "rb1o3u5zhalcsaggz05ooznez3hzauduuahccheu";
                this.user.balance = this.balancex.toString();
    
                this.afDatabase.object(`Users/qQEgffqpTqORed1rZfFi7vNFiv12/datos`).update(this.user);
                
                this.user.billetera = "O7BY8O7IQOIMJEWZHXI3RW89328HO";
              this.user.balance = this.balancey.toString();
        
                this.afDatabase.object(`Users/Yko6IW499beGUaH6z6y87mVyGR42/datos`).update(this.user);
                
                a = a + 1;
              }

          })

  
      })

    }

    this.navCtrl.setRoot(TabsPage,  {tabIndex: 2});


    


  }

}
