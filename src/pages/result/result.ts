import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface Option {
  option: string;
  value: any;
}

interface Question {
  question: string;
  options: Option[];
}

interface ResultType {
  questions: Question[];
  result: number[];
}

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  dados: ResultType;
  result: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.navParams.data;
    console.log(this.dados);
    this.result = this.calculateResult();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  private calculateResult() {
    // Perguntas 1,2 – Fatores distais
    const FD = this.getQuestionValue(1)
      + this.getQuestionValue(2);

    console.log('phase 1');

    // Perguntas 2, 3, 4, 5, 6 – Fatores proximais – FP
    const FP = this.getQuestionValue(2)
      + this.getQuestionValue(3)
      + this.getQuestionValue(4)
      + this.getQuestionValue(5)
      + this.getQuestionValue(6);

      console.log('phase 2');

    // Pergunta 7 – História de cárie – HC
    const HC = this.getQuestionValue(7);

    console.log('phase 3');

    // Perguntas 8, 9 – Outros fatores – OF
    const OF = this.getQuestionValue(8)
      + this.getQuestionValue(9);

    return 2 * FD + 4 * FP + 2 * HC + 2 * OF;
  }

  private getQuestionValue(question: number) {
    return this.dados.questions[question - 1].options[this.dados.result[question - 1]].value;
  }

}
