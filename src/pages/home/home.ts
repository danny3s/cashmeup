import {Component} from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {AccountPage} from '../account/account';
import {WithdrawPage} from '../withdraw/withdraw';
import {DepositPage} from '../deposit/deposit';
import {TermsPage} from '../terms/terms';
import {SendPage} from '../send/send';
import {HistoryPage} from '../history/history';
import {ContactPage} from '../contact/contact';
import {OpcionpagoPage} from '../opcionpago/opcionpago';
import {SModalPage} from '../s-modal/s-modal';
import {RModalPage} from '../r-modal/r-modal';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profilePage=ProfilePage;
  depositPage=DepositPage;
  contactPage = ContactPage;
  withdrawPage = WithdrawPage;
  accountPage = AccountPage;
  sendPage=SendPage;
  termsPage=TermsPage;
  historyPage=HistoryPage;
  opcionpagopage=OpcionpagoPage;
  rmodal=RModalPage;
    smodal=SModalPage;

    profileData: Observable<any>

    perfil: User;

    balance;

  constructor(public alertCtrl: AlertController,public navController:NavController,private afDatabase: AngularFireDatabase, private Auth: AngularFireAuth) {
  } 


  ionViewWillLoad(){
    this.Auth.authState.subscribe(data => {

      if(data && data.email && data.uid){  
        console.log("ok")
        console.log(data.uid);

        this.profileData = this.afDatabase.object<User>(`Users/${data.uid}/datos`).valueChanges();


        this.afDatabase.list(`Users/${data.uid}/datos`)
    .valueChanges()
    .subscribe(res => {
        console.log(res);
        console.log(res[1]);
        this.balance = res[1];

    })
    
    }
  });
}


  
  

  confirmLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            console.log('Agree clicked');
            this.navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
