import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AboutUsPage } from '../about-us/about-us';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController,
  ) {

    this.localNotifications.registerPermission()
    .then((result: boolean) => {
      this.localNotifications.schedule({
        id: 1,
        title: 'Notification',
        text: 'Single ILocalNotification',
        at: new Date(new Date().getTime() + 7600),
        sound: true/*isAndroid*/? 'file://sound.mp3': 'file://beep.caf',
        data: { secret: 'thejey' }
      });
    })
    .catch((err) => {
      console.log(err);
    });

  }

  openQuestions() {
    this.navCtrl.push(UserInfoPage);
  }

  openAboutUsPage() {
    this.navCtrl.push(AboutUsPage);
  }

  ionViewDidLoad() {
    this.localNotifications.registerPermission()
    .then((result: boolean) => {
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
    });
  }

}
