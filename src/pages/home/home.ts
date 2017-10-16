import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  }

  openQuestions() {
    this.navCtrl.push(UserInfoPage);
  }

}
