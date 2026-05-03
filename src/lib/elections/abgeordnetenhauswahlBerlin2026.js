import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Abgeordnetenhauswahl Berlin 2026';
export const date = ['2026-09-20'];
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
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'SPD',
      index: 1,
      data: [0, 18.39, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 18.39, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 12.20, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.09, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.64, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
    },
    {
      label: 'Tierschutz',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.39, 0],
      backgroundColor: PartyColours[countryCode]['Tierschutz'].normal,
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
  labels: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2023)',
      data: [52, 34, 34, 22, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].trans,
        PartyColours[countryCode]['SPD'].trans,
        PartyColours[countryCode]['Grüne'].trans,
        PartyColours[countryCode]['Linke'].trans,
        PartyColours[countryCode]['AfD'].trans,
        PartyColours[countryCode]['FDP'].trans,
        PartyColours[countryCode]['Tierschutz'].trans,
        PartyColours[countryCode]['BSW'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [52, 34, 34, 22, 17, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'].normal,
        PartyColours[countryCode]['SPD'].normal,
        PartyColours[countryCode]['Grüne'].normal,
        PartyColours[countryCode]['Linke'].normal,
        PartyColours[countryCode]['AfD'].normal,
        PartyColours[countryCode]['FDP'].normal,
        PartyColours[countryCode]['Tierschutz'].normal,
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
      data: [52],
      backgroundColor: PartyColours[countryCode]['CDU'].normal,
    },
    {
      label: 'SPD',
      data: [34],
      backgroundColor: PartyColours[countryCode]['SPD'].normal,
    },
    {
      label: 'Grüne',
      data: [34],
      backgroundColor: PartyColours[countryCode]['Grüne'].normal,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [22],
      backgroundColor: PartyColours[countryCode]['Linke'].normal,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
      backgroundColor: PartyColours[countryCode]['AfD'].normal,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'].normal,
      hidden: true,
    },
    {
      label: 'Tierschutz',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Tierschutz'].normal,
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