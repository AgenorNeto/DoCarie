import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';

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

  userInfoForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsProvider: QuestionsProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.questionsProvider.getQuestions().subscribe((res) => {
      console.log(res);
    })

    this.userInfoForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.compose([Validators.required, Validators.pattern(/[0-9]*/)])]
    })
  }

  goToQuestions() {
    console.log('oiasd')
    if (this.userInfoForm.invalid) {
      console.log('oiasd')
      this.alertCtrl.create({
        message: 'Formulário inválido'
      }).present();
    } else {
      alert('test')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

}
