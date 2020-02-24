import { Component, OnInit } from '@angular/core';
import { BabyService, BabyImage } from '../../services/baby/baby.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
})
export class BabiesComponent implements OnInit {

  data: {[day: number]: BabyImage[]};
  days: number[];

  constructor(private babyService: BabyService) {}

  ngOnInit() {
    this.days = [];
    this.data = {};
    this.babyService.getAvailableImages().subscribe((imgs) => {
      imgs.forEach((img) => {
          if (this.data[img.dayNumber] === undefined) {
            this.data[img.dayNumber] = [];
            this.days.push(img.dayNumber);
          }
          this.data[img.dayNumber].push(img);
      });
    });
  }

}
