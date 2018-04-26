import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/Camera';
import { AlertController } from 'ionic-angular';
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
  myphotostorage: any;
  username: string;
  mailaddress: string;
  usercode: any;
  keyusername: string = 'username';
  keymailaddress: string = 'mailaddress'
  keyusercode: any = 'usercode';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private camera: Camera, public storage: Storage) {
    storage.ready().then(() => {
  
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfielPage');
    this.loadDataPhoto();
    this.loadDataUsername();
    this.loadDataEmail();
    this.loadDataUsercode();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
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
    this.storage.set(this.myphotostorage, this.myphoto);
   }, (err) => {
    // Handle error
   });
  }

  saveData() {
    this.storage.set(this.keyusername, this.username);
    this.storage.set(this.keymailaddress, this.mailaddress);
    this.storage.set(this.keyusercode, this.usercode);
    this.dataSaved();
  }

  loadDataPhoto() {
    this.storage.get(this.myphotostorage).then(val => {
      if(val != null) {
        this.myphoto = val;
      }
      else {
        this.myphoto = "assets/imgs/useravatar.png";
      }}, err=> {
        console.log("fout")
      })
  }

  loadDataUsername() {
    this.storage.get(this.keyusername).then((val) => {
      this.username = val;
    });
  }

  loadDataEmail() {
    this.storage.get(this.keymailaddress).then((val) => {
      this.mailaddress = val;
    });
  }

  loadDataUsercode() {
    this.storage.get(this.keyusercode).then((val) => {
      this.usercode = val;
    });
  }

  showPicture() {
    this.myphoto = "assets/imgs/useravatar.png";
  }

  dataSaved() {
    let alert = this.alertCtrl.create({
      title: 'Bedankt!',
      subTitle: 'Uw profieldata is opgeslagen.',
      buttons: ['OK']
    });
    alert.present();
  }
}
