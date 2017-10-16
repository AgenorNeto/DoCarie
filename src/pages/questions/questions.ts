import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionsProvider, ProfileType } from '../../providers/questions/questions';
import { Observable } from 'rxjs/Rx';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the QuestionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  responses: number[];
  actualQuestion: number;
  questions: any;
  optionResponse: FormControl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsProvider: QuestionsProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {
    this.actualQuestion = 0;
    this.questions = undefined;
    this.responses = [];

    this.optionResponse = this.fb.control(null, Validators.required);

    Observable.fromPromise(this.storage.get('user'))
      .map((user: { name: string, age: number}) => {
        // if (user !== null && user !== undefined) { }
        return this.questionsProvider.getQuestions();
      }).switch()
      .subscribe((res) => {
        this.questions = res;
      });
  }

  nextQuestion() {
    this.actualQuestion++;
    this.responses.push(this.optionResponse.value);
    this.optionResponse.reset(null);
    console.log(this.responses);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

}
