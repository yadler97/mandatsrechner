import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Nordrhein-Westfalen 2027';
export const date = ['2027-04-25'];
export const lastDate = ['2022-05-15'];
export const countryCode = 'DE';

export const mandateCount = 181;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['CDU', 'SPD', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'CDU', 'AfD'],
  parties: {
    CDU:   { votes: 35.71, mandates: 76, inGovernment: true },
    SPD:   { votes: 26.66, mandates: 56, inGovernment: false },
    Grüne: { votes: 18.19, mandates: 39, inGovernment: true },
    FDP:   { votes: 5.86,  mandates: 12, inGovernment: false },
    AfD:   { votes: 5.44,  mandates: 12, inGovernment: false },
    Linke: { votes: 2.05,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};