import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController,
  ) {  }

  openQuestions() {
    this.navCtrl.push(UserInfoPage);
  }

  ionViewDidLoad() {
    this.localNotifications.registerPermission()
    .then((result: boolean) => {

      this.alertCtrl.create(({
        buttons: ['OK'],
        message: 'message',
        title: 'title 2'
      })).present();

      this.localNotifications.schedule({
        id: 1,
        title: 'Notification',
        text: 'Single ILocalNotification',
        at: new Date(new Date().getTime() + 3600),
        sound: true/*isAndroid*/? 'file://sound.mp3': 'file://beep.caf',
        data: { secret: 'thejey' }
      });
    })
    .catch((err) => {
      console.log(err);
    })

    this.alertCtrl.create(({
      buttons: ['OK'],
      message: 'message',
      title: 'title 1'
    })).present();


    this.localNotifications.schedule({
      id: 1,
      title: 'Notification',
      text: 'Single ILocalNotification',
      sound: true/*isAndroid*/? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: 'thejey' }
    });
    console.log('Go notification!');
  }

}
