import * as moment from 'moment';
import User from './user';

interface Data {
    name: string;
    hash: string;
    day: Date;
    dayNumber: number;
    ext: string;
}

const BEGINNING_DATE = moment('9:00:00 09/03/2020', 'h:mm:ss DD:MM:YYYY', 'fr');
const NEXT_BEGINNING_DATE = moment('9:00:00 22/04/2020', 'h:mm:ss DD:MM:YYYY', 'fr');

export let images: Data[] = [
    {
        name: 'Alex Benbouazza',
        hash: '3f202cad6f77f24b756919424ceb0fb8',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Alex Lacroix',
        hash: '6057a73b65ae7dc2c56ea81fc9a945eb',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Antton Etcheverria',
        hash: '708d7b17fd1fe92a8071761a51616bdc',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Baptiste Mouton',
        hash: 'd52d300ded6bfbeb398c7c6b182c2800',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Benjamin Montariol',
        hash: '6d086cdece204358fb69dee76c8e972b',
        day: new Date(),
        dayNumber: 1,
        ext: 'png'
    },
    {
        name: 'Cédric Dagon',
        hash: 'b95e9084ee60b820c6da965cda29a3ce',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Clara Devillers',
        hash: 'a81f7f8fa3580ed6d3af24cfec1ebeb2',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Clément Grondin',
        hash: '3b35a504ba73f54dd55d397f60e012d1',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Clémentine Ferrari',
        hash: '83d3c1f5ba8bbe0cb9b635f4ba5388f8',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Colin Dardonville',
        hash: '2b77d65bd128ec6f695a83203120e493',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Elsa Mellon',
        hash: '8bfb7e2953b287f20ba96d5b8c618e3f',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg'
    },
    {
        name: 'Emilie Jean',
        hash: '90baaf597c269a7e0e14e5ce5c536cb2',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg'
    },
    {
        name: 'Emma Ladoux',
        hash: '2a24f0b350f1ca5f3730cae7b4374509',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Enzo Ducros',
        hash: 'c18aa85346da8615fda892efdd9f9eaa',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg',
    },
    {
        name: 'Esther Perrin',
        hash: 'f1fbad3858b11fb03169df0533a740ca',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Fanny Lutz',
        hash: '47a1f4b28e35c23f6f5c96ffc2b44585',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Fiona Gimenez',
        hash: '771db0b1f44a50fceed20625ea168a94',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Flavie Oddoz',
        hash: '2c40b95cdd8d6f46a6cbab47ad1e6ecd',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg'
    },
    {
        name: 'Florent Hugouvieux',
        hash: '70d701a86b6302b452a382af070fb248',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Florian Pull',
        hash: '2daf36fcfd74dc336897ef1921dc767c',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Gaétan Martin',
        hash: '0d8b6f11db4483bbdae27bf272a07ac5',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Inès Le Gentil',
        hash: '74a5fa242c87a2ee647fe374f7ee78bd',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Joris Paredes',
        hash: 'db44b0d8992d8544f1024c3e360ce671',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Julien Wiegandt',
        hash: 'ee1b691fe7fcb890ac180ff035c34eb0',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Juliette Aldon',
        hash: 'b658c38374e059e80bf4dd949da72e94',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Laure Teyssonnieres',
        hash: '1c7ba93d657e4063fe562e068bfa6a2b',
        day: new Date(),
        dayNumber: 1,
        ext: 'png'
    },
    {
        name: 'Léa Martineau',
        hash: '9b0da004109432e2e3ba6df70c656c52',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Léo Glorieux',
        hash: '3527128f0c8ce0a15b1af77baf770471',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Lou Vivenot',
        hash: '240c6f1200f928656543a1ec8c64907c',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Manon Lillo',
        hash: '683f4398e46f0ec5c427b60ac24f4a14',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Margaux Potillon',
        hash: 'a6c508edf58f986576479038fc9c60fc',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Margot Chaumette',
        hash: 'cd04240849fe8f7a640e5af6e2e0afe7',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg',
    },
    {
        name: 'Marianne Schäfer',
        hash: '22f647ee45372303f0975103c7e30119',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Marie Lescure',
        hash: '908716e04a91fd640c0793a37f70733c',
        day: new Date(),
        dayNumber: 1,
        ext: 'png'
    },
    {
        name: 'Marine Téroitin',
        hash: '81f697608b892cc3a78627ca049eb608',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg',
    },
    {
        name: 'Martin Doré',
        hash: '9d6cd5977919c3e8f755e57f9fe332f3',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Mateo Lacroix',
        hash: '26929843c5f4184bcd441b50abebc444',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Mathilde Tribot',
        hash: '13753e6d79be653da1abce1ce36edf7f',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Matteo Lamouret',
        hash: '4968cdf0e987ff1eb7e49e945f2dd093',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Maurine Chaib',
        hash: '61904a49108ccf877590ef7d8ea9cf53',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Naia Hiriart-Urruty',
        hash: 'daeaaa8b6cb37801a49b5d7bf8f57dcb',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Nathan Massez',
        hash: '0860b56c0f81f91453b0ae092d3cea06',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Noëlie Bourgeois',
        hash: 'c249a3d18732406a3f36b6db1e7a1f96',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Paul Bovet',
        hash: 'ea8ee26017010c94a5eb25178b10cded',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Paul Noël',
        hash: 'ff38cd6834a7d294dd0af6b125444db9',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Pinède Ézéchiel',
        hash: 'd656552efe8faff708a9d3cc327326cd',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Raphael Vigne',
        hash: '9fa8ed4651b1f7a19325aeee4cfbb1b6',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Romane Kern',
        hash: '31aec0a9b8e07d07572b0461b3b811b9',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Rudy Balzano',
        hash: 'd7b7708a4d2bc5ca486b12d89a10c345',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Sarah Vitrou',
        hash: '1ba628214b274cb50539a5e8070e5cc8',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg',
    },
    {
        name: 'Simon Hurault',
        hash: '0512d1e001b244debd58b3cc259b1513',
        day: new Date(),
        dayNumber: 1,
        ext: 'png'
    },
    {
        name: 'Stella Rutigliano',
        hash: '3d96ae4f7ed97b70b1637c7674bdbb34',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Tamara Challut',
        hash: 'b4e5f7730f0de97f642a9d649ffd15d9',
        day: new Date(),
        dayNumber: 1,
        ext: 'png'
    },
    {
        name: 'Tanguy Mitchell',
        hash: '05ff1f13d2c6743d2fa2276756a46569',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Telma Chauvin',
        hash: '3df27ba24f48a88d1f36ae5e0fafd8c6',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Thomas Grosse',
        hash: '0d3ff9916c1b5888a0f899fcec951263',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpeg'
    },
    {
        name: 'Thibaud Castelle',
        hash: '1955f68ceb3058444c595cf18ca2b6bd',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Titouan Merland',
        hash: '1c044cb36c321004787f478ba01efae8',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
        name: 'Tom Fabié Chabert',
        hash: 'cf7d7d4aed4994fc7629ff8a819bf058',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Benjamin Damance',
        hash: '7d790e2c021ebc9ad2f32fb747e9eb9b',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg',
    },
    {
        name: 'Vincent Gressel',
        hash: 'b101e9dd3974818a47c06bd8bc78a111',
        day: new Date(),
        dayNumber: 1,
        ext: 'jpg'
    },
    {
        name: 'Zaireen Alam',
        hash: 'bbf6ecd76614c3e9d015d31caa10547d',
        day: new Date(),
        dayNumber: 1,
        ext: 'png',
    },
    {
      name: 'Mickael Ergen',
      hash: 'bd7fc9d5d609b1415b4bd845eacb3faf',
      day: new Date(),
      dayNumber: 1,
      ext: 'jpg',
    },
    {
      name: 'Loïck Nicolaï',
      hash: '95add863f1f54fab68825d3a2c781975',
      day: new Date(),
      dayNumber: 1,
      ext: 'png'
    }
];
images = images
  .sort((img1, img2) => img1.hash.localeCompare(img2.hash))
  .map((img, i) => {
    img.dayNumber = Math.floor(i / 6) + 1;
    if (img.dayNumber > 7) {
      img.day = moment(NEXT_BEGINNING_DATE).toDate();
      img.dayNumber = 8;
    } else {
      img.day = moment(BEGINNING_DATE).add(img.dayNumber - 1, 'd').toDate();
    }
    return img;
  });

