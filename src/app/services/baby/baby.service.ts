import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AccountService} from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  constructor(private http: HttpClient, private accountService: AccountService) {}

  getBabiesInfo() {
    return this.http.get<BabiesResponse>('/api/babies').pipe(
      map((info) => {
        const days: number[] = [];
        const data: {[day: number]: BabyInfo[]} = {};
        info.images.forEach((i) => {
          if (!days.includes(i.dayNumber)) {
            days.push(i.dayNumber);
            data[i.dayNumber] = [];
          }
          data[i.dayNumber].push(i);
        });
        return {days, data, names: info.names};
      })
    );
  }

  sendAnswer(hash: string, answer: string) {
    return this.http.post('/api/babies/answers', {
      hash,
      answer,
    }, {
      headers: {
        Authorization: `Bearer ${this.accountService.getToken()}`
      }
    });
  }

  getAnswers() {
    return this.http.get<{hash: string, choice: string}[]>('/api/babies/answers', {
      headers: {
        Authorization: `Bearer ${this.accountService.getToken()}`,
      }
    });
  }

}

interface BabiesResponse {
  names: string[];
  images: BabyInfo[];
}

export interface BabyInfo {
  day: number;
  hash: string;
  dayNumber: number;
  ext: string;
  name: string;
}
