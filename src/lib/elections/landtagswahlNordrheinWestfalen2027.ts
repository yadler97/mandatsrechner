import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Nordrhein-Westfalen 2027';
export const date = ['2027-04-25'];
export const lastDate = ['2022-05-15'];
export const countryCode = 'DE';

export const mandateCount = 181;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  labels: ['CDU', 'SPD', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [35.71, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'SPD',
      index: 1,
      data: [0, 26.66, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 18.19, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 5.86, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 5.44, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 2.05, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BSW'],
    },
  ],
};

export const mandateData = {
  labels: ['CDU', 'SPD', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [76, 56, 39, 12, 12, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['AfD'],
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
      label: 'CDU',
      data: [76],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'SPD',
      data: [56],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [39],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'FDP',
      data: [12],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [12],
      backgroundColor: PartyColours[countryCode]['AfD'],
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