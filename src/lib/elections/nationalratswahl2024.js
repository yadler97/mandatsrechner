import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Nationalratswahl 2024';
export const date = ['2024-09-29'];
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
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 21.18, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 16.17, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 13.90, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.10, 0, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
    },
    {
      label: 'BIER',
      index: 5,
      data: [0, 0, 0, 0, 0, 0.10, 0],
      backgroundColor: PartyColours[countryCode]['BIER'].normal,
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.69],
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
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
        PartyColours[countryCode]['ÖVP'].trans,
        PartyColours[countryCode]['SPÖ'].trans,
        PartyColours[countryCode]['FPÖ'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['NEOS'].trans,
        PartyColours[countryCode]['BIER'].trans,
        PartyColours[countryCode]['KPÖ'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [71, 40, 31, 26, 15, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'].normal,
        PartyColours[countryCode]['SPÖ'].normal,
        PartyColours[countryCode]['FPÖ'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['NEOS'].normal,
        PartyColours[countryCode]['BIER'].normal,
        PartyColours[countryCode]['KPÖ'].normal,
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
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'SPÖ',
      data: [40],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [31],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [26],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'NEOS',
      data: [15],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
      hidden: true,
    },
    {
      label: 'BIER',
      data: [0],
      backgroundColor: PartyColours[countryCode]['BIER'].normal,
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