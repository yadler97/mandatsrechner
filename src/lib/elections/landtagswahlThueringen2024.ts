import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Thüringen 2024';
export const date = ['2024-09-01'];
export const lastDate = ['2019-10-27'];
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
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.40, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 21.75, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.21, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 5.19, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.01, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
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
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [29, 22, 21, 8, 5, 5, 0],
      backgroundColor: [
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['SPD'],
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
      label: 'Linke',
      data: [29],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [22],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'CDU',
      data: [21],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'SPD',
      data: [8],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [5],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
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