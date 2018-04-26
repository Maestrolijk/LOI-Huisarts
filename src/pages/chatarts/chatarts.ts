import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/Camera';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChatartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatarts',
  templateUrl: 'chatarts.html',
})
export class ChatartsPage {

  mychatphoto: any;
  key: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public storage: Storage) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatartsPage');
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.mychatphoto = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
  }
}
