import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Bürgerschaftswahl Hamburg 2025';
export const date = ['2025-03-02'];
export const lastDate = ['2020-02-23']
export const countryCode = 'DE';

export const mandateCount = 121;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [39.23, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 24.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 11.17, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.08, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 5.30, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.97, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'Volt',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 1.29, 0],
      backgroundColor: PartyColours[countryCode]['Volt'],
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColours[countryCode]['BSW'],
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [54, 33, 15, 13, 7, 1, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['Volt'],
        PartyColours[countryCode]['BSW'],
      ],
    }
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPD',
      data: [54],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [33],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [7],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'Volt',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Volt'],
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