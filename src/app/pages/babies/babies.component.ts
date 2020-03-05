import {Component, OnInit} from '@angular/core';
import {BabyInfo, BabyService} from '../../services/baby/baby.service';
import {AccountService, ConnectionState} from '../../services/account/account.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
})
export class BabiesComponent implements OnInit {

  data: {[day: number]: BabyInfo[]};
  days: number[];
  names: string[];
  pickedAnswers: {[hash: string]: string} = {};

  constructor(private babyService: BabyService, private accountService: AccountService) {}

  ngOnInit() {
    this.babyService.getBabiesInfo().subscribe(({ days, data, names }) => {
      this.days = days.sort();
      this.data = data;
      this.names = names;
      Object.values(this.data).forEach((chunk) => chunk.forEach(info => this.pickedAnswers[info.hash] = 'Choisir'));
    });
  }

  canPick() {
    return this.accountService.connectionState === ConnectionState.CONNECTED;
  }

  pick(hash: string) {
    const picked = this.pickedAnswers[hash];
    this.babyService.sendAnswer(hash, picked).subscribe(() => {
      console.log('It is ok, it is sent');
    }, () => console.log('It is not ok at all'));
  }

}
