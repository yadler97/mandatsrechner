import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Landtagswahl Burgenland 2025';
export const date = '2025-01-19'

export const data = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [49.94, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 30.58, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 9.79, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 6.72, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 1.71],
      backgroundColor: PartyColoursAT.NEOS,
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'Mandate (2020)',
      data: [19, 11, 4, 2, 0],
      backgroundColor: [
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.NEOS,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [49.94, 30.58, 9.79, 6.72, 1.71],
      backgroundColor: [
        PartyColoursAT.SPOE,
        PartyColoursAT.OEVP,
        PartyColoursAT.FPOE,
        PartyColoursAT.GRUENE,
        PartyColoursAT.NEOS,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPÖ',
      data: [19],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'ÖVP',
      data: [11],
      backgroundColor: PartyColoursAT.OEVP,
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [4],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [2],
      backgroundColor: PartyColoursAT.GRUENE,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [0],
      backgroundColor: PartyColoursAT.NEOS,
      hidden: true,
    },
  ],
};