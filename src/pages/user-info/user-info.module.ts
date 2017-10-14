import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInfoPage } from './user-info';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserInfoPage),
    FormsModule
  ],
})
export class UserInfoPageModule {}
