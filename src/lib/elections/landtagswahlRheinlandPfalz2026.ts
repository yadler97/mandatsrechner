import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Rheinland-Pfalz 2026';
export const date = ['2026-03-22'];
export const lastDate = ['2021-03-14'];
export const countryCode = 'DE';

export const mandateCount = 101;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ["SPD", "CDU", "Grüne", "AfD", "FDP", "FW", "Linke", "BSW"],
  datasets: [
    {
      label: "SPD",
      index: 0,
      data: [35.71, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: "CDU",
      index: 1,
      data: [0, 27.67, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: "Grüne",
      index: 2,
      data: [0, 0, 9.30, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: "AfD",
      index: 3,
      data: [0, 0, 0, 8.28, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: "FDP",
      index: 4,
      data: [0, 0, 0, 0, 5.52, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: "FW",
      index: 5,
      data: [0, 0, 0, 0, 0, 5.36, 0, 0],
      backgroundColor: PartyColours[countryCode]['FW'],
    },
    {
      label: "Linke",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.49, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: "BSW",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'],
    }
  ]
};

export const mandateData = {
  labels: ['SPD', 'CDU', 'Grüne', 'AfD', 'FDP', 'FW', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [39, 31, 10, 9, 6, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['FW'],
        PartyColours[countryCode]['Linke'],
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
      data: [39],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'CDU',
      data: [31],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'AfD',
      data: [9],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [6],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: false,
    },
    {
      label: 'FW',
      data: [6],
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