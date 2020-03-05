import {Component, OnDestroy, OnInit} from '@angular/core';
import {BabyInfo, BabyService} from '../../services/baby/baby.service';
import {AccountService, ConnectionState} from '../../services/account/account.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.css']
})
export class BabiesComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  data: {[day: number]: BabyInfo[]};
  days: number[];
  names: string[];
  pickedAnswers: {[hash: string]: string} = {};

  toast: {message: string, warn: boolean} = null;
  private deleteTimeout: NodeJS.Timer = null;

  constructor(private babyService: BabyService, private accountService: AccountService) {}

  ngOnInit() {
    this.babyService.getBabiesInfo().subscribe(({ days, data, names }) => {
      this.days = days.sort();
      this.data = data;
      this.names = names;
      Object.values(this.data).forEach((chunk) => chunk.forEach(info => this.pickedAnswers[info.hash] = 'Choisir'));
    });
    this.subscription = this.accountService.stateBehavior.subscribe((state) => {
      if (state === ConnectionState.CONNECTED) {
        this.babyService.getAnswers().subscribe((data) => {
          data.forEach(answer => this.pickedAnswers[answer.hash] = answer.choice);
        });
      }
    });
  }

  canPick() {
    return this.accountService.connectionState === ConnectionState.CONNECTED;
  }

  pick(hash: string) {
    const picked = this.pickedAnswers[hash];
    this.babyService.sendAnswer(hash, picked).subscribe(
      () => {
        if (this.deleteTimeout !== null) {
          clearTimeout(this.deleteTimeout);
        }
        this.toast = { message: 'Enregistré !', warn: false };
        this.deleteTimeout = setTimeout(() => {
          this.toast = null;
          this.deleteTimeout = null;
        }, 1500);
      },
      () => {
        if (this.deleteTimeout !== null) {
          clearTimeout(this.deleteTimeout);
        }
        this.toast = { message: 'Impossible d\'enregister', warn: true };
        this.deleteTimeout = setTimeout(() => {
          this.toast = null;
          this.deleteTimeout = null;
        }, 1500);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
