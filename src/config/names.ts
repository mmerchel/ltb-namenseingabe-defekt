export type NameCategory = 'boys' | 'girls' | 'neutral' | 'themes';
export type ThemeCategory = 'superhelden' | 'supermario';

export interface ThemeNames {
  [key: string]: string[];
}

export interface NameConfig {
  boys: string[];
  girls: string[];
  neutral: string[];
  themes: {
    [K in ThemeCategory]: string[];
  };
}

export const nameConfig: NameConfig = {
  boys: [
    'Rambo',
    'BockiBomber',
    'LordVadda',
    'Taschenzwerk',
    'Butterbirne',
    'Speckpanzer',
    'Biercules',
    'MettGuyver',
    'Swaglord',
    'Fleckenlarry'
  ],
  girls: [
    'Killerella',
    'Das Weinhorn',
    'Killwittchen',
    'Ballerbraut',
    'Trinkabell',
    'Vodkahontas'
  ],
  neutral: [
    'AffeMitWaffe',
    '500gr Hack',
    'Deine Mudda',
    'Gintronic',
    'Starwurst',
    'Vollkasko'
  ],
  themes: {
    superhelden: [
      'Superman',
      'Batman',
      'WonderWoman',
      'Spiderman',
      'Iron Man',
      'Cpt America',
      'Thor',
      'Hulk',
      'Black Widow',
      'Flash',
      'Aquaman',
      'GreenLantern',
      'BlackPanther',
      'Dr Strange',
      'Wolverine',
      'Daredevil'
    ],
    supermario: [
      'Mario',
      'Luigi',
      'Peach',
      'Bowser',
      'Yoshi',
      'Toad',
      'Donkey Kong',
      'Wario',
      'Waluigi',
      'Daisy',
      'Rosalina',
      'Birdo',
      'Kamek',
      'Shy Guy',
      'Koopa Troopa',
      'Boo'
    ]
  }
};

export const nameSuffixes = [
  'nator',
  'killer',
  'rambo',
  'pew pew',
  'destroyer',
  'master',
  'boss',
  'pro',
  'champion',
  'warrior'
];

export const namePrefixes = [
  'Mega',
  'Ultra',
  'Super',
  'Epic',
  'Legendary',
  'Pro',
  'Master',
  'Elite',
  'Supreme',
  'Ultimate'
];
