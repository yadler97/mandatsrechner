import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Landtagswahl Schleswig-Holstein 2027';
export const date = ['2027-04-18'];
export const lastDate = ['2022-05-08'];
export const countryCode = 'DE';

export const mandateCount = 69;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen. Der SSW ist als Partei der dänischen Minderheit von der 5%-Hürde ausgenommen.';

export const data = {
  labels: ['CDU', 'Grüne', 'SPD', 'FDP', 'SSW', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [43.39, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDU'],
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 18.32, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grüne'],
    },
    {
      label: 'SPD',
      index: 2,
      data: [0, 0, 15.96, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SPD'],
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 6.39, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FDP'],
    },
    {
      label: 'SSW',
      index: 4,
      data: [0, 0, 0, 0, 5.72, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SSW'],
      isExemptFromThreshold: true,
    },
    {
      label: 'AfD',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.41, 0, 0],
      backgroundColor: PartyColours[countryCode]['AfD'],
    },
    {
      label: 'Linke',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 1.66, 0],
      backgroundColor: PartyColours[countryCode]['Linke'],
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
  labels: ['CDU', 'Grüne', 'SPD', 'FDP', 'SSW', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate',
      data: [34, 14, 12, 5, 4, 0, 0, 0],
      backgroundColor: [
        PartyColours[countryCode]['CDU'],
        PartyColours[countryCode]['Grüne'],
        PartyColours[countryCode]['SPD'],
        PartyColours[countryCode]['FDP'],
        PartyColours[countryCode]['SSW'],
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
      data: [34],
      backgroundColor: PartyColours[countryCode]['CDU'],
      hidden: false,
    },
    {
      label: 'Grüne',
      data: [14],
      backgroundColor: PartyColours[countryCode]['Grüne'],
      hidden: false,
    },
    {
      label: 'SPD',
      data: [12],
      backgroundColor: PartyColours[countryCode]['SPD'],
      hidden: true,
    },
    {
      label: 'FDP',
      data: [5],
      backgroundColor: PartyColours[countryCode]['FDP'],
      hidden: true,
    },
    {
      label: 'SSW',
      data: [4],
      backgroundColor: PartyColours[countryCode]['SSW'],
      hidden: true,
    },
    {
      label: 'AfD',
      data: [0],
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