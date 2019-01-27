import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {PhotoViewer} from '@ionic-native/photo-viewer';

import {SigninPage} from '../pages/signin/signin';
import {HomePage} from '../pages/home/home';
import {ProfilePage} from '../pages/profile/profile';
import {AccountPage} from '../pages/account/account';
import {WithdrawPage} from '../pages/withdraw/withdraw';
import {DepositPage} from '../pages/deposit/deposit';
import {TermsPage} from '../pages/terms/terms';
import {HistoryPage} from '../pages/history/history';
import {SendPage} from '../pages/send/send';
import {ContactPage} from '../pages/contact/contact';
import {OpcionpagoPage} from '../pages/opcionpago/opcionpago';
import {SModalPage} from '../pages/s-modal/s-modal';
import {RModalPage} from '../pages/r-modal/r-modal';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    HomePage,
    ProfilePage,
    DepositPage,
    SendPage,
    HistoryPage,
    TermsPage,
    ContactPage,
    WithdrawPage,
    AccountPage,
    OpcionpagoPage,
    SModalPage,
    RModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    HomePage,
    ProfilePage,
    DepositPage,
    SendPage,
    HistoryPage,
    TermsPage,
    WithdrawPage,
    AccountPage,
    ContactPage,
    OpcionpagoPage,
    SModalPage,
    RModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},BarcodeScanner
  ]
})
export class AppModule {
}
