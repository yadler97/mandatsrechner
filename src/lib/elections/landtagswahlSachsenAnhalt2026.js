import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Sachsen-Anhalt 2026';
export const date = ['2026-09-06'];
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
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 20.82, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.99, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.41, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'FDP',
      index: 4,
      data: [0, 0, 0, 0, 6.42, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'Grüne',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.94, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.13, 0],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [40, 23, 12, 9, 7, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FW'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [40, 23, 12, 9, 7, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['Grüne'].normal,
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
      data: [40],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
      hidden: true,
    },
    {
      label: 'SPD',
      data: [9],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'FDP',
      data: [7],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'Grüne',
      data: [6],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
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