import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Mecklenburg-Vorpommern 2026';
export const date = ['2026-09-20'];
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
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 16.72, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 13.30, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.94, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 6.30, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.80, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'AfD', 'CDU', 'Linke', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2023)',
      data: [34, 14, 12, 9, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [34, 14, 12, 9, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['Grüne'].normal,
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
      data: [34],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'AfD',
      data: [14],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [12],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [9],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'Grüne',
      data: [5],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [5],
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