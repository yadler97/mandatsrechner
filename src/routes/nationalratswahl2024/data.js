import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Nationalratswahl 2024';
export const date = ['2024-09-29'];

export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [37.46, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 21.18, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 16.17, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 13.90, 0, 0, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.10, 0, 0],
      backgroundColor: PartyColoursAT.NEOS,
    },
    {
      label: 'BIER',
      index: 5,
      data: [0, 0, 0, 0, 0, 0.10, 0],
      backgroundColor: PartyColoursAT.BIER,
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.69],
      backgroundColor: PartyColoursAT.KPOE,
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [71, 40, 31, 26, 15, 0, 0],
      backgroundColor: [
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.NEOS,
        PartyColoursTransAT.BIER,
        PartyColoursTransAT.KPOE,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [37.46, 21.18, 16.17, 13.90, 8.10, 0.10, 0.69],
      backgroundColor: [
        PartyColoursAT.OEVP,
        PartyColoursAT.SPOE,
        PartyColoursAT.FPOE,
        PartyColoursAT.GRUENE,
        PartyColoursAT.NEOS,
        PartyColoursAT.BIER,
        PartyColoursAT.KPOE,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'ÖVP',
      data: [71],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'SPÖ',
      data: [40],
      backgroundColor: PartyColoursAT.SPOE,
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [31],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [26],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'NEOS',
      data: [15],
      backgroundColor: PartyColoursAT.NEOS,
      hidden: true,
    },
    {
      label: 'BIER',
      data: [0],
      backgroundColor: PartyColoursAT.BIER,
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColoursAT.KPOE,
      hidden: true,
    },
  ],
};