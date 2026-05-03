import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Rheinland-Pfalz 2026';
export const date = ['2026-03-22'];
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
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: "CDU",
      index: 1,
      data: [0, 27.67, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: "Grüne",
      index: 2,
      data: [0, 0, 9.30, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: "AfD",
      index: 3,
      data: [0, 0, 0, 8.28, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: "FDP",
      index: 4,
      data: [0, 0, 0, 0, 5.52, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: "FW",
      index: 5,
      data: [0, 0, 0, 0, 0, 5.36, 0, 0],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
    },
    {
      label: "Linke",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.49, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: "BSW",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'].normal,
    }
  ]
};

export const mandateData = {
  labels: ['SPD', 'CDU', 'Grüne', 'AfD', 'FDP', 'FW', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [39, 31, 10, 9, 6, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['FW'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [39, 31, 10, 9, 6, 6, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['FW'].normal,
        PartyColours[countryCode]['Linke'].normal,
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
      data: [39],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'CDU',
      data: [31],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'AfD',
      data: [9],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [6],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'FW',
      data: [6],
      backgroundColor: PartyColours[countryCode]['FW'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
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