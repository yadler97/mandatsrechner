import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Landtagswahl Vorarlberg 2024';
export const date = ['2024-10-13'];

export const data = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [43.53, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 18.89, 0, 0, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 13.93, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'SPÖ',
      index: 3,
      data: [0, 0, 0, 9.46, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.51],
      backgroundColor: PartyColoursAT.NEOS,
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [17, 7, 5, 4, 3],
      backgroundColor: [
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.NEOS,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [43.53, 18.89, 13.93, 9.46, 8.51],
      backgroundColor: [
        PartyColoursAT.OEVP,
        PartyColoursAT.GRUENE,
        PartyColoursAT.FPOE,
        PartyColoursAT.SPOE,
        PartyColoursAT.NEOS,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'ÖVP',
      data: [17],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'Grüne',
      data: [7],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'FPÖ',
      data: [5],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'SPÖ',
      data: [4],
      backgroundColor: PartyColoursAT.SPOE,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [3],
      backgroundColor: PartyColoursAT.NEOS,
      hidden: true,
    },
  ],
};