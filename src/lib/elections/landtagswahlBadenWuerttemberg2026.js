import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Baden-Württemberg 2026';
export const date = ['2026-03-08'];
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
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 24.05, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'SPD',
      index: 2,
      data: [0, 0, 11.02, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 10.46, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.74, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.57, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.01, 0],
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
  labels: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [58, 42, 19, 18, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['FW'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [58, 42, 19, 18, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['Linke'].normal,
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
      label: 'Grüne',
      data: [58],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'CDU',
      data: [42],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'SPD',
      data: [19],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [18],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
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