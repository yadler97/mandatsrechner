import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Bundestagswahl 2025';
export const date = ['2025-02-23'];
export const countryCode = 'DE';

export const mandateCount = 630;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const baseMandateRule = 3;

export const data = {
  labels: ['SPD', 'CDU/CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [25.74, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 18.90, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'CSU',
      index: 1,
      data: [0, 5.17, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CSU'].normal,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.75, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 11.46, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 10.34, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.89, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'CDU', 'CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [206, 152, 45, 118, 91, 83, 39, 0.00],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['CSU'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [206, 152, 45, 118, 91, 83, 39, 0.00],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['CSU'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['BSW'].normal,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPD',
      data: [188],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'CDU',
      data: [138],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
      hidden: true,
    },
    {
      label: 'CSU',
      data: [38],
      backgroundColor: PartyColours[countryCode]['CSU'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [107],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FDP',
      data: [84],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'AfD',
      data: [75],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
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