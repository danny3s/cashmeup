import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import {HomePage} from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { CrearperfilPage } from '../crearperfil/crearperfil';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular'

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
	sign:string = "signin";
	isAndroid:boolean = false;
	
	homePage = HomePage;
	 tabsPage = TabsPage;
	
	 user = {} as User;

	 constructor(private Auth: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public menuCtrl: MenuController, private toastCtrl: ToastController) {
				 this.menuCtrl.swipeEnable(false);
	 }


	 async login(user: User){

    try{
      const info = await this.Auth.auth.signInWithEmailAndPassword(user.email, user.password);
  
      if (info) {
        await this.navCtrl.setRoot(TabsPage, {tabIndex: 2} );
      }
    }
    catch(e){
     
      this.toastCtrl.create({
        message: "Correo o Clave Invalida !!! ",
        duration: 3000,
        cssClass: "error"
      }).present()
    }
  
    }

	 async register(user: User){

    try{
    const info = await this.Auth.auth.createUserWithEmailAndPassword(user.email, user.password);

    if (info) {
      this.navCtrl.setRoot(CrearperfilPage);
    }
  }
  catch(e){
         
    this.toastCtrl.create({
      message: "Todos los campos son necesarios !!! La clave debe ser minimo de 6 digitos ",
      duration: 4000,
      cssClass: "error"
    }).present()
  }

	}
	

	

  forgotPassword() {
    let forgotpas = this.alertCtrl.create({
      title: 'Olvisdaste tu Clave',
      message: "Ingresa tu correo para restablecer tu clave",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Send',
          handler: data => {

            var email = data.email;

            if(email == ""){
              this.toastCtrl.create({
                message: "No ha ingresado ningun valor!!! ",
                duration: 3000,
                cssClass: "error"
              }).present()  
  
              return false;
            }

            if (email.indexOf('@') > -1) {

              
              const reset = this.Auth.auth.sendPasswordResetEmail(email).catch(e => {
                this.navCtrl.setRoot(SigninPage);
                this.toastCtrl.create({
                 message: "Correo no existe !!! ",
                 duration: 3000,
                 cssClass: "error"
               }).present()   
                return false});


              

              if (reset) {
                this.navCtrl.setRoot(SigninPage);
                this.toastCtrl.create({
                 message: "Correo Enviado !!! ",
                 duration: 3000,
                 cssClass: "error"
               }).present()    
              return true;
               }else{
                 return false;
               }
             

           
             
             
          }
          this.navCtrl.setRoot(SigninPage);
          this.toastCtrl.create({
           message: "Correo invalido!!! ",
           duration: 3000,
           cssClass: "error"
         }).present()   
          return false;

           
          
        
            
           
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    forgotpas.present();
    

  }

}
