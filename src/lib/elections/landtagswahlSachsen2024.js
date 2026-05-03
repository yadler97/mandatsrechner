import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Sachsen 2024';
export const date = ['2024-09-01'];
export const countryCode = 'DE';

export const mandateCount = 120;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';
export const baseMandateRule = 2;

export const data = {
  labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [31.11, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 27.50, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.36, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 8.63, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'SPD',
      index: 4,
      data: [0, 0, 0, 0, 7.72, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.50, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.36, 0],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [45, 38, 14, 12, 10, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['FW'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [45, 38, 14, 12, 10, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['FW'].normal,
        PartyColours[countryCode]['BSW'].normal,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'CDU',
      data: [45],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'AfD',
      data: [38],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [14],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [12],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'SPD',
      data: [10],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
      hidden: true,
    },
    {
      label: 'BSW',
      data: [0],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
      hidden: true,
    },
  ],
};