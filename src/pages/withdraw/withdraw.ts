import { Component } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import QRCode from 'qrcode';
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  
  qrData = null;
  createdCode = null;
  scannedCode = null;
  public qrfood: string;


  cedu;





  
  code;
  generated = '';

  constructor(public alertCtrl: AlertController,public navController:NavController,private afDatabase: AngularFireDatabase, private Auth: AngularFireAuth) {
  } 

  ionViewWillLoad(){

    
    this.Auth.authState.subscribe( data =>{

      
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

  
        
    });

  }


  

  displayQrCode() {
    return this.generated !== '';
  }

}
