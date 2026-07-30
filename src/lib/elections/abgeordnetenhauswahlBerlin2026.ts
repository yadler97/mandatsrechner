import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Abgeordnetenhauswahl Berlin 2026';
export const date = ['2026-09-20'];
export const lastDate = ['2023-02-12'];
export const countryCode = 'DE';

export const mandateCount = 130;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [28.23, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'SPD',
      index: 1,
      data: [0, 18.39, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 18.39, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 12.20, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.09, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.64, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'Tierschutz',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.39, 0],
      backgroundColor: PartyColours[countryCode]['Tierschutz'],
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
  labels: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [52, 34, 34, 22, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['Linke'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['Tierschutz'],
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
      data: [52],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'SPD',
      data: [34],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [34],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [22],
      backgroundColor: PartyColours[countryCode]['Linke'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'Tierschutz',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Tierschutz'],
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