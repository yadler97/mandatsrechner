import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtags- und Gemeinderatswahl Wien 2025';
export const date = ['2025-04-27'];
export const lastDate = ['2020-10-11'];
export const countryCode = 'AT';

export const mandateCount = 100;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [41.62, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'],
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 20.43, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.80, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'NEOS',
      index: 3,
      data: [0, 0, 0, 7.47, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'],
    },
    {
      label: 'FPÖ',
      index: 4,
      data: [0, 0, 0, 0, 7.11, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
    },
    {
      label: 'HC',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.27, 0, 0],
      backgroundColor: PartyColours[countryCode]['HC'],
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.06, 0],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
    },
    {
      label: 'SÖZ',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.20],
      backgroundColor: PartyColours[countryCode]['SÖZ'],
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  datasets: [
    {
      label: 'Mandate',
      data: [46, 22, 16, 8, 8, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'],
        PartyColours[countryCode]['ÖVP'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['NEOS'],
        PartyColours[countryCode]['FPÖ'],
        PartyColours[countryCode]['HC'],
        PartyColours[countryCode]['KPÖ'],
        PartyColours[countryCode]['SÖZ'],
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
      backgroundColor: PartyColours[countryCode]['SPÖ'],
      hidden: false,
    },
    {
      label: 'ÖVP',
      data: [22],
      backgroundColor: PartyColours[countryCode]['ÖVP'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [16],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [8],
      backgroundColor: PartyColours[countryCode]['NEOS'],
      hidden: false,
    },
    {
      label: 'FPÖ',
      data: [8],
      backgroundColor: PartyColours[countryCode]['FPÖ'],
      hidden: true,
    },
    {
      label: 'HC',
      data: [0],
      backgroundColor: PartyColours[countryCode]['HC'],
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['KPÖ'],
      hidden: true,
    },
    {
      label: 'SÖZ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['SÖZ'],
      hidden: true,
    },
  ],
};