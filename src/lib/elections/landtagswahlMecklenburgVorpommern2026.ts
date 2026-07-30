import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Mecklenburg-Vorpommern 2026';
export const date = ['2026-09-20'];
export const lastDate = ['2021-09-26'];
export const countryCode = 'DE';

export const mandateCount = 71;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['SPD', 'AfD', 'CDU', 'Linke', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [39.59, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 16.72, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 13.30, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.94, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 6.30, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.80, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'],
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'AfD', 'CDU', 'Linke', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [34, 14, 12, 9, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['Grüne'],
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
      data: [34],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [14],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'CDU',
      data: [12],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [9],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [5],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [5],
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