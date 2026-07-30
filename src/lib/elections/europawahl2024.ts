import { PartyColours } from "$lib/partyColours";

export const name = 'Europawahl 2024';
export const date = ['2024-06-06', '2024-06-09'];
export const lastDate = ['2019-05-23', '2019-05-26'];

export const data = [
  {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'ÖVP',
        index: 0,
        data: [34.55, 0, 0, 0, 0],
        backgroundColor: PartyColours['AT']['ÖVP'],
      },
      {
        label: 'SPÖ',
        index: 1,
        data: [0, 23.89, 0, 0, 0],
        backgroundColor: PartyColours['AT']['SPÖ'],
      },
      {
        label: 'FPÖ',
        index: 2,
        data: [0, 0, 17.20, 0, 0],
        backgroundColor: PartyColours['AT']['FPÖ'],
      },
      {
        label: 'Grüne',
        index: 3,
        data: [0, 0, 0, 14.08, 0],
        backgroundColor: PartyColours['AT']['Grüne'],
      },
      {
        label: 'NEOS',
        index: 4,
        data: [0, 0, 0, 0, 8.44],
        backgroundColor: PartyColours['AT']['NEOS'],
      },
    ],
  },
  {
    labels: [
      'CDU/CSU', 'Grüne', 'SPD', 'AfD', 'Linke', 'FDP',
      'PARTEI', 'FW', 'Tierschutz', 'ÖDP', 'Familie',
      'Volt', 'PIRATEN', 'BSW', 'PDF'
    ],
    datasets: [
      {
        label: 'CDU',
        index: 0,
        data: [22.56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['CDU'],
      },
      {
        label: 'CSU',
        index: 0,
        data: [6.30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['CSU'],
      },
      {
        label: 'Grüne',
        index: 1,
        data: [0, 20.52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Grüne'],
      },
      {
        label: 'SPD',
        index: 2,
        data: [0, 0, 15.83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['SPD'],
      },
      {
        label: 'AfD',
        index: 3,
        data: [0, 0, 0, 10.98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['AfD'],
      },
      {
        label: 'Linke',
        index: 4,
        data: [0, 0, 0, 0, 5.50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Linke'],
      },
      {
        label: 'FDP',
        index: 5,
        data: [0, 0, 0, 0, 0, 5.42, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['FDP'],
      },
      {
        label: 'PARTEI',
        index: 6,
        data: [0, 0, 0, 0, 0, 0, 2.40, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['PARTEI'],
      },
      {
        label: 'FW',
        index: 7,
        data: [0, 0, 0, 0, 0, 0, 0, 2.16, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['FW'],
      },
      {
        label: 'Tierschutz',
        index: 8,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1.45, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Tierschutz'],
      },
      {
        label: 'ÖDP',
        index: 9,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['ÖDP'],
      },
      {
        label: 'Familie',
        index: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Familie'],
      },
      {
        label: 'Volt',
        index: 11,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Volt'],
      },
      {
        label: 'PIRATEN',
        index: 12,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65, 0, 0],
        backgroundColor: PartyColours['DE']['PIRATEN'],
      },
      {
        label: 'BSW',
        index: 13,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00, 0],
        backgroundColor: PartyColours['DE']['BSW'],
      },
      {
        label: 'PDF',
        index: 14,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00],
        backgroundColor: PartyColours['DE']['PDF'],
      },
    ],
  }
];

export const mandateData = [
  {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'Mandate',
        data: [7, 5, 3, 3, 1],
        backgroundColor: [
          PartyColours['AT']['ÖVP'],
          PartyColours['AT']['SPÖ'],
          PartyColours['AT']['FPÖ'],
          PartyColours['AT']['Grüne'],
          PartyColours['AT']['NEOS'],
        ],
      },
    ],
  },
  {
    labels: [
      'CDU', 'CSU', 'Grüne', 'SPD', 'AfD', 'Linke', 'FDP',
      'PARTEI', 'FW', 'Tierschutz', 'ÖDP', 'Familie',
      'Volt', 'PIRATEN', 'BSW', 'PDF'
    ],
    datasets: [
      {
        label: 'Mandate',
        data: [23, 6, 21, 16, 11, 5, 5, 2, 2, 1, 1, 1, 1, 1, 0, 0],
        backgroundColor: [
          PartyColours['DE']['CDU'],
          PartyColours['DE']['CSU'],
          PartyColours['DE']['Grüne'],
          PartyColours['DE']['SPD'],
          PartyColours['DE']['AfD'],
          PartyColours['DE']['Linke'],
          PartyColours['DE']['FDP'],
          PartyColours['DE']['PARTEI'],
          PartyColours['DE']['FW'],
          PartyColours['DE']['Tierschutz'],
          PartyColours['DE']['ÖDP'],
          PartyColours['DE']['Familie'],
          PartyColours['DE']['Volt'],
          PartyColours['DE']['PIRATEN'],
          PartyColours['DE']['BSW'],
          PartyColours['DE']['PDF'],
        ],
      },
    ],
  }
];

export const majorityData = [
  {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'ÖVP',
        data: [8],
        backgroundColor: PartyColours['AT']['ÖVP'],
      },
      {
        label: 'SPÖ',
        data: [5],
        backgroundColor: PartyColours['AT']['SPÖ'],
      },
      {
        label: 'FPÖ',
        data: [3],
        backgroundColor: PartyColours['AT']['FPÖ'],
      },
      {
        label: 'Grüne',
        data: [3],
        backgroundColor: PartyColours['AT']['Grüne'],
      },
      {
        label: 'NEOS',
        data: [1],
        backgroundColor: PartyColours['AT']['NEOS'],
      },
    ],
  },
  {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'CDU',
        data: [23],
        backgroundColor: PartyColours['DE']['CDU'],
      },
      {
        label: 'CSU',
        data: [6],
        backgroundColor: PartyColours['DE']['CSU'],
      },
      {
        label: 'Grüne',
        data: [21],
        backgroundColor: PartyColours['DE']['Grüne'],
      },
      {
        label: 'SPD',
        data: [16],
        backgroundColor: PartyColours['DE']['SPD'],
      },
      {
        label: 'AfD',
        data: [11],
        backgroundColor: PartyColours['DE']['AfD'],
      },
      {
        label: 'Linke',
        data: [5],
        backgroundColor: PartyColours['DE']['Linke'],
      },
      {
        label: 'FDP',
        data: [5],
        backgroundColor: PartyColours['DE']['FDP'],
      },
      {
        label: 'PARTEI',
        data: [2],
        backgroundColor: PartyColours['DE']['PARTEI'],
      },
      {
        label: 'FW',
        data: [2],
        backgroundColor: PartyColours['DE']['FW'],
      },
      {
        label: 'Tierschutz',
        data: [1],
        backgroundColor: PartyColours['DE']['Tierschutz'],
      },
      {
        label: 'ÖDP',
        data: [1],
        backgroundColor: PartyColours['DE']['ÖDP'],
      },
      {
        label: 'Familie',
        data: [1],
        backgroundColor: PartyColours['DE']['Familie'],
      },
      {
        label: 'Volt',
        data: [1],
        backgroundColor: PartyColours['DE']['Volt'],
      },
      {
        label: 'PIRATEN',
        data: [1],
        backgroundColor: PartyColours['DE']['PIRATEN'],
      },
      {
        label: 'BSW',
        data: [0],
        backgroundColor: PartyColours['DE']['BSW'],
      },
      {
        label: 'PDF',
        data: [0],
        backgroundColor: PartyColours['DE']['PDF'],
      },
    ],
  }
];