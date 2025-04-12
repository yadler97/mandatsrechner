import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Europawahl 2024';
export const date = '2024-06-09'

export const data = {
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
};

export const mandateData = {
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
};

export const majorityData = {
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
};