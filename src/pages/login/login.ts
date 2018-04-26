import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SpoedPage } from '../spoed/spoed';
import { Storage } from '@ionic/storage';

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

  // set variables
  logincode: any;
  usercode; any;
  mailaddress: string;
  keyusercode: any = 'usercode';
  keymailaddress: string = 'mailaddress'
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
  }

  // load the logincode and the email
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.loadDataUsercode();
    this.loadDataEmail();
  }

  // open the page
  Spoed() {
    this.navCtrl.push(SpoedPage);
  }

  // if the logincode doesn't match the code from the user profile login fails
  GeneralScreen() {
      if (this.logincode != this.usercode) {
        this.wrongLogincode();
      }
      else {
        this.navCtrl.push(TabsPage); 
      }
  }    

  // alert for sending email
  fForgotPassword() {
    let alert = this.alertCtrl.create({
      title: 'Let op:',
      subTitle: 'Er is een email gestuurd met de juiste code',
      buttons: ['OK']
    });
    alert.present();
  }

  // alert for entering wrong password
  wrongLogincode() {
    let alert = this.alertCtrl.create({
      title: 'Let op:',
      subTitle: 'U hebt een verkeerde code ingevoerd!',
      buttons: ['OK']
    });
    alert.present();
  }

  // get the logincode from the local storage
  // when no logincode is found use the standard code 0000
  loadDataUsercode() {
    this.storage.get(this.keyusercode).then(val => {
      if(val != null) {
        this.usercode = val;
      }
      else {
        this.usercode = "0000";
      }}, err=> {
        console.log("fout")
      })
  }

    // load the email from the local storage
  loadDataEmail() {
    this.storage.get(this.keymailaddress).then((val) => {
      this.mailaddress = val;
    });
  }
}






