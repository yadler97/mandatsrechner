import { PartyColoursAT, PartyColoursDE, PartyColoursTransAT, PartyColoursTransDE } from "$lib/partyColours";

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
        backgroundColor: PartyColoursAT.OEVP,
      },
      {
        label: 'SPÖ',
        index: 1,
        data: [0, 23.89, 0, 0, 0],
        backgroundColor: PartyColoursAT.SPOE,
      },
      {
        label: 'FPÖ',
        index: 2,
        data: [0, 0, 17.20, 0, 0],
        backgroundColor: PartyColoursAT.FPOE,
      },
      {
        label: 'Grüne',
        index: 3,
        data: [0, 0, 0, 14.08, 0],
        backgroundColor: PartyColoursAT.GRUENE,
      },
      {
        label: 'NEOS',
        index: 4,
        data: [0, 0, 0, 0, 8.44],
        backgroundColor: PartyColoursAT.NEOS,
      },
    ],
  },
  {
    labels: [
      'CDU/CSU', 'Grüne', 'SPD', 'AfD', 'Linke', 'FDP',
      'PARTEI', 'FW', 'TIERSCHUTZ', 'ÖDP', 'FAMILIE',
      'VOLT', 'PIRATEN', 'BSW', 'PDF'
    ],
    datasets: [
      {
        label: 'CDU',
        index: 0,
        data: [22.56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.CDU,
      },
      {
        label: 'CSU',
        index: 0,
        data: [6.30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.CSU,
      },
      {
        label: 'Grüne',
        index: 1,
        data: [0, 20.52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.GRUENE,
      },
      {
        label: 'SPD',
        index: 2,
        data: [0, 0, 15.83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.SPD,
      },
      {
        label: 'AfD',
        index: 3,
        data: [0, 0, 0, 10.98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.AFD,
      },
      {
        label: 'Linke',
        index: 4,
        data: [0, 0, 0, 0, 5.50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.LINKE,
      },
      {
        label: 'FDP',
        index: 5,
        data: [0, 0, 0, 0, 0, 5.42, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.FDP,
      },
      {
        label: 'PARTEI',
        index: 6,
        data: [0, 0, 0, 0, 0, 0, 2.40, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.PARTEI,
      },
      {
        label: 'FW',
        index: 7,
        data: [0, 0, 0, 0, 0, 0, 0, 2.16, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.FW,
      },
      {
        label: 'TIERSCHUTZ',
        index: 8,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1.45, 0, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.TIERSCHUTZ,
      },
      {
        label: 'ÖDP',
        index: 9,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.OEDP,
      },
      {
        label: 'FAMILIE',
        index: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73, 0, 0, 0, 0],
        backgroundColor: PartyColoursDE.FAMILIE,
      },
      {
        label: 'VOLT',
        index: 11,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67, 0, 0, 0],
        backgroundColor: PartyColoursDE.VOLT,
      },
      {
        label: 'PIRATEN',
        index: 12,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65, 0, 0],
        backgroundColor: PartyColoursDE.PIRATEN,
      },
      {
        label: 'BSW',
        index: 13,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00, 0],
        backgroundColor: PartyColoursDE.BSW,
      },
      {
        label: 'PDF',
        index: 14,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.00],
        backgroundColor: PartyColoursDE.PDF,
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
          PartyColoursTransAT.OEVP,
          PartyColoursTransAT.SPOE,
          PartyColoursTransAT.FPOE,
          PartyColoursTransAT.GRUENE,
          PartyColoursTransAT.NEOS,
        ],
        weight: 0.4,
      },
      {
        label: 'Mandate',
        data: [34.55, 23.89, 17.20, 14.08, 8.44],
        backgroundColor: [
          PartyColoursAT.OEVP,
          PartyColoursAT.SPOE,
          PartyColoursAT.FPOE,
          PartyColoursAT.GRUENE,
          PartyColoursAT.NEOS,
        ],
      },
    ],
  },
  {
    labels: [
      'CDU', 'CSU', 'Grüne', 'SPD', 'AfD', 'Linke', 'FDP',
      'PARTEI', 'FW', 'TIERSCHUTZ', 'ÖDP', 'FAMILIE',
      'VOLT', 'PIRATEN', 'BSW', 'PDF'
    ],
    datasets: [
      {
        label: 'Mandate (2019)',
        data: [23, 6, 21, 16, 11, 5, 5, 2, 2, 1, 1, 1, 1, 1, 0, 0],
        backgroundColor: [
          PartyColoursTransDE.CDU,
          PartyColoursTransDE.CSU,
          PartyColoursTransDE.GRUENE,
          PartyColoursTransDE.SPD,
          PartyColoursTransDE.AFD,
          PartyColoursTransDE.LINKE,
          PartyColoursTransDE.FDP,
          PartyColoursTransDE.PARTEI,
          PartyColoursTransDE.FW,
          PartyColoursTransDE.TIERSCHUTZ,
          PartyColoursTransDE.OEDP,
          PartyColoursTransDE.FAMILIE,
          PartyColoursTransDE.VOLT,
          PartyColoursTransDE.PIRATEN,
          PartyColoursTransDE.BSW,
          PartyColoursTransDE.PDF,
        ],
        weight: 0.4,
      },
      {
        label: 'Mandate',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          PartyColoursDE.CDU,
          PartyColoursDE.CSU,
          PartyColoursDE.GRUENE,
          PartyColoursDE.SPD,
          PartyColoursDE.AFD,
          PartyColoursDE.LINKE,
          PartyColoursDE.FDP,
          PartyColoursDE.PARTEI,
          PartyColoursDE.FW,
          PartyColoursDE.TIERSCHUTZ,
          PartyColoursDE.OEDP,
          PartyColoursDE.FAMILIE,
          PartyColoursDE.VOLT,
          PartyColoursDE.PIRATEN,
          PartyColoursDE.BSW,
          PartyColoursDE.PDF,
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
        backgroundColor: PartyColoursAT.OEVP,
      },
      {
        label: 'SPÖ',
        data: [5],
        backgroundColor: PartyColoursAT.SPOE,
      },
      {
        label: 'FPÖ',
        data: [3],
        backgroundColor: PartyColoursAT.FPOE,
      },
      {
        label: 'Grüne',
        data: [3],
        backgroundColor: PartyColoursAT.GRUENE,
      },
      {
        label: 'NEOS',
        data: [1],
        backgroundColor: PartyColoursAT.NEOS,
      },
    ],
  },
  {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'CDU',
        data: [23],
        backgroundColor: PartyColoursDE.CDU,
      },
      {
        label: 'CSU',
        data: [6],
        backgroundColor: PartyColoursDE.CSU,
      },
      {
        label: 'Grüne',
        data: [21],
        backgroundColor: PartyColoursDE.GRUENE,
      },
      {
        label: 'SPD',
        data: [16],
        backgroundColor: PartyColoursDE.SPD,
      },
      {
        label: 'AfD',
        data: [11],
        backgroundColor: PartyColoursDE.AFD,
      },
      {
        label: 'Linke',
        data: [5],
        backgroundColor: PartyColoursDE.LINKE,
      },
      {
        label: 'FDP',
        data: [5],
        backgroundColor: PartyColoursDE.FDP,
      },
      {
        label: 'PARTEI',
        data: [2],
        backgroundColor: PartyColoursDE.PARTEI,
      },
      {
        label: 'FW',
        data: [2],
        backgroundColor: PartyColoursDE.FW,
      },
      {
        label: 'TIERSCHUTZ',
        data: [1],
        backgroundColor: PartyColoursDE.TIERSCHUTZ,
      },
      {
        label: 'ÖDP',
        data: [1],
        backgroundColor: PartyColoursDE.OEDP,
      },
      {
        label: 'FAMILIE',
        data: [1],
        backgroundColor: PartyColoursDE.FAMILIE,
      },
      {
        label: 'VOLT',
        data: [1],
        backgroundColor: PartyColoursDE.VOLT,
      },
      {
        label: 'PIRATEN',
        data: [1],
        backgroundColor: PartyColoursDE.PIRATEN,
      },
      {
        label: 'BSW',
        data: [0],
        backgroundColor: PartyColoursDE.BSW,
      },
      {
        label: 'PDF',
        data: [0],
        backgroundColor: PartyColoursDE.PDF,
      },
    ],
  }
];