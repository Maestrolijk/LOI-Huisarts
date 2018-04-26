import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MedicijnenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijnen',
  templateUrl: 'medicijnen.html',
})
export class MedicijnenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicijnenPage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Omtrent medicijn',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Bijsluiter',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Bijsluiter clicked');
          }
        },
        {
          text: 'Nieuw recept aanvragen',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Nieuw recept aanvragen clicked');
          }
        },
        {
          text: 'Vraag stellen over gebruik',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Vraag stellen over gebruik clicked');
          }
        },
        {
          text: 'FAQ',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('FAQ clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
