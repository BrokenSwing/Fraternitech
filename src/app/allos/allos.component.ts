import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allos',
  templateUrl: './allos.component.html',
  styleUrls: ['./allos.component.css']
})
export class AllosComponent implements OnInit {

  private static ALL_ALLOS = [{
    name: 'Allô ménage',
    description: 'Notre équipe vient faire le ménage chez vous',
  }, {
    name: 'Allô bière',
    description: 'Notre équipe vous ramène une bière',
  }, {
    name: 'Allô massage',
    description: 'Notre équipe vient vous masser',
  }, {
    name: 'Allô kebab',
    description: 'Notre équipe vous commande et livre un kebab',
  }, {
    name: 'Allô tacos',
    description: 'Notre équipe vous commande et vous livre un tacos',
  }, {
    name: 'Allô crêpe',
    description: 'Notre équipe vous prépare une crêpe et vous la livre',
  }];

  allos: Array<Array<{name: string, description: string}>> = [];

  constructor() {
    this.allos = Array.from(Array(AllosComponent.ALL_ALLOS.length / 3).keys()).map((i) => {
      const first = AllosComponent.ALL_ALLOS[i];
      const second = AllosComponent.ALL_ALLOS[i + 1];
      const third = AllosComponent.ALL_ALLOS[i + 2];
      const result = [first];
      if (second !== undefined) {
        result.push(second);
      }
      if (third !== undefined) {
        result.push(third);
      }
      return result;
    });
  }

  ngOnInit() {
  }

}
