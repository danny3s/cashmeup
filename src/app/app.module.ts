import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {PhotoViewer} from '@ionic-native/photo-viewer';
import { UserService } from '../providers/user-service';
import {HttpModule} from '@angular/http';


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
import { TabsPage } from '../pages/tabs/tabs';
import {ChatPage} from '../pages/chat/chat';
import {CrearperfilPage} from '../pages/crearperfil/crearperfil';
import {RegispasscodePage} from '../pages/regispasscode/regispasscode';
import {CrearbilleteraPage} from '../pages/crearbilletera/crearbilletera';
import {ConfirmtransactionPage} from '../pages/confirmtransaction/confirmtransaction';
import {TransactionsentPage} from '../pages/transactionsent/transactionsent';



import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angular2-qrcode';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';


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
    CrearbilleteraPage,
    ConfirmtransactionPage,
    SModalPage,
    RModalPage,
    TabsPage,
    ChatPage,
    CrearperfilPage,
    RegispasscodePage,
    TransactionsentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxQRCodeModule,
    QRCodeModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
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
    TransactionsentPage,
    CrearbilleteraPage,
    ConfirmtransactionPage,
    SModalPage,
    RModalPage,
    TabsPage,
    ChatPage,
    CrearperfilPage,
    RegispasscodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    PhotoViewer,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},BarcodeScanner
  ]
})
export class AppModule {
}
