import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Bundestagswahl 2025';
export const date = ['2025-02-23'];
export const lastDate = ['2021-09-26']
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
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 18.90, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'CSU',
      index: 1,
      data: [0, 5.17, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CSU'],
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.75, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 11.46, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 10.34, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.89, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColours[countryCode]['BSW'],
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'CDU', 'CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [206, 152, 45, 118, 91, 83, 39, 0.00],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['CSU'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['BSW'],
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
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'CDU',
      data: [138],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'CSU',
      data: [38],
      backgroundColor: PartyColours[countryCode]['CSU'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [107],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'FDP',
      data: [84],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [75],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: true,
    },
    {
      label: 'BSW',
      data: [0],
      backgroundColor: PartyColours[countryCode]['BSW'],
      hidden: true,
    },
  ],
};