import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

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
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 25.91, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 17.32, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FPÖ',
      index: 3,
      data: [0, 0, 0, 10.61, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
    },
    {
      label: 'SPÖ',
      index: 4,
      data: [0, 0, 0, 0, 9.53, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'NEOS',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.42, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
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
        PartyColours[countryCode]['KPÖ'].trans,
        PartyColours[countryCode]['ÖVP'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FPÖ'].trans,
        PartyColours[countryCode]['SPÖ'].trans,
        PartyColours[countryCode]['NEOS'].trans,
        'rgba(85, 136, 153, 0.5)',
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [15, 13, 9, 2, 4, 2, 3],
      backgroundColor: [
        PartyColours[countryCode]['KPÖ'].normal,
        PartyColours[countryCode]['ÖVP'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['FPÖ'].normal,
        PartyColours[countryCode]['SPÖ'].normal,
        PartyColours[countryCode]['NEOS'].normal,
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
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
    },
    {
      label: 'ÖVP',
      data: [13],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [9],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FPÖ',
      data: [2],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
      hidden: true,
    },
    {
      label: 'SPÖ',
      data: [4],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'NEOS',
      data: [2],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
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