import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DoorverwijzingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doorverwijzing',
  templateUrl: 'doorverwijzing.html',
})
export class DoorverwijzingPage {

  searchTerm: string = '';
  items: any;
  
  constructor(public navCtrl: NavController, public dataService: DataProvider,  public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoorverwijzingPage');
    this.setFilteredItems(); 
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

}
