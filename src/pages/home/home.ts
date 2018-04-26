import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { SpoedPage } from '../spoed/spoed';
import { ChatartsPage } from '../chatarts/chatarts';
import { ConsultaanvraagPage } from '../consultaanvraag/consultaanvraag';
import { DoorverwijzingPage } from '../doorverwijzing/doorverwijzing';
import { BloedonderzoekPage } from './../bloedonderzoek/bloedonderzoek';
import { BerichtenPage } from './../berichten/berichten';
import { MedicijnenPage } from './../medicijnen/medicijnen';
import { EpdPage } from '../epd/epd';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  // open the different pages
  Spoed() {
  this.navCtrl.push(SpoedPage);
  }

  ChatArts() {
    this.navCtrl.push(ChatartsPage);
  }

  ConsultAanvraag() {
    this.navCtrl.push(ConsultaanvraagPage);
  }

  Doorverwijzing() {
    this.navCtrl.push(DoorverwijzingPage);
  }

  Bloedonderzoek() {
    this.navCtrl.push(BloedonderzoekPage);
  }

  Berichten() {
    this.navCtrl.push(BerichtenPage);
  }

  Medicijnen() {
    this.navCtrl.push(MedicijnenPage);
  }

  EPD() {
    this.navCtrl.push(EpdPage);
  }
}
