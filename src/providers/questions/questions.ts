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
      .map((res: Response) => {
        return res.json();
      });
  }

}
