import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Thüringen 2024';
export const date = ['2024-09-01'];
export const countryCode = 'DE';

export const mandateCount = 88;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Linke',
      index: 0,
      data: [31.02, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.40, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 21.75, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.21, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 5.19, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.01, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
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
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [29, 22, 21, 8, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [29, 22, 21, 8, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['SPD'].normal,
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
      label: 'Linke',
      data: [29],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'AfD',
      data: [22],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [21],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
      hidden: true,
    },
    {
      label: 'SPD',
      data: [8],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      data: [5],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
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