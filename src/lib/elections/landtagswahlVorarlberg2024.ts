import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Vorarlberg 2024';
export const date = ['2024-10-13'];
export const lastDate = ['2019-10-13'];
export const countryCode = 'AT';

export const mandateCount = 36;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [43.53, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 18.89, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 13.93, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
    },
    {
      label: 'SPÖ',
      index: 3,
      data: [0, 0, 0, 9.46, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.51],
      backgroundColor: PartyColours[countryCode]['NEOS'],
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'Mandate',
      data: [17, 7, 5, 4, 3],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['FPÖ'],
        PartyColours[countryCode]['SPÖ'],
        PartyColours[countryCode]['NEOS'],
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'ÖVP',
      data: [17],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [7],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'FPÖ',
      data: [5],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
      hidden: true,
    },
    {
      label: 'SPÖ',
      data: [4],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [3],
      backgroundColor: PartyColours[countryCode]['NEOS'],
      hidden: true,
    },
  ],
};