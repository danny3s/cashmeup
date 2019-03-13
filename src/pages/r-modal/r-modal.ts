import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import QRCode from 'qrcode';
import {HomePage} from '../home/home';

/**
 * Generated class for the RModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-r-modal',
  templateUrl: 'r-modal.html',
})
export class RModalPage {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  public qrfood: string;

  home = HomePage

  
  code = '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX';
  generated = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
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

}
