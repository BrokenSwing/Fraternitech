import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allos',
  templateUrl: './allos.component.html',
  styleUrls: ['./allos.component.css']
})
export class AllosComponent implements OnInit {

  private static ALL_ALLOS = [{
    name: 'Aspir\'allô',
    description: 'Nettoyer, balayer, c\'est notre métier',
  }, {
    name: 'Chich\'allô',
    description: 'Le allô des beubeu',
  }, {
    name: 'All\'orizontal',
    description: 'Non c\'est pas du cul c\'est des massages désolé',
  }, {
    name: 'Apér\'allô',
    description: 'On amène des bières et des gâteaux apéro',
  }, {
    name: 'Matéri\'allô',
    description: 'On vous rase le crâne dignement (ou toute autre coupe)',
  }, {
    name: 'Allô Stifl\'hug',
    description: 'On envoie Stifler te faire des câlins',
  }, {
    name: 'Coucou, tu veux voir ma banane ?',
    description: 'On vient avec un objet surprise dans la banane'
  }, {
    name: 'All\'autobus',
    description: 'On vous ramène chez vous',
    note: 'Seulement le jeudi et le week-end, pendant toute la nuit'
  }, {
    name: 'NBAllô',
    description: 'On vient tester vos talents de basketteur',
    note: '1 point par tire réussi, 1 fois par jour seulement'
  }, {
    name: 'Catch\'allô',
    description: 'Un catchou de Klité',
    note: 'Si les listeux boivent 13 verres ou plus, chaque autre joueur gagne 3 points'
  }, {
    name: 'Boire A LL\'envers',
    description: 'Poirier binouze des familles',
    note: 'Objectif : tenir 15 secondes pour gagner 4 points'
  }, {
    name: 'Une balle, une table, des verres',
    description: 'On se ramène avec notre super table décorée main',
    note: 'Si vous sortez vainqueurs, vous gagnez 3 points. A réserver en avance'
  }, {
    name: 'Coron\'allô',
    description: 'Des conseils pour survivre du coronavirus pendant ces campagnes'
  }, {
    name: 'AllôSaMèRe',
    description: 'Un peu d\'ASMR pour vous détendre'
  }, {
    name: 'All\'oroscope',
    description: 'Nos voyants nous ont déjà prévenu que tu nous appelle pour débarasser ton verre'
  }, {
    name: 'AHAHA\'llô',
    description: 'Tata Francine a intérêt à retenir son chicot'
  }, {
    name: 'Que cALLÔr',
    description: 'Venez tester notre téléphone rose'
  }, {
    name: 'SAH\'llô',
    description: '... Oo'
  }, {
    name: 'Allô ptit dej',
    description: 'On t\'apporte le petit déjeuner directement chez toi',
    note: 'Seulement le week-end de 8h à 11h'
  }, {
    name: 'Allô popcorn',
    description: 'Qu\'il soit salé ou sucré, on a mit tout l\'air de nos poumons pour le souffler ce maïs'
  }, {
    name: 'Allô restauration',
    description: 'On vous libre à domicile',
    note: 'Paiement par lyf ou lydia'
  }];

  allos: Array<Array<{name: string, description: string, note?: string}>> = [];

  constructor() {
    this.allos = Array.from(Array(Math.ceil(AllosComponent.ALL_ALLOS.length / 3)).keys()).map((i) => {
      const first = AllosComponent.ALL_ALLOS[i * 3];
      const second = AllosComponent.ALL_ALLOS[i * 3 + 1];
      const third = AllosComponent.ALL_ALLOS[i * 3 + 2];
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
