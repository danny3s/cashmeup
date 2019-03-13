import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {OpcionpagoPage} from '../opcionpago/opcionpago';
import {ConfirmtransactionPage} from '../confirmtransaction/confirmtransaction';

/**
 * Generated class for the SModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-s-modal',
  templateUrl: 's-modal.html',
})
export class SModalPage {

  opcionpagopage=OpcionpagoPage;
  confirmtransactionPage=ConfirmtransactionPage;

  qrData = null;
  createdCode = null;
  scannedCode = null;
  num: string;
  item;


  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.num = barcodeData.text
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  signIn(event,code,cantidad){

    this.item = code + "-" + cantidad;
    console.log(this.item);

    this.navCtrl.setRoot(ConfirmtransactionPage,{
      item:this.item,
      });
  }

}