export const users = [
  {
    firstname: 'Justine',
    lastname: 'Foulquier',
    score: 154
  },
  {
    firstname: 'Mickael',
    lastname: 'Racine',
    score: 135
  },
  {
    firstname: 'Elleestou Masoeur',
    lastname: 'Soundboks Troi',
    score: 131
  },
  {
    firstname: 'Antoine',
    lastname: 'Lemonnier',
    score: 127
  },
  {
    firstname: 'Ambre',
    lastname: 'Rozand',
    score: 120
  },
  {
    firstname: 'Alexandre',
    lastname: 'Girbal',
    score: 117
  },
  {
    firstname: 'Camille',
    lastname: 'Thomas',
    score: 91
  },
  {
    firstname: 'Estelle',
    lastname: 'Mandra',
    score: 90
  },
  {
    firstname: 'Loriane',
    lastname: 'Poirot',
    score: 89
  },
  {
    firstname: 'Louis',
    lastname: 'Soleilhavoup',
    score: 88
  },
  {
    firstname: 'Arthur',
    lastname: 'Morel',
    score: 75
  },
  {
    firstname: 'Hugo',
    lastname: 'Marquette',
    score: 74
  },
  {
    firstname: 'Kévin',
    lastname: 'Marques',
    score: 71
  },
  {
    firstname: 'Morgane',
    lastname: 'Pouzioux',
    score: 68
  },
  {
    firstname: 'Adrien',
    lastname: 'Gottardi',
    score: 68
  },
  {
    firstname: 'Oscar',
    lastname: 'Prêcheur',
    score: 63
  },
  {
    firstname: 'Léa',
    lastname: 'Megherbi',
    score: 63
  },
  {
    firstname: 'Alice',
    lastname: 'Jougneau',
    score: 59
  },
  {
    firstname: 'Lucas',
    lastname: 'Mas',
    score: 58
  },
  {
    firstname: 'Thomas',
    lastname: 'Pettex',
    score: 57
  },
  {
    firstname: 'Bastien',
    lastname: 'Hilaire',
    score: 52
  },
  {
    firstname: 'Rémy',
    lastname: 'Riondet',
    score: 49
  },
  {
    firstname: 'Nicolas',
    lastname: 'Gaudin',
    score: 49
  },
  {
    firstname: 'Manon',
    lastname: 'Garaud',
    score: 46
  },
  {
    firstname: 'Romain',
    lastname: 'Pessato',
    score: 46
  },
  {
    firstname: 'Tifenn',
    lastname: 'Mbn',
    score: 45
  },
  {
    firstname: 'Guilhem',
    lastname: 'Dasque',
    score: 44
  },
  {
    firstname: 'Matthew',
    lastname: 'Haas',
    score: 43
  },
  {
    firstname: 'Robin',
    lastname: 'Sales',
    score: 43
  },
  {
    firstname: 'Coline',
    lastname: 'Bonneau',
    score: 43
  },
  {
    firstname: 'Clément',
    lastname: 'Temil',
    score: 42
  },
  {
    firstname: 'Ianis',
    lastname: 'Blondet',
    score: 42
  },
  {
    firstname: 'Alexis',
    lastname: 'Andre',
    score: 40
  },
  {
    firstname: 'Justine',
    lastname: 'Lory',
    score: 39
  },
  {
    firstname: 'Emma',
    lastname: 'Guillemot',
    score: 39
  },
  {
    firstname: 'Ophélie',
    lastname: 'Soulès',
    score: 38
  },
  {
    firstname: 'Jodie',
    lastname: 'Cottave',
    score: 38
  },
  {
    firstname: 'Ninon',
    lastname: 'Gbt',
    score: 38
  },
  {
    firstname: 'Clovis',
    lastname: 'Bouriol',
    score: 38
  },
  {
    firstname: 'Lucas',
    lastname: 'Cuisset',
    score: 37
  },
  {
    firstname: 'Mathis',
    lastname: 'Bourrat',
    score: 36
  },
  {
    firstname: 'Clémence',
    lastname: 'Vuillet',
    score: 35
  },
  {
    firstname: 'Raphael',
    lastname: 'Bordoux',
    score: 34
  },
  {
    firstname: 'Candice',
    lastname: 'Ducastel',
    score: 34
  },
  {
    firstname: 'Quentin',
    lastname: 'Fache',
    score: 33
  },
  {
    firstname: 'Caroline',
    lastname: 'Apprioual',
    score: 33
  },
  {
    firstname: 'Samy',
    lastname: 'El Manssouri',
    score: 30
  },
  {
    firstname: 'Jules',
    lastname: 'Froeliger',
    score: 30
  },
  {
    firstname: 'Respo',
    lastname: 'Traquenard',
    score: 30
  },
  {
    firstname: 'Zélie',
    lastname: 'Villaret',
    score: 30
  },
  {
    firstname: 'Luca',
    lastname: 'Debeir',
    score: 30
  },
  {
    firstname: 'Vivien',
    lastname: 'Benincasa',
    score: 30
  },
  {
    firstname: 'Chloé',
    lastname: 'Olacia',
    score: 30
  },
  {
    firstname: 'Agathe',
    lastname: 'Wild',
    score: 29
  },
  {
    firstname: 'Perrine',
    lastname: 'Colin',
    score: 29
  },
  {
    firstname: 'Hugo',
    lastname: 'Soleilhavoup',
    score: 28
  },
  {
    firstname: 'Jeremie',
    lastname: 'Dumont',
    score: 27
  },
  {
    firstname: 'Mélanie',
    lastname: 'Segura',
    score: 27
  },
  {
    firstname: 'Lucile',
    lastname: 'Pagis',
    score: 27
  },
  {
    firstname: 'Anthony',
    lastname: 'Ferry',
    score: 27
  },
  {
    firstname: 'Lucie',
    lastname: 'Vignon',
    score: 27
  },
  {
    firstname: 'Laure',
    lastname: 'Freyche',
    score: 26
  },
  {
    firstname: 'Mario',
    lastname: 'Mega',
    score: 26
  },
  {
    firstname: 'Margo',
    lastname: 'Boyer',
    score: 25
  },
  {
    firstname: 'Aline',
    lastname: 'Lefèvre',
    score: 25
  },
  {
    firstname: 'David',
    lastname: 'Meier',
    score: 24
  },
  {
    firstname: 'Héloïse',
    lastname: 'Daina',
    score: 23
  },
  {
    firstname: 'Aurélien',
    lastname: 'Gori',
    score: 23
  },
  {
    firstname: 'Tina',
    lastname: 'Garcia',
    score: 22
  },
  {
    firstname: 'Paul',
    lastname: 'Agut',
    score: 21
  },
  {
    firstname: 'Léa',
    lastname: 'Goepp',
    score: 20
  },
  {
    firstname: 'Léna',
    lastname: 'Sarrabezolles',
    score: 20
  },
  {
    firstname: 'Leo',
    lastname: 'Mollard',
    score: 20
  },
  {
    firstname: 'Tristan',
    lastname: 'Guigui',
    score: 19
  },
  {
    firstname: 'Valentin',
    lastname: 'Floch',
    score: 19
  },
  {
    firstname: 'Pauline',
    lastname: 'Legrand',
    score: 19
  },
  {
    firstname: 'Guillaume',
    lastname: 'Rousse',
    score: 17
  },
  {
    firstname: 'Lyne',
    lastname: 'Thimonier',
    score: 17
  },
  {
    firstname: 'Antonin',
    lastname: 'Holo',
    score: 17
  },
  {
    firstname: 'Olivia',
    lastname: 'Deslandes',
    score: 17
  },
  {
    firstname: 'Léa',
    lastname: 'Lavigne',
    score: 16
  },
  {
    firstname: 'Niels',
    lastname: 'Vasselin',
    score: 16
  },
  {
    firstname: 'Jade',
    lastname: 'Locci',
    score: 16
  },
  {
    firstname: 'Félix',
    lastname: 'Potié',
    score: 15
  },
  {
    firstname: 'Aymeric',
    lastname: 'Dixi',
    score: 15
  },
  {
    firstname: 'Cedric',
    lastname: 'Dagon',
    score: 15
  },
  {
    firstname: 'Guillaume',
    lastname: 'Grosjean',
    score: 14
  },
  {
    firstname: 'Theo',
    lastname: 'Delaporte',
    score: 14
  },
  {
    firstname: 'Tom',
    lastname: 'Werli',
    score: 14
  },
  {
    firstname: 'Amjad',
    lastname: 'Menouer',
    score: 14
  },
  {
    firstname: 'Maxime',
    lastname: 'Corbet',
    score: 14
  },
  {
    firstname: 'Ewen',
    lastname: 'Rondon',
    score: 13
  },
  {
    firstname: 'Emilie',
    lastname: 'Pasquet',
    score: 13
  },
  {
    firstname: 'Nam-Kim',
    lastname: 'Pipaud',
    score: 13
  },
  {
    firstname: 'Lucas',
    lastname: 'Thcl',
    score: 13
  },
  {
    firstname: 'Margot',
    lastname: 'Strabach',
    score: 13
  },
  {
    firstname: 'Mathieu',
    lastname: 'Garcia',
    score: 13
  },
  {
    firstname: 'Joya',
    lastname: 'Sayess',
    score: 12
  },
  {
    firstname: 'Ckan',
    lastname: 'LéAllos',
    score: 12
  },
  {
    firstname: 'Isaure',
    lastname: 'Valadier',
    score: 12
  },
  {
    firstname: 'Clément',
    lastname: 'Brière',
    score: 12
  },
  {
    firstname: 'Dechav',
    lastname: 'Dechav',
    score: 11
  },
  {
    firstname: 'Hadrien',
    lastname: 'Mayoux',
    score: 11
  },
  {
    firstname: 'Corentin',
    lastname: 'Vernac',
    score: 10
  },
  {
    firstname: 'Bastien',
    lastname: 'Fabre',
    score: 10
  },
  {
    firstname: 'Valentin',
    lastname: 'Tezza',
    score: 9
  },
  {
    firstname: 'Bastien',
    lastname: 'Oger',
    score: 9
  },
  {
    firstname: 'Thomas',
    lastname: 'Pourchaille',
    score: 9
  },
  {
    firstname: 'Massine',
    lastname: 'Bettache',
    score: 9
  },
  {
    firstname: 'Mira',
    lastname: 'Mahdi',
    score: 9
  },
  {
    firstname: 'Ian',
    lastname: 'Pitel',
    score: 8
  },
  {
    firstname: 'Louis',
    lastname: 'Clouvel',
    score: 8
  },
  {
    firstname: 'Hugo',
    lastname: 'Danis',
    score: 8
  },
  {
    firstname: 'Emile',
    lastname: 'Berger',
    score: 6
  },
  {
    firstname: 'Alexander-Lee',
    lastname: 'Couchy',
    score: 6
  },
  {
    firstname: 'Hugo',
    lastname: 'Blanchard',
    score: 6
  },
  {
    firstname: 'Théotime',
    lastname: 'Perron',
    score: 6
  },
  {
    firstname: 'Baptiste',
    lastname: 'Sueur',
    score: 6
  },
  {
    firstname: 'Johan',
    lastname: 'Torosjan',
    score: 6
  },
  {
    firstname: 'Garance',
    lastname: 'Donnart',
    score: 6
  },
  {
    firstname: 'Loic',
    lastname: 'Chx',
    score: 6
  },
  {
    firstname: 'Hugo',
    lastname: 'Brando',
    score: 6
  },
  {
    firstname: 'Thibault',
    lastname: 'Jacquesson',
    score: 5
  },
  {
    firstname: 'Baptiste',
    lastname: 'Delorme',
    score: 5
  },
  {
    firstname: 'Audrey',
    lastname: 'Diaz',
    score: 5
  },
  {
    firstname: 'Yoann',
    lastname: 'Cohidon',
    score: 5
  },
  {
    firstname: 'Simon',
    lastname: 'Rose',
    score: 5
  },
  {
    firstname: 'Emily',
    lastname: 'Perez-Bostedt',
    score: 5
  },
  {
    firstname: 'Arthur',
    lastname: 'Aschehoug',
    score: 4
  },
  {
    firstname: 'Vile Quenouille',
    lastname: 'De Puech',
    score: 4
  },
  {
    firstname: 'Jean Poule',
    lastname: 'Coctier',
    score: 4
  },
  {
    firstname: 'Valentin',
    lastname: 'Lefebvre',
    score: 4
  },
  {
    firstname: 'Reda',
    lastname: 'Arifi',
    score: 4
  },
  {
    firstname: 'Michael',
    lastname: 'Maregrande',
    score: 4
  },
  {
    firstname: 'Laurie',
    lastname: 'Cruché',
    score: 4
  },
  {
    firstname: 'Etienne',
    lastname: 'Dayet',
    score: 4
  },
  {
    firstname: 'Florine',
    lastname: 'Marechal',
    score: 4
  },
  {
    firstname: 'Léana',
    lastname: 'Filippi',
    score: 4
  },
  {
    firstname: 'Salomé',
    lastname: 'Santin',
    score: 4
  },
  {
    firstname: 'Antoine',
    lastname: 'Gatto',
    score: 4
  },
  {
    firstname: 'Ambre',
    lastname: 'Guibal',
    score: 3
  },
  {
    firstname: 'Loïc',
    lastname: 'Mercier',
    score: 3
  },
  {
    firstname: 'Hugo',
    lastname: 'Manez',
    score: 3
  },
  {
    firstname: 'Remso',
    lastname: 'Guichete',
    score: 3
  },
  {
    firstname: 'Theo',
    lastname: 'Lemaire',
    score: 3
  },
  {
    firstname: 'Lisa',
    lastname: 'Crtn',
    score: 3
  },
  {
    firstname: 'Camille',
    lastname: 'Durieux',
    score: 3
  },
  {
    firstname: 'Corentin',
    lastname: 'Raveleau',
    score: 3
  },
  {
    firstname: 'Alexandre',
    lastname: 'Malrieu',
    score: 3
  },
  {
    firstname: 'Pablo',
    lastname: 'Lecoutre',
    score: 3
  },
  {
    firstname: 'Solenn',
    lastname: 'Lpz',
    score: 3
  },
  {
    firstname: 'Elise',
    lastname: 'Da Silva',
    score: 3
  },
  {
    firstname: 'Mathieu',
    lastname: 'Dbne',
    score: 3
  },
  {
    firstname: 'Lucas',
    lastname: 'Cherbonnel Besciajian',
    score: 2
  },
  {
    firstname: 'Chloe',
    lastname: 'Pelet',
    score: 2
  },
  {
    firstname: 'Florian',
    lastname: 'Siccardi',
    score: 2
  },
  {
    firstname: 'Damien',
    lastname: 'Raymond',
    score: 2
  },
  {
    firstname: 'Xavier',
    lastname: 'Sulli',
    score: 2
  },
  {
    firstname: 'Dylan',
    lastname: 'Farina',
    score: 2
  },
  {
    firstname: 'Lucas',
    lastname: 'Jaubert',
    score: 2
  },
  {
    firstname: 'Salah',
    lastname: 'Mnt',
    score: 2
  },
  {
    firstname: 'Martin',
    lastname: 'Bousquet',
    score: 2
  },
  {
    firstname: 'Clément',
    lastname: 'Mtz',
    score: 2
  },
  {
    firstname: 'Florian',
    lastname: 'Saintomé',
    score: 2
  },
  {
    firstname: 'Eva',
    lastname: 'Nvl',
    score: 2
  },
  {
    firstname: 'Cyprien',
    lastname: 'Legrand',
    score: 2
  },
  {
    firstname: 'Ferry',
    lastname: 'Wehman',
    score: 2
  },
  {
    firstname: 'Jeanne',
    lastname: 'Léauté',
    score: 2
  },
  {
    firstname: 'Alexandre',
    lastname: 'Fernique',
    score: 2
  },
  {
    firstname: 'Silia',
    lastname: 'Benentendi',
    score: 2
  },
  {
    firstname: 'Axel',
    lastname: 'Legué',
    score: 2
  },
  {
    firstname: 'Carla',
    lastname: 'Buonomo',
    score: 2
  },
  {
    firstname: 'Alexandre',
    lastname: 'Fazly',
    score: 2
  },
  {
    firstname: 'Léo',
    lastname: 'Faliez',
    score: 2
  },
  {
    firstname: 'Baptiste',
    lastname: 'Broudard',
    score: 2
  },
  {
    firstname: 'Lucie',
    lastname: 'François',
    score: 2
  },
  {
    firstname: 'Guillaume',
    lastname: 'Maury',
    score: 1
  },
  {
    firstname: 'Julien',
    lastname: 'Bianchi',
    score: 1
  },
  {
    firstname: 'Manon',
    lastname: 'Salles',
    score: 1
  },
  {
    firstname: 'Clément',
    lastname: 'Lignier',
    score: 1
  },
  {
    firstname: 'Guillaume',
    lastname: 'Dufour',
    score: 1
  },
  {
    firstname: 'Kenneth',
    lastname: 'Dassi',
    score: 1
  },
  {
    firstname: 'Lilian',
    lastname: 'Misser',
    score: 1
  },
  {
    firstname: 'Manon',
    lastname: 'Vidal',
    score: 1
  },
  {
    firstname: 'Margaux',
    lastname: 'Queverdo',
    score: 1
  },
  {
    firstname: 'Anthony',
    lastname: 'Bof',
    score: 1
  },
  {
    firstname: 'Marie',
    lastname: 'Mille',
    score: 1
  },
  {
    firstname: 'Yann',
    lastname: 'Bichard',
    score: 1
  },
  {
    firstname: 'Martin',
    lastname: 'Delporte',
    score: 1
  },
  {
    firstname: 'Inès',
    lastname: 'Thésée',
    score: 1
  },
  {
    firstname: 'Keven',
    lastname: 'Dvorianoff',
    score: 1
  },
  {
    firstname: 'Clémence',
    lastname: 'Dumoulin',
    score: 1
  },
  {
    firstname: 'Benoît',
    lastname: 'Sion',
    score: 1
  },
  {
    firstname: 'Marianne',
    lastname: 'Brousse',
    score: 1
  },
  {
    firstname: 'Quentin',
    lastname: 'Leherisse',
    score: 1
  },
  {
    firstname: 'Lucas',
    lastname: 'Perrin',
    score: 1
  },
  {
    firstname: 'Maïlys',
    lastname: 'Serreau',
    score: 1
  },
  {
    firstname: 'Bluz',
    lastname: 'Au Beurre',
    score: 1
  },
  {
    firstname: 'Melany',
    lastname: 'Pitarch',
    score: 1
  },
  {
    firstname: 'Fiona',
    lastname: 'Bosson',
    score: 1
  },
  {
    firstname: 'Mathias',
    lastname: 'Chauchard',
    score: 1
  },
  {
    firstname: 'Claire',
    lastname: 'Favier',
    score: 1
  },
  {
    firstname: 'Émile',
    lastname: 'Hermet',
    score: 1
  },
  {
    firstname: 'Luiss',
    lastname: 'Mrn',
    score: 1
  },
  {
    firstname: 'Marie',
    lastname: 'Da Justa',
    score: 1
  },
  {
    firstname: 'Valentin',
    lastname: 'Lhoste',
    score: 1
  },
  {
    firstname: 'Antoine',
    lastname: 'Arsac',
    score: 0
  },
  {
    firstname: 'Rami',
    lastname: 'Chehayeb',
    score: 0
  },
  {
    firstname: 'Cyriaque',
    lastname: 'Mas',
    score: 0
  },
  {
    firstname: 'Mathieu',
    lastname: 'Veber',
    score: 0
  },
  {
    firstname: 'Andréa',
    lastname: 'Prud\'homme',
    score: 0
  },
  {
    firstname: 'Noël',
    lastname: 'Flantier',
    score: 0
  },
  {
    firstname: 'Jérôme',
    lastname: 'Turlepin',
    score: 0
  },
  {
    firstname: 'Damien',
    lastname: 'Lecha',
    score: 0
  },
  {
    firstname: 'Florian',
    lastname: 'Houdebine',
    score: 0
  },
  {
    firstname: 'Adam',
    lastname: 'Ibnabdeljalil',
    score: 0
  },
  {
    firstname: 'Victor',
    lastname: 'Havelange',
    score: 0
  },
  {
    firstname: 'Marine',
    lastname: 'Desmartin',
    score: 0
  },
  {
    firstname: 'Nathan',
    lastname: 'Leroy',
    score: 0
  },
  {
    firstname: 'Alexia',
    lastname: 'Ognard',
    score: 0
  },
  {
    firstname: 'Audrey',
    lastname: 'Samson',
    score: 0
  },
  {
    firstname: 'Mathilde',
    lastname: 'Olivier',
    score: 0
  },
  {
    firstname: 'Richard',
    lastname: 'Martin',
    score: 0
  },
  {
    firstname: 'Quentin',
    lastname: 'Candaele',
    score: 0
  },
  {
    firstname: 'Maugan',
    lastname: 'Sciarra',
    score: 0
  },
  {
    firstname: 'Merlin',
    lastname: 'Auzuech',
    score: 0
  },
  {
    firstname: 'Oday',
    lastname: 'Zorkot',
    score: 0
  },
  {
    firstname: 'Timothée',
    lastname: 'Dpl',
    score: 0
  },
  {
    firstname: 'Lise',
    lastname: 'Biichouard',
    score: 0
  },
  {
    firstname: 'Océane',
    lastname: 'Dupuis',
    score: 0
  },
  {
    firstname: 'Jade',
    lastname: 'Céfaï',
    score: 0
  },
  {
    firstname: 'Amelia',
    lastname: 'Cheloufi',
    score: 0
  },
  {
    firstname: 'LM',
    lastname: 'Lanaud',
    score: 0
  },
  {
    firstname: 'Augustin',
    lastname: 'Maillé',
    score: 0
  },
  {
    firstname: 'Loris',
    lastname: 'Bouchez',
    score: 0
  },
  {
    firstname: 'Emile',
    lastname: 'Bonny',
    score: 0
  },
  {
    firstname: 'Joey',
    lastname: 'Dagaud',
    score: 0
  },
  {
    firstname: 'Constantin',
    lastname: 'Gaboury',
    score: 0
  },
  {
    firstname: 'Eric',
    lastname: 'Eric',
    score: 0
  },
  {
    firstname: 'Louise',
    lastname: 'Pilla',
    score: 0
  },
  {
    firstname: 'Alice',
    lastname: 'Vermale',
    score: 0
  },
  {
    firstname: 'Nicolas',
    lastname: 'Gaillard',
    score: 0
  },
  {
    firstname: 'Lucas',
    lastname: 'Paulin',
    score: 0
  },
  {
    firstname: 'Delphine',
    lastname: 'Duc',
    score: 0
  },
  {
    firstname: 'Eva',
    lastname: 'Carême',
    score: 0
  },
  {
    firstname: 'Morgane',
    lastname: 'Ait',
    score: 0
  },
  {
    firstname: 'Marc-Antoine',
    lastname: 'Danner',
    score: 0
  },
  {
    firstname: 'Quentin',
    lastname: 'Veyrat',
    score: 0
  },
  {
    firstname: 'Ludo',
    lastname: 'Mft',
    score: 0
  },
  {
    firstname: 'Mehdi',
    lastname: 'Ezzenfari',
    score: 0
  },
  {
    firstname: 'Augustine',
    lastname: 'Hallier',
    score: 0
  },
  {
    firstname: 'Théo',
    lastname: 'Ponthieu',
    score: 0
  },
  {
    firstname: 'Anna',
    lastname: 'Agobian',
    score: 0
  },
  {
    firstname: 'Hicham',
    lastname: 'Faitour',
    score: 0
  },
  {
    firstname: 'Orlane',
    lastname: 'Ducrot',
    score: 0
  },
  {
    firstname: 'Louka',
    lastname: 'Dtr',
    score: 0
  },
  {
    firstname: 'Suzie',
    lastname: 'Farineau',
    score: 0
  },
  {
    firstname: 'Lénaïs',
    lastname: 'Desbos',
    score: 0
  },
  {
    firstname: 'Claire',
    lastname: 'Ozenfant',
    score: 0
  },
  {
    firstname: 'Zacharie',
    lastname: 'De Séguin',
    score: 0
  },
  {
    firstname: 'Loana',
    lastname: 'Tonetti',
    score: 0
  },
  {
    firstname: 'Agathe',
    lastname: 'Bignon',
    score: 0
  },
  {
    firstname: 'Chloé',
    lastname: 'Combe',
    score: 0
  },
  {
    firstname: 'Florian',
    lastname: 'Audiger',
    score: 0
  },
  {
    firstname: 'Clément',
    lastname: 'Clisson',
    score: 0
  },
  {
    firstname: 'Emilie',
    lastname: 'Ardiet',
    score: 0
  },
  {
    firstname: 'Hugo',
    lastname: 'Maitre',
    score: 0
  },
  {
    firstname: 'Aymeric',
    lastname: 'Couprie',
    score: 0
  },
  {
    firstname: 'Rose',
    lastname: 'Bruder',
    score: 0
  },
  {
    firstname: 'Florine',
    lastname: 'Pratlong',
    score: 0
  },
  {
    firstname: 'Gabriel',
    lastname: 'Le Meliner',
    score: 0
  },
  {
    firstname: 'Amélie',
    lastname: 'Colombeix',
    score: 0
  },
  {
    firstname: 'Lola',
    lastname: 'Graugnard',
    score: 0
  },
  {
    firstname: 'Thomas',
    lastname: 'Boyer',
    score: 0
  },
  {
    firstname: 'Lucas',
    lastname: 'Depieds',
    score: 0
  },
  {
    firstname: 'Lucas',
    lastname: 'Beaudrier',
    score: 0
  },
  {
    firstname: 'Paul',
    lastname: 'Dms',
    score: 0
  },
  {
    firstname: 'Mathis',
    lastname: 'Michel',
    score: 0
  },
  {
    firstname: 'Tita',
    lastname: 'Ratsimbazafy',
    score: 0
  },
  {
    firstname: 'Jean Mich',
    lastname: 'Puté',
    score: 0
  },
  {
    firstname: 'Imane',
    lastname: 'Rafi',
    score: 0
  },
  {
    firstname: 'Guillaume',
    lastname: 'Chretien',
    score: 0
  },
  {
    firstname: 'William',
    lastname: 'le Goff',
    score: 0
  },
  {
    firstname: 'Emile',
    lastname: 'Gonnet',
    score: 0
  },
  {
    firstname: 'Audrey',
    lastname: 'Bourelly',
    score: 0
  },
  {
    firstname: 'Emma',
    lastname: 'Cng',
    score: 0
  },
  {
    firstname: 'Guillaume',
    lastname: 'Costes',
    score: 0
  },
  {
    firstname: 'Rayan',
    lastname: 'Djbli',
    score: 0
  },
  {
    firstname: 'Pauline',
    lastname: 'Peruch',
    score: 0
  },
  {
    firstname: 'Florian',
    lastname: 'Smague',
    score: 0
  },
  {
    firstname: 'Clémentine',
    lastname: 'Casarrubios',
    score: 0
  },
  {
    firstname: 'Valentin',
    lastname: 'Gu',
    score: 0
  },
  {
    firstname: 'Grégoire',
    lastname: 'Barbon',
    score: 0
  },
  {
    firstname: 'Clotilde',
    lastname: 'Favier',
    score: 0
  },
  {
    firstname: 'Rémi',
    lastname: 'Gestin',
    score: 0
  },
  {
    firstname: 'Nathan',
    lastname: 'Traineau',
    score: 0
  },
  {
    firstname: 'Solène',
    lastname: 'Issartel',
    score: 0
  },
  {
    firstname: 'Camille',
    lastname: 'Hoareau',
    score: 0
  },
  {
    firstname: 'Alicia',
    lastname: 'D\'orazio',
    score: 0
  },
  {
    firstname: 'Antoine',
    lastname: 'Barbosa',
    score: 0
  },
  {
    firstname: 'Anaïs',
    lastname: 'Boucard',
    score: 0
  },
  {
    firstname: 'Clara',
    lastname: 'Marcou',
    score: 0
  },
  {
    firstname: 'Yassine',
    lastname: 'Elgn',
    score: 0
  },
  {
    firstname: 'Marie',
    lastname: 'Moreau',
    score: 0
  },
  {
    firstname: 'Alessandra',
    lastname: 'de Saint-Leger',
    score: 0
  },
  {
    firstname: 'Oriane',
    lastname: 'Laurent',
    score: 0
  },
  {
    firstname: 'Mehdi',
    lastname: 'Ysl',
    score: 0
  },
  {
    firstname: 'Luc',
    lastname: 'Raymond',
    score: 0
  },
  {
    firstname: 'Eric',
    lastname: 'Cervos Noguer',
    score: 0
  },
  {
    firstname: 'Luka',
    lastname: 'Duffaut',
    score: 0
  },
  {
    firstname: 'Kévin',
    lastname: 'Belbey',
    score: 0
  },
  {
    firstname: 'Julie',
    lastname: 'Nigon',
    score: 0
  },
  {
    firstname: 'Coline',
    lastname: 'Forget',
    score: 0
  },
  {
    firstname: 'Alexine',
    lastname: 'Bel',
    score: 0
  },
  {
    firstname: 'Anna',
    lastname: 'Masante',
    score: 0
  },
  {
    firstname: 'Yvan',
    lastname: 'Pradier',
    score: 0
  },
  {
    firstname: 'Simon',
    lastname: 'Gayet',
    score: 0
  },
  {
    firstname: 'Julie',
    lastname: 'Gaxieu',
    score: 0
  },
  {
    firstname: 'Marie-charlotte',
    lastname: 'Picard',
    score: 0
  },
  {
    firstname: 'Angela',
    lastname: 'Zerbi',
    score: 0
  },
  {
    firstname: 'Claire',
    lastname: 'Hbt',
    score: 0
  },
  {
    firstname: 'William',
    lastname: 'Cain-Rossow',
    score: 0
  },
  {
    firstname: 'Antoine',
    lastname: 'Sanchez',
    score: 0
  },
  {
    firstname: 'Thaïs',
    lastname: 'Savelon',
    score: 0
  },
  {
    firstname: 'Raúl',
    lastname: 'Jurado',
    score: 0
  },
  {
    firstname: 'Nico',
    lastname: 'Mant',
    score: 0
  },
  {
    firstname: 'Thibault',
    lastname: 'Bessiere',
    score: 0
  },
  {
    firstname: 'Jean-François',
    lastname: 'Michel',
    score: 0
  },
  {
    firstname: 'Lucas',
    lastname: 'Beaudrier',
    score: 0
  },
  {
    firstname: 'Clarence',
    lastname: 'Rvl',
    score: 0
  },
  {
    firstname: 'Axel',
    lastname: 'Duval',
    score: 0
  },
  {
    firstname: 'Justin',
    lastname: 'Fornes',
    score: 0
  }
];
