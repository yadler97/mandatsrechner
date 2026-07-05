import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Gemeinderatswahl St. Pölten 2026';
export const date = ['2026-01-25'];
export const countryCode = 'AT';

export const mandateCount = 42;
export const threshold = 0; 
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS', 'KPÖ'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [56.02, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 22.74, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 8.92, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 8.01, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 3.19, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
    },
    {
      label: 'KPÖ',
      index: 5,
      data: [0, 0, 0, 0, 0, 1.11],
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS', 'KPÖ'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [25, 10, 3, 3, 1, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'].trans,
        PartyColours[countryCode]['ÖVP'].trans,
        PartyColours[countryCode]['FPÖ'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['NEOS'].trans,
        PartyColours[countryCode]['KPÖ'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [25, 10, 3, 3, 1, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'].normal,
        PartyColours[countryCode]['ÖVP'].normal,
        PartyColours[countryCode]['FPÖ'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['NEOS'].normal,
        PartyColours[countryCode]['KPÖ'].normal,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPÖ',
      data: [25],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'ÖVP',
      data: [10],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [3],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [3],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [1],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
      hidden: true,
    },
  ],
};