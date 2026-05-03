import { PartyColours } from "$lib/partyColours";

export const name = 'Europawahl 2024';
export const date = ['2024-06-09'];

export const data = [
  {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'ÖVP',
        index: 0,
        data: [34.55, 0, 0, 0, 0],
        backgroundColor: PartyColours['AT']['ÖVP'].normal,
      },
      {
        label: 'SPÖ',
        index: 1,
        data: [0, 23.89, 0, 0, 0],
        backgroundColor: PartyColours['AT']['SPÖ'].normal,
      },
      {
        label: 'FPÖ',
        index: 2,
        data: [0, 0, 17.20, 0, 0],
        backgroundColor: PartyColours['AT']['FPÖ'].normal,
      },
      {
        label: 'Grüne',
        index: 3,
        data: [0, 0, 0, 14.08, 0],
        backgroundColor: PartyColours['AT']['Grüne'].normal,
      },
      {
        label: 'NEOS',
        index: 4,
        data: [0, 0, 0, 0, 8.44],
        backgroundColor: PartyColours['AT']['NEOS'].normal,
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
        label: 'CDU',
        index: 0,
        data: [22.56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['CDU'].normal,
      },
      {
        label: 'CSU',
        index: 0,
        data: [6.30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['CSU'].normal,
      },
      {
        label: 'Grüne',
        index: 1,
        data: [0, 20.52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Grüne'].normal,
      },
      {
        label: 'SPD',
        index: 2,
        data: [0, 0, 15.83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['SPD'].normal,
      },
      {
        label: 'AfD',
        index: 3,
        data: [0, 0, 0, 10.98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['AfD'].normal,
      },
      {
        label: 'Linke',
        index: 4,
        data: [0, 0, 0, 0, 5.50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Linke'].normal,
      },
      {
        label: 'FDP',
        index: 5,
        data: [0, 0, 0, 0, 0, 5.42, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['FDP'].normal,
      },
      {
        label: 'PARTEI',
        index: 6,
        data: [0, 0, 0, 0, 0, 0, 2.40, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['PARTEI'].normal,
      },
      {
        label: 'FW',
        index: 7,
        data: [0, 0, 0, 0, 0, 0, 0, 2.16, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['FW'].normal,
      },
      {
        label: 'Tierschutz',
        index: 8,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1.45, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Tierschutz'].normal,
      },
      {
        label: 'ÖDP',
        index: 9,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['ÖDP'].normal,
      },
      {
        label: 'Familie',
        index: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73, 0, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Familie'].normal,
      },
      {
        label: 'Volt',
        index: 11,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67, 0, 0, 0],
        backgroundColor: PartyColours['DE']['Volt'].normal,
      },
      {
        label: 'PIRATEN',
        index: 12,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65, 0, 0],
        backgroundColor: PartyColours['DE']['PIRATEN'].normal,
      },
      {
        label: 'BSW',
        index: 13,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00, 0],
        backgroundColor: PartyColours['DE']['BSW'].normal,
      },
      {
        label: 'PDF',
        index: 14,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00],
        backgroundColor: PartyColours['DE']['PDF'].normal,
      },
    ],
  }
];

export const mandateData = [
  {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'Mandate (2019)',
        data: [7, 5, 3, 3, 1],
        backgroundColor: [
          PartyColours['AT']['ÖVP'].trans,
          PartyColours['AT']['SPÖ'].trans,
          PartyColours['AT']['FPÖ'].trans,
          PartyColours['AT']['Grüne'].trans,
          PartyColours['AT']['NEOS'].trans,
        ],
        weight: 0.4,
      },
      {
        label: 'Mandate',
        data: [7, 5, 3, 3, 1],
        backgroundColor: [
          PartyColours['AT']['ÖVP'].normal,
          PartyColours['AT']['SPÖ'].normal,
          PartyColours['AT']['FPÖ'].normal,
          PartyColours['AT']['Grüne'].normal,
          PartyColours['AT']['NEOS'].normal,
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
        label: 'Mandate (2019)',
        data: [23, 6, 21, 16, 11, 5, 5, 2, 2, 1, 1, 1, 1, 1, 0, 0],
        backgroundColor: [
          PartyColours['DE']['CDU'].trans,
          PartyColours['DE']['CSU'].trans,
          PartyColours['DE']['Grüne'].trans,
          PartyColours['DE']['SPD'].trans,
          PartyColours['DE']['AfD'].trans,
          PartyColours['DE']['Linke'].trans,
          PartyColours['DE']['FDP'].trans,
          PartyColours['DE']['PARTEI'].trans,
          PartyColours['DE']['FW'].trans,
          PartyColours['DE']['Tierschutz'].trans,
          PartyColours['DE']['ÖDP'].trans,
          PartyColours['DE']['Familie'].trans,
          PartyColours['DE']['Volt'].trans,
          PartyColours['DE']['PIRATEN'].trans,
          PartyColours['DE']['BSW'].trans,
          PartyColours['DE']['PDF'].trans,
        ],
        weight: 0.4,
      },
      {
        label: 'Mandate',
        data: [23, 6, 21, 16, 11, 5, 5, 2, 2, 1, 1, 1, 1, 1, 0, 0],
        backgroundColor: [
          PartyColours['DE']['CDU'].normal,
          PartyColours['DE']['CSU'].normal,
          PartyColours['DE']['Grüne'].normal,
          PartyColours['DE']['SPD'].normal,
          PartyColours['DE']['AfD'].normal,
          PartyColours['DE']['Linke'].normal,
          PartyColours['DE']['FDP'].normal,
          PartyColours['DE']['PARTEI'].normal,
          PartyColours['DE']['FW'].normal,
          PartyColours['DE']['Tierschutz'].normal,
          PartyColours['DE']['ÖDP'].normal,
          PartyColours['DE']['Familie'].normal,
          PartyColours['DE']['Volt'].normal,
          PartyColours['DE']['PIRATEN'].normal,
          PartyColours['DE']['BSW'].normal,
          PartyColours['DE']['PDF'].normal,
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
        backgroundColor: PartyColours['AT']['ÖVP'].normal,
      },
      {
        label: 'SPÖ',
        data: [5],
        backgroundColor: PartyColours['AT']['SPÖ'].normal,
      },
      {
        label: 'FPÖ',
        data: [3],
        backgroundColor: PartyColours['AT']['FPÖ'].normal,
      },
      {
        label: 'Grüne',
        data: [3],
        backgroundColor: PartyColours['AT']['Grüne'].normal,
      },
      {
        label: 'NEOS',
        data: [1],
        backgroundColor: PartyColours['AT']['NEOS'].normal,
      },
    ],
  },
  {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'CDU',
        data: [23],
        backgroundColor: PartyColours['DE']['CDU'].normal,
      },
      {
        label: 'CSU',
        data: [6],
        backgroundColor: PartyColours['DE']['CSU'].normal,
      },
      {
        label: 'Grüne',
        data: [21],
        backgroundColor: PartyColours['DE']['Grüne'].normal,
      },
      {
        label: 'SPD',
        data: [16],
        backgroundColor: PartyColours['DE']['SPD'].normal,
      },
      {
        label: 'AfD',
        data: [11],
        backgroundColor: PartyColours['DE']['AfD'].normal,
      },
      {
        label: 'Linke',
        data: [5],
        backgroundColor: PartyColours['DE']['Linke'].normal,
      },
      {
        label: 'FDP',
        data: [5],
        backgroundColor: PartyColours['DE']['FDP'].normal,
      },
      {
        label: 'PARTEI',
        data: [2],
        backgroundColor: PartyColours['DE']['PARTEI'].normal,
      },
      {
        label: 'FW',
        data: [2],
        backgroundColor: PartyColours['DE']['FW'].normal,
      },
      {
        label: 'Tierschutz',
        data: [1],
        backgroundColor: PartyColours['DE']['Tierschutz'].normal,
      },
      {
        label: 'ÖDP',
        data: [1],
        backgroundColor: PartyColours['DE']['ÖDP'].normal,
      },
      {
        label: 'Familie',
        data: [1],
        backgroundColor: PartyColours['DE']['Familie'].normal,
      },
      {
        label: 'Volt',
        data: [1],
        backgroundColor: PartyColours['DE']['Volt'].normal,
      },
      {
        label: 'PIRATEN',
        data: [1],
        backgroundColor: PartyColours['DE']['PIRATEN'].normal,
      },
      {
        label: 'BSW',
        data: [0],
        backgroundColor: PartyColours['DE']['BSW'].normal,
      },
      {
        label: 'PDF',
        data: [0],
        backgroundColor: PartyColours['DE']['PDF'].normal,
      },
    ],
  }
];