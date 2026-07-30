import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Steiermark 2024';
export const date = ['2024-11-24'];
export const lastDate = ['2019-11-24'];
export const countryCode = 'AT';

export const mandateCount = 48;
export const threshold = 0;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [36.05, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 23.02, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 17.49, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 12.08, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'KPÖ',
      index: 4,
      data: [0, 0, 0, 0, 5.99, 0],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
    },
    {
      label: 'NEOS',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.37],
      backgroundColor: PartyColours[countryCode]['NEOS'],
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  datasets: [
    {
      label: 'Mandate',
      data: [18, 12, 8, 6, 2, 2],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'],
        PartyColours[countryCode]['SPÖ'],
        PartyColours[countryCode]['FPÖ'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['KPÖ'],
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
      data: [18],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
      hidden: false,
    },
    {
      label: 'SPÖ',
      data: [12],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
      hidden: false,
    },
    {
      label: 'FPÖ',
      data: [8],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [6],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [2],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [2],
      backgroundColor: PartyColours[countryCode]['NEOS'],
      hidden: true,
    },
  ],
};