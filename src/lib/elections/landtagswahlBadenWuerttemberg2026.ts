import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Baden-Württemberg 2026';
export const date = ['2026-03-08'];
export const lastDate = ['2021-03-14'];
export const countryCode = 'DE';

export const mandateCount = 120;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Grüne',
      index: 0,
      data: [32.64, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 24.05, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'SPD',
      index: 2,
      data: [0, 0, 11.02, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 10.46, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.74, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.57, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.01, 0],
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
  labels: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [58, 42, 19, 18, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['Linke'],
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
      label: 'Grüne',
      data: [58],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'CDU',
      data: [42],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'SPD',
      data: [19],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [18],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FW'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Linke'],
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