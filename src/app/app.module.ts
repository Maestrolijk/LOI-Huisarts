import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CalendarModule } from 'ion2-calendar';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { Camera } from '@ionic-native/Camera';
import { IonicStorageModule } from '@ionic/storage';
import { RestProvider } from '../providers/rest/rest';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { SpoedPage } from './../pages/spoed/spoed';
import { ChatartsPage } from './../pages/chatarts/chatarts';
import { ConsultaanvraagPage } from './../pages/consultaanvraag/consultaanvraag';
import { DoorverwijzingPage } from './../pages/doorverwijzing/doorverwijzing';
import { BloedonderzoekPage } from './../pages/bloedonderzoek/bloedonderzoek';
import { BerichtenPage } from './../pages/berichten/berichten';
import { MedicijnenPage } from './../pages/medicijnen/medicijnen';
import { Bel112Page } from './../pages/bel112/bel112';
import { VervolgschermPage } from './../pages/vervolgscherm/vervolgscherm';
import { HuisartsenpostPage } from './../pages/huisartsenpost/huisartsenpost';
import { TabsPage } from './../pages/tabs/tabs';
import { HelpPage } from './../pages/help/help';
import { ProfielPage } from './../pages/profiel/profiel';
import { LocatieslachtofferPage } from './../pages/locatieslachtoffer/locatieslachtoffer';
import { EpdPage } from  './../pages/epd/epd'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SpoedPage,
    ChatartsPage,
    ConsultaanvraagPage,
    DoorverwijzingPage,
    BloedonderzoekPage,
    BerichtenPage,
    MedicijnenPage,
    Bel112Page,
    VervolgschermPage,
    HuisartsenpostPage,
    TabsPage,
    HelpPage,
    ProfielPage,
    LocatieslachtofferPage,
    EpdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyAdiM8-mzWynBl9nnggjY8wQznqYDwiDAI",
        libraries: ["places"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SpoedPage,
    ChatartsPage,
    ConsultaanvraagPage,
    DoorverwijzingPage,
    BloedonderzoekPage,
    BerichtenPage,
    MedicijnenPage,
    Bel112Page,
    VervolgschermPage,
    HuisartsenpostPage,
    TabsPage,
    HelpPage,
    ProfielPage,
    LocatieslachtofferPage,
    EpdPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    RestProvider
  ]
})
export class AppModule {}
