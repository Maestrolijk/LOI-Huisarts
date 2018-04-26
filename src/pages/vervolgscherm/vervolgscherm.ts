import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HuisartsenpostPage } from './../huisartsenpost/huisartsenpost';
import { LocatieslachtofferPage } from './../locatieslachtoffer/locatieslachtoffer';

/**
 * Generated class for the VervolgschermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vervolgscherm',
  templateUrl: 'vervolgscherm.html',
})
export class VervolgschermPage {
  letsel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VervolgschermPage');
  }

  huisartsenpost(){
    this.navCtrl.push(HuisartsenpostPage)
  }

  locatieslachtoffer(){
    this.navCtrl.push(LocatieslachtofferPage)
  }
}
