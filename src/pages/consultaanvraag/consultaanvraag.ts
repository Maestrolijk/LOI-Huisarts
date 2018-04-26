import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsultaanvraagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultaanvraag',
  templateUrl: 'consultaanvraag.html',
})
export class ConsultaanvraagPage {
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  consult: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChange($event) {
    console.log($event);
  }

}
