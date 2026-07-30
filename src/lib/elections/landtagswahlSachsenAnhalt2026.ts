import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Sachsen-Anhalt 2026';
export const date = ['2026-09-06'];
export const lastDate = ['2021-06-06'];
export const countryCode = 'DE';

export const mandateCount = 83;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [37.12, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 20.82, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.99, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.41, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'FDP',
      index: 4,
      data: [0, 0, 0, 0, 6.42, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'Grüne',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.94, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.13, 0],
      backgroundColor: PartyColours[countryCode]['FW'],
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'],
    },
  ],
};

export const mandateData = {
  labels: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [40, 23, 12, 9, 7, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['FW'],
        PartyColours[countryCode]['BSW'],
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'CDU',
      data: [40],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: true,
    },
    {
      label: 'SPD',
      data: [9],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'FDP',
      data: [7],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [6],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FW'],
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