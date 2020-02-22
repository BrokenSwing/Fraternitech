import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  data: { firstname: string, lastname: string, score: number}[];

  constructor() {
    this.data = [];
    for (let i = 0; i < 15; i++) {
      this.data.push({
        firstname: 'Florent',
        lastname: 'HUGOUVIEUX',
        score: i * 5
      });
    }
  }

  ngOnInit() {
  }

}
