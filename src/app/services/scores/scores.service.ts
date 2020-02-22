import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient, private account: AccountService) { }

  getScoreboard() {
    return this.http.get<Score[]>('/api/scoreboard');
  }

}

export class Score {
  rank: number;
  score: number;
  name: string;
}
