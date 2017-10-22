import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private localNotifications: LocalNotifications
  ) {  }

  openQuestions() {
    this.navCtrl.push(UserInfoPage);
  }

  ionViewDidLoad() {
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
