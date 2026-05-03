import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtags- und Gemeinderatswahl Wien 2025';
export const date = ['2025-04-27'];
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
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 20.43, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.80, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'NEOS',
      index: 3,
      data: [0, 0, 0, 7.47, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
    },
    {
      label: 'FPÖ',
      index: 4,
      data: [0, 0, 0, 0, 7.11, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
    },
    {
      label: 'HC',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.27, 0, 0],
      backgroundColor: PartyColours[countryCode]['HC'].normal,
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.06, 0],
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
    },
    {
      label: 'SÖZ',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.20],
      backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  datasets: [
    {
      label: 'Mandate (2020)',
      data: [46, 22, 16, 8, 8, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'].trans,
        PartyColours[countryCode]['ÖVP'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['NEOS'].trans,
        PartyColours[countryCode]['FPÖ'].trans,
        PartyColours[countryCode]['HC'].trans,
        PartyColours[countryCode]['KPÖ'].trans,
        PartyColours[countryCode]['SÖZ'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [46, 22, 16, 8, 8, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPÖ'].normal,
        PartyColours[countryCode]['ÖVP'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['NEOS'].normal,
        PartyColours[countryCode]['FPÖ'].normal,
        PartyColours[countryCode]['HC'].normal,
        PartyColours[countryCode]['KPÖ'].normal,
        PartyColours[countryCode]['SÖZ'].normal,
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
      backgroundColor: PartyColours[countryCode]['SPÖ'].normal,
    },
    {
      label: 'ÖVP',
      data: [22],
      backgroundColor: PartyColours[countryCode]['ÖVP'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [16],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
      hidden: true,
    },
    {
      label: 'NEOS',
      data: [8],
      backgroundColor: PartyColours[countryCode]['NEOS'].normal,
    },
    {
      label: 'FPÖ',
      data: [8],
      backgroundColor: PartyColours[countryCode]['FPÖ'].normal,
      hidden: true,
    },
    {
      label: 'HC',
      data: [0],
      backgroundColor: PartyColours[countryCode]['HC'].normal,
      hidden: true,
    },
    {
      label: 'KPÖ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['KPÖ'].normal,
      hidden: true,
    },
    {
      label: 'SÖZ',
      data: [0],
      backgroundColor: PartyColours[countryCode]['SÖZ'].normal,
      hidden: true,
    },
  ],
};