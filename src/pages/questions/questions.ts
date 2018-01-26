import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import { Observable } from 'rxjs/Rx';

import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ResultPage } from '../result/result';

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
        return this.questionsProvider.getQuestions();
      }).switch()
      .subscribe((res) => {
        this.questions = res;
      });
  }

  nextQuestion() {
    if (! this.optionResponse.valid) {
      this.showInvalidFormAlert();
    } else {
      this.nextQuestionHandler();
    }
  }

  private nextQuestionHandler() {
    if (this.actualQuestion === this.questions.length - 1) {

      this.responses.push(this.optionResponse.value);

      this.navCtrl.pop();
      this.navCtrl.push(ResultPage, { result: this.responses, questions: this.questions });
    } else {
      this.actualQuestion++;
      this.responses.push(this.optionResponse.value);
      this.optionResponse.reset(null);
    }
  }

  private showInvalidFormAlert() {
    let alert = this.alertCtrl.create({
      title: 'Formulário Inválido',
      subTitle: 'Você precisa selecionar ao menos uma opção!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

}
