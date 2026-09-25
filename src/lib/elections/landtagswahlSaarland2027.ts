import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Saarland 2027';
export const date = ['2027-04-18'];
export const lastDate = ['2022-03-27'];
export const countryCode = 'DE';

export const mandateCount = 51;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ['SPD', 'CDU', 'AfD', 'Grüne', 'FDP', 'Linke', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [43.50, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 28.55, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'AfD',
      index: 2,
      data: [0, 0, 5.68, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 4.99, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'FDP',
      index: 4,
      data: [0, 0, 0, 0, 4.78, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 2.58, 0, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
    },
    {
      label: 'Tierschutz',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.30, 0],
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
  labels: ['SPD', 'CDU', 'AfD', 'Grüne', 'FDP', 'Linke', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [29, 19, 3, 0, 0, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['AfD'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['Linke'],
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
      label: 'SPD',
      data: [29],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: false,
    },
    {
      label: 'CDU',
      data: [19],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [3],
      backgroundColor: PartyColours[countryCode]['AfD'],
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColours[countryCode]['Linke'],
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