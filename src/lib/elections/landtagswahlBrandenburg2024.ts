import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Brandenburg 2024';
export const date = ['2024-09-22'];
export const lastDate = ['2019-09-01'];
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
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.51, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 15.57, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 10.78, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'Linke',
      index: 4,
      data: [0, 0, 0, 0, 10.72, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'BVB/FW',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.05, 0, 0],
      backgroundColor: PartyColours[countryCode]['FW'],
    },
    {
      label: 'FDP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 4.08, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
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
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [25, 23, 15, 10, 10, 5, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['FW'],
        PartyColours[countryCode]['FDP'],
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
      data: [25],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'Linke',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: true,
    },
    {
      label: 'BVB/FW',
      data: [5],
      backgroundColor: PartyColours[countryCode]['FW'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'],
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