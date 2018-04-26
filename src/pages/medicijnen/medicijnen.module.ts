import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicijnenPage } from './medicijnen';

@NgModule({
  declarations: [
    MedicijnenPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicijnenPage),
  ],
})
export class MedicijnenPageModule {}
