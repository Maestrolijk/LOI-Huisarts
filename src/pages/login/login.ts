import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SpoedPage } from '../spoed/spoed';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logincode: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  Spoed() {
    this.navCtrl.push(SpoedPage);
  }

  GeneralScreen() {
      if (this.logincode != '0000') {
        this.wrongLogincode();
      }
      else {
        console.log(this.logincode);
        this.navCtrl.push(TabsPage); 
      }
    }    

  fForgotPassword() {
    let alert = this.alertCtrl.create({
      title: 'Let op:',
      subTitle: 'Er is een email gestuurd met de juiste code',
      buttons: ['OK']
    });
    alert.present();
  }

  wrongLogincode() {
    let alert = this.alertCtrl.create({
      title: 'Let op:',
      subTitle: 'U hebt een verkeerde code ingevoerd!',
      buttons: ['OK']
    });
    alert.present();
  }
}






