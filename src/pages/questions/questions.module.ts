import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
    FormsModule
  ],
})
export class QuestionsPageModule {}
