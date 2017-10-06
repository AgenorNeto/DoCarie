import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsProvider {

  constructor(public http: Http/* , private plataform: Platform */) {
    console.log('hello')
  }

  getQuestions() {
    return this.http.get('assets/questions.json')
      .subscribe((res: Response) => {
        console.log(res.json());
      })
        // .map((res: Response) => {
        //   console.log(res.json());
        // }); //records in this case
  }

}
