import { Component, OnInit } from '@angular/core';
import {data, teams} from './data';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
})
export class TrombinoscopeComponent implements OnInit {

  data = data;
  teams = teams;
  displayTeams = false;
  specialties: string[];

  constructor() {
    this.specialties = Object.keys(data).sort();
  }

  ngOnInit() {
  }

  showTeams() {
    this.displayTeams = true;
  }

  showSections() {
    this.displayTeams = false;
  }

}
