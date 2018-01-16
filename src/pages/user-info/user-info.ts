import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionsPage } from '../questions/questions';

/**
 * Generated class for the UserInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  userInfoForm: FormGroup;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private fb: FormBuilder,
      private alertCtrl: AlertController,
      private storage: Storage
    ) {
      this.userInfoForm = this.fb.group({
        name: [null, Validators.required],
        age: [null, Validators.compose([Validators.required, Validators.pattern(/[0-9]*/)])]
      });

      this.storage.get('user').then((user) => {
        if (user) {
          this.userInfoForm.patchValue(user);
        }
      });

    }

    goToQuestions() {
      if (this.userInfoForm.invalid) {
        this.alertCtrl.create({
          subTitle: 'Formulário inválido',
          message: 'Você precisa preencher todos os campos para continuar.',
          buttons: ['OK']
        }).present();
      } else {
        this.storage.set('user', this.userInfoForm.value);
        this.navCtrl.pop();
        this.navCtrl.push(QuestionsPage);
      }
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad QuestionsPage');
    }

}
