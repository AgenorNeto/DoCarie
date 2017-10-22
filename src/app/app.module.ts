import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';
import { UserInfoPage } from '../pages/user-info/user-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionsProvider } from '../providers/questions/questions';
import { ResultPage } from '../pages/result/result';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AboutUsPage } from '../pages/about-us/about-us';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionsPage,
    UserInfoPage,
    ResultPage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
    UserInfoPage,
    ResultPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider,
    LocalNotifications
  ]
})
export class AppModule {}
