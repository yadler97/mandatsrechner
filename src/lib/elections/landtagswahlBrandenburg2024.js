import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Brandenburg 2024';
export const date = ['2024-09-22'];
export const countryCode = 'DE';

export const mandateCount = 88;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';
export const baseMandateRule = 1;

export const data = {
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [26.18, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.51, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 15.57, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 10.78, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'Linke',
      index: 4,
      data: [0, 0, 0, 0, 10.72, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'BVB/FW',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.05, 0, 0],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
    },
    {
      label: 'FDP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 4.08, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
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
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [25, 23, 15, 10, 10, 5, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['FW'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [25, 23, 15, 10, 10, 5, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['FW'].normal,
        PartyColours[countryCode]['FDP'].normal,
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
      data: [25],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'Linke',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
      hidden: true,
    },
    {
      label: 'BVB/FW',
      data: [5],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
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