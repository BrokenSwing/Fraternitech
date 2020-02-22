import { Component, OnInit } from '@angular/core';
import {ScoresService, Score} from '../../services/scores/scores.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  data: Score[];

  constructor(private scores: ScoresService) {
    this.data = [];
  }

  ngOnInit() {
    this.scores.getScoreboard().subscribe((data) => this.data = data);
  }

}
