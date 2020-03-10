import {Component, OnInit} from '@angular/core';
import {Score, ScoresService} from '../../services/scores/scores.service';
import {AccountService, ConnectionState} from '../../services/account/account.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  data: Score[];
  ownScore?: Score = null;

  constructor(private scores: ScoresService, private accountService: AccountService) {
    this.data = [];
  }

  ngOnInit() {
    this.scores.getScoreboard().subscribe((data) => {
      this.data = data;
      this.accountService.stateBehavior.subscribe((state) => {
        if (state === ConnectionState.CONNECTED) {
          const name = `${this.accountService.getUserInfo().firstName} ${this.accountService.getUserInfo().lastName}`;
          const filteredData = this.data.filter(d => d.name === name);
          this.ownScore = filteredData.length ? filteredData[0] : null;
        } else {
          this.ownScore = null;
        }
      });
    });
  }

}
