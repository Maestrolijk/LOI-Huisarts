import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatartsPage } from './chatarts';

@NgModule({
  declarations: [
    ChatartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatartsPage),
  ],
})
export class ChatartsPageModule {}
