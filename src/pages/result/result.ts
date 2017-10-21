import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  dados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.navParams.data;
    console.log(this.navParams.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
