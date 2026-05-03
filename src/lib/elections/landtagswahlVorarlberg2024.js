import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Vorarlberg 2024';
export const date = ['2024-10-13'];
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
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 18.89, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 13.93, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
    },
    {
      label: 'SPÖ',
      index: 3,
      data: [0, 0, 0, 9.46, 0],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.51],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [17, 7, 5, 4, 3],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FPÖ'].trans,
        PartyColours[countryCode]['SPÖ'].trans,
        PartyColours[countryCode]['NEOS'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [17, 7, 5, 4, 3],
      backgroundColor: [
        PartyColours[countryCode]['ÖVP'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['FPÖ'].normal,
        PartyColours[countryCode]['SPÖ'].normal,
        PartyColours[countryCode]['NEOS'].normal,
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
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'Grüne',
      data: [7],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FPÖ',
      data: [5],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
      hidden: true,
    },
    {
      label: 'SPÖ',
      data: [4],
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [3],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
      hidden: true,
    },
  ],
};