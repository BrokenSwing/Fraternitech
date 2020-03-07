import { Component, OnInit } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
})
export class TrombinoscopeComponent implements OnInit {

  data = data;
  specialties: string[];

  constructor() {
    this.specialties = Object.keys(data).sort();
  }

  ngOnInit() {
  }

}
