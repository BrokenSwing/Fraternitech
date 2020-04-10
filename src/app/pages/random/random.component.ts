import { Component, OnInit } from '@angular/core';
import {ScoresService} from '../../services/scores/scores.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html'
})
export class RandomComponent implements OnInit {

  participants: {rank: number, name: string, weight: number}[] = [];

  search = '';
  winners: {id: number, name: string}[] = [];

  drawOptions: { reset: boolean, count: number } = { reset: false, count: 1};
  drawing = false;

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.scoresService.getScoreboard().subscribe((data) => {
      this.participants = data.map((score) => ({
        rank: score.rank,
        name: score.name,
        weight: 1,
      }));
    });
  }

  drawWinners() {
    this.drawing = true;
    this.winners = [];

    const potentials: string[] = [];
    this.participants.forEach((participant) => {
      for (let i = 0; i < participant.weight; i++) {
        potentials.push(participant.name);
      }
    });
    this.shuffle(potentials);

    for (let i = 0; i < this.drawOptions.count && potentials.length > 0; i++) {
      const drawIndex = Math.floor(Math.random() * potentials.length);
      this.winners.push({
        id: i + 1,
        name: potentials[drawIndex]
      });
      if (!this.drawOptions.reset) {
        potentials.splice(drawIndex, 1);
      }
    }

    this.drawing = false;
  }

  shuffle<T>(a: Array<T>) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  winChances(weight: number) {
    if (weight === 0) {
      return 0;
    }
    const totalWeight = this.participants.reduce((left: number, right) => {
      return left + right.weight;
    }, 0);
    if (totalWeight === 0) {
      return 0;
    }
    return weight / totalWeight;
  }

}
