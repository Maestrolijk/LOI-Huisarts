import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/Camera';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ProfielPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiel',
  templateUrl: 'profiel.html',
})
export class ProfielPage {

  myphoto: any;
  username: string;
  mailaddress: string;
  usercode: string;
  keyusername: string = 'username';
  keymailaddress: string = 'mailaddress'
  keyusercode: string = 'usercode';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public storage: Storage) {
    storage.ready().then(() => {
  
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfielPage');
    this.showPicture();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true,
      targetWidth: 100,
      targetHeight: 100
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
  }

  saveData() {
    this.storage.set(this.keyusername, this.username);
    this.storage.set(this.keymailaddress, this.mailaddress);
    this.storage.set(this.keyusercode, this.usercode);
  }

  loadDataUsername() {
    this.storage.get(this.keyusername).then((val) => {
      console.log('Your username is', val);

      this.username = val;
    });
  }

  showPicture() {
    this.myphoto = "assets/imgs/useravatar.png";
  }
}
