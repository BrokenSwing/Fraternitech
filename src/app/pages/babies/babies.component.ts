import { Component, OnInit } from '@angular/core';
import { BabyService, BabyInfo } from '../../services/baby/baby.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
})
export class BabiesComponent implements OnInit {

  data: {[day: number]: BabyInfo[]};
  days: number[];

  constructor(private babyService: BabyService) {}

  ngOnInit() {
    this.babyService.getBabiesInfo().subscribe(({ days, data }) => {
      this.days = days.sort();
      this.data = data;
    });
  }

}
