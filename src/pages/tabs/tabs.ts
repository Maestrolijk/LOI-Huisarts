import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfielPage } from './../profiel/profiel';
import { HelpPage } from './../help/help';
import { HomePage } from './../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HelpPage;
  tab3Root = ProfielPage;

  tab1Title: string;
  tab2Title: string;
  tab3Title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getTabTitles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  getTabTitles() {
       this.tab1Title;
       this.tab2Title;
       this.tab3Title;
      }
    
  }

