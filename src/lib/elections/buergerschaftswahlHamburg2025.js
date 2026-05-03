import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Bürgerschaftswahl Hamburg 2025';
export const date = ['2025-03-02'];
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
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 24.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 11.17, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.08, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 5.30, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.97, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'Volt',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 1.29, 0],
      backgroundColor: PartyColours[countryCode]['Volt'].normal,
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
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [54, 33, 15, 13, 7, 1, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['Volt'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [54, 33, 15, 13, 7, 1, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['Volt'].normal,
        PartyColours[countryCode]['BSW'].normal,
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
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      data: [33],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [7],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
      hidden: true,
    },
    {
      label: 'Volt',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Volt'].normal,
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