import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Landtags- und Gemeinderatswahl Wien 2025';
export const date = ['2025-04-27'];

export const data = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [41.62, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 20.43, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.80, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'NEOS',
      index: 3,
      data: [0, 0, 0, 7.47, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.NEOS,
    },
    {
      label: 'FPÖ',
      index: 4,
      data: [0, 0, 0, 0, 7.11, 0, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'HC',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.27, 0, 0],
      backgroundColor: PartyColoursAT.THC,
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.06, 0],
      backgroundColor: PartyColoursAT.KPOE,
    },
    {
      label: 'SÖZ',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.20],
      backgroundColor: PartyColoursAT.SOEZ,
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  datasets: [
    {
      label: 'Mandate (2020)',
      data: [46, 22, 16, 8, 8, 0, 0, 0],
      backgroundColor: [
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.NEOS,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.THC,
        PartyColoursTransAT.KPOE,
        PartyColoursTransAT.SOEZ,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [41.62, 20.43, 14.80, 7.47, 7.11, 3.27, 2.06, 1.20],
      backgroundColor: [
        PartyColoursAT.SPOE,
        PartyColoursAT.OEVP,
        PartyColoursAT.GRUENE,
        PartyColoursAT.NEOS,
        PartyColoursAT.FPOE,
        PartyColoursAT.THC,
        PartyColoursAT.KPOE,
        PartyColoursAT.SOEZ,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPÖ',
      data: [46],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'ÖVP',
      data: [22],
      backgroundColor: PartyColoursAT.OEVP,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [16],
      backgroundColor: PartyColoursAT.GRUENE,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [8],
      backgroundColor: PartyColoursAT.NEOS,
    },
    {
      label: 'FPÖ',
      data: [8],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'HC',
      data: [0],
      backgroundColor: PartyColoursAT.THC,
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColoursAT.KPOE,
      hidden: true,
    },
    {
      label: 'SÖZ',
      data: [0],
      backgroundColor: PartyColoursAT.SOEZ,
      hidden: true,
    },
  ],
};