import {Component, OnDestroy, OnInit} from '@angular/core';
import {Score, ScoresService} from '../../services/scores/scores.service';
import {AccountService, ConnectionState} from '../../services/account/account.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  data: (Score & { glitchClasses: string[] })[];
  ownScore?: Score = null;

  private subscription: Subscription;

  constructor(private scores: ScoresService, private accountService: AccountService) {
    this.data = [];
  }

  ngOnInit() {
    this.scores.getScoreboard().subscribe((data) => {
      this.data = data.map((d) => ({
        ...d,
        glitchClasses: this.randomGlitchClass(),
      }));
      this.subscription = this.accountService.stateBehavior.subscribe((state) => {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  randomGlitchClass(): string[] {
    const places = ['glitch-wrapper', 'glitch-wrapper', 'glitch-wrapper'];
    const random = Math.floor(Math.random() * 6);
    if (random > 0) {
      places[Math.floor(Math.random() * 3)] = `glitch-wrapper glitch_text glitch_delay_${random - 1}`;
    }
    return places;
  }
}
