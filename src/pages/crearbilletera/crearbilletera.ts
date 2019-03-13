import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import QRCode from 'qrcode';

import {HomePage} from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2/database';
import {RegispasscodePage} from '../regispasscode/regispasscode';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

/**
 * Generated class for the CrearbilleteraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-crearbilletera',
  templateUrl: 'crearbilletera.html',
})
export class CrearbilleteraPage {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  public qrfood: string;

  profileData: Observable<any>

  user: User;
  cedu;





  
  code;
  generated = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private afDatabase: AngularFireDatabase,
    public menuCtrl: MenuController, 
    private Auth: AngularFireAuth, 
    private toast: ToastController, private http: Http) {

      
      this.menuCtrl.swipeEnable(false);
  }

  ionViewWillLoad(){

    
    this.Auth.authState.subscribe( data =>{

      
      this.afDatabase.list(`Users/${data.uid}/datos`)
      .valueChanges()
      .subscribe(res => {
        this.code = res[2];
        console.log(this.cedu);
        console.log(data.uid);

      })

      /*
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

 
  
      var a = this.http.get("http://159.203.57.28:5000/articles/" + data.uid + "-null-" + data.uid)
      .subscribe(
        (data) => { // Success
  
          console.log(data);
        },
        (error) =>{
          console.error(error);
        }
      )
*/
      // this.profileData = this.afDatabase.object<User>(`Users/${data.uid}/datos`).valueChanges();

      this.afDatabase.list(`Users/${data.uid}/datos`)
      .valueChanges()
      .subscribe(res => {
       this.code = res[2];


        
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
      })
  
        
    })

  }


  

  displayQrCode() {
    return this.generated !== '';
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }

  next(){
    console.log("ok");
    this.navCtrl.setRoot(RegispasscodePage);
  }

}


