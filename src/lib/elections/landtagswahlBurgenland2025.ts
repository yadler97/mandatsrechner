import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Burgenland 2025';
export const date = ['2025-01-19'];
export const lastDate = ['2020-01-26'];
export const countryCode = 'AT';

export const mandateCount = 36;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [49.94, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 30.58, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 9.79, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 6.72, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 1.71],
      backgroundColor: PartyColours[countryCode]['NEOS'],
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'Mandate',
      data: [19, 11, 4, 2, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'],
        PartyColours[countryCode]['ÖVP'],
        PartyColours[countryCode]['FPÖ'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['NEOS'],
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
      backgroundColor: PartyColours[countryCode]['SPÖ'],
      hidden: false,
    },
    {
      label: 'ÖVP',
      data: [11],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
      hidden: true,
    },
    {
      label: 'FPÖ',
      data: [4],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [2],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [0],
      backgroundColor: PartyColours[countryCode]['NEOS'],
      hidden: true,
    },
  ],
};