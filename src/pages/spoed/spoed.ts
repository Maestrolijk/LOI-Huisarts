import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { VervolgschermPage } from './../vervolgscherm/vervolgscherm';

/**
 * Generated class for the SpoedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoed',
  templateUrl: 'spoed.html',
  
})
export class SpoedPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoedPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'LET OP!',
      message: 'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie.',
      buttons: [
        {
          text: 'LEVENSBEDREIGENDE SITUATIE',
          handler: () => {
            window.open('tel:'+221);
            //this.navCtrl.push(Bel112Page);
          }
        },
        {
          text: 'NIET LEVENSBEDREIGEND, MAAR WEL SPOEDEISEND',
          handler: () => {
            this.navCtrl.push(VervolgschermPage);
          }
        }
      ]
    });
    alert.present();
  }
}
