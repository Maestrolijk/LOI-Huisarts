import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaanvraagPage } from './consultaanvraag';

@NgModule({
  declarations: [
    ConsultaanvraagPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaanvraagPage),
    CalendarModule
  ],
})
export class ConsultaanvraagPageModule {}
