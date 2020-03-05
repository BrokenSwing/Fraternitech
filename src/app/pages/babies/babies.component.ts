import {Component, OnInit} from '@angular/core';
import {BabyInfo, BabyService} from '../../services/baby/baby.service';
import {AccountService, ConnectionState} from '../../services/account/account.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
})
export class BabiesComponent implements OnInit {

  data: {[day: number]: BabyInfo[]};
  days: number[];
  names: string[];

  constructor(private babyService: BabyService, private accountService: AccountService) {}

  ngOnInit() {
    this.babyService.getBabiesInfo().subscribe(({ days, data, names }) => {
      this.days = days.sort();
      this.data = data;
      this.names = names;
    });
  }

  canPick() {
    return this.accountService.connectionState === ConnectionState.CONNECTED;
  }

}
