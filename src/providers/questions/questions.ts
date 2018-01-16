import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

export enum ProfileType {
  six2Nineteen,
  twenty2FiftyNine,
  sixty2Infinity
}

@Injectable()
export class QuestionsProvider {

  constructor(public http: Http/* , private plataform: Platform */) {
    console.log('hello')
  }

  getQuestions() {
    return this.http.get('assets/questions.json')
      .map((res: Response) => {
        return res.json();
      });
  }

  // getQuestions(age: number) {
  //   return this.http.get(
  //     this.getFileURIByProfileType(
  //       this.getProfileType(age)
  //     )
  //   ).map((res: Response) => {
  //     return res.json();
  //   });
  // }

  // private getFileURIByProfileType(profileType: ProfileType) {
  //   if (profileType === ProfileType.six2Nineteen) {
  //     return 'assets/questions/profile1.json';
  //   } else  if (profileType === ProfileType.twenty2FiftyNine) {
  //     return 'assets/questions/profile2.json';
  //   } else if (profileType === ProfileType.sixty2Infinity) {
  //     return 'assets/questions/profile3.json';
  //   }
  // }

  // private getProfileType(age: number) {
  //   if (age > 5 && age <= 19) {
  //     return ProfileType.six2Nineteen;
  //   } else if (age > 19 && age <= 59) {
  //     return ProfileType.twenty2FiftyNine;
  //   } else if (age > 59) {
  //     return ProfileType.sixty2Infinity;
  //   }
  // }

}
