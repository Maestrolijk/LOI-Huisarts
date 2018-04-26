import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocatieslachtofferPage } from './locatieslachtoffer';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LocatieslachtofferPage,
  ],
  imports: [
    IonicPageModule.forChild(LocatieslachtofferPage),
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyAdiM8-mzWynBl9nnggjY8wQznqYDwiDAI",
        libraries: ["places"]
    })
  ],
})
export class LocatieslachtofferPageModule {}
