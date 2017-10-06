import { QuestionsProvider } from './../../providers/questions/questions';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private questionsProvider: QuestionsProvider) {
    console.log('test')
  }


}
