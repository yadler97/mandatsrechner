import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColoursAT, PartyColoursTransAT } from "$lib/partyColours";

export const name = 'Gemeinderatswahl Graz 2026';
export const date = ['2026-06-28'];
export const countryCode = 'AT';

export const mandateCount = 48;
export const threshold = 0; 
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ['KPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS', 'KFG'],
  datasets: [
    {
      label: 'KPÖ',
      index: 0,
      data: [28.84, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.KPOE,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 25.91, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.OEVP,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 17.32, 0, 0, 0, 0],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'FPÖ',
      index: 3,
      data: [0, 0, 0, 10.61, 0, 0, 0],
      backgroundColor: PartyColoursAT.FPOE,
    },
    {
      label: 'SPÖ',
      index: 4,
      data: [0, 0, 0, 0, 9.53, 0, 0],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'NEOS',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.42, 0],
      backgroundColor: PartyColoursAT.NEOS,
    },
    {
      label: 'KFG',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#558899',
    },
  ],
};

export const mandateData = {
  labels: ['KPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS', 'KFG'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [15, 13, 9, 5, 4, 2, 0],
      backgroundColor: [
        PartyColoursTransAT.KPOE,
        PartyColoursTransAT.OEVP,
        PartyColoursTransAT.GRUENE,
        PartyColoursTransAT.FPOE,
        PartyColoursTransAT.SPOE,
        PartyColoursTransAT.NEOS,
        'rgba(85, 136, 153, 0.5)',
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [15, 13, 9, 2, 4, 2, 3],
      backgroundColor: [
        PartyColoursAT.KPOE,
        PartyColoursAT.OEVP,
        PartyColoursAT.GRUENE,
        PartyColoursAT.FPOE,
        PartyColoursAT.SPOE,
        PartyColoursAT.NEOS,
        '#558899',
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'KPÖ',
      data: [15],
      backgroundColor: PartyColoursAT.KPOE,
    },
    {
      label: 'ÖVP',
      data: [13],
      backgroundColor: PartyColoursAT.OEVP,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [9],
      backgroundColor: PartyColoursAT.GRUENE,
    },
    {
      label: 'FPÖ',
      data: [2],
      backgroundColor: PartyColoursAT.FPOE,
      hidden: true,
    },
    {
      label: 'SPÖ',
      data: [4],
      backgroundColor: PartyColoursAT.SPOE,
    },
    {
      label: 'NEOS',
      data: [2],
      backgroundColor: PartyColoursAT.NEOS,
      hidden: true,
    },
    {
      label: 'KFG',
      data: [3],
      backgroundColor: '#558899',
      hidden: true,
    },
  ],
};