import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Nationalratswahl 2024';
export const date = ['2024-09-29'];
export const lastDate = ['2019-09-29'];
export const countryCode = 'AT';

export const mandateCount = 183;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [37.46, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 21.18, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 16.17, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 13.90, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.10, 0, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'],
    },
    {
      label: 'BIER',
      index: 5,
      data: [0, 0, 0, 0, 0, 0.10, 0],
      backgroundColor: PartyColours[countryCode]['BIER'],
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.69],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
  datasets: [
    {
      label: 'Mandate',
      data: [71, 40, 31, 26, 15, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'],
        PartyColours[countryCode]['SPÖ'],
        PartyColours[countryCode]['FPÖ'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['NEOS'],
        PartyColours[countryCode]['BIER'],
        PartyColours[countryCode]['KPÖ'],
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
      backgroundColor: PartyColours[countryCode]['ÖVP'],
      hidden: false,
    },
    {
      label: 'SPÖ',
      data: [40],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [31],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [26],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'NEOS',
      data: [15],
      backgroundColor: PartyColours[countryCode]['NEOS'],
      hidden: true,
    },
    {
      label: 'BIER',
      data: [0],
      backgroundColor: PartyColours[countryCode]['BIER'],
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
      hidden: true,
    },
  ],
};