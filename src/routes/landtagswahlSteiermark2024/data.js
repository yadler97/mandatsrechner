import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Landtagswahl Steiermark 2024';
export const date = '2024-11-24'

export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [36.05, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 23.02, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 17.49, 0, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 12.08, 0, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'KPÖ',
      index: 4,
      data: [0, 0, 0, 0, 5.99, 0],
      backgroundColor: PartyColoursAT.KPOE,
    },
    {
      label: 'NEOS',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.37],
      backgroundColor: PartyColoursAT.NEOS,
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [18, 12, 8, 6, 2, 2],
      backgroundColor: [
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.KPOE,
        PartyColoursTransAT.NEOS,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [36.05, 23.02, 17.49, 12.08, 5.99, 5.37],
      backgroundColor: [
        PartyColoursAT.OEVP,
        PartyColoursAT.SPOE,
        PartyColoursAT.FPOE,
        PartyColoursAT.GRUENE,
        PartyColoursAT.KPOE,
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
      data: [18],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'SPÖ',
      data: [12],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'FPÖ',
      data: [8],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [6],
      backgroundColor: PartyColoursAT.GRUENE,
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [2],
      backgroundColor: PartyColoursAT.KPOE,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [2],
      backgroundColor: PartyColoursAT.NEOS,
      hidden: true,
    },
  ],
};