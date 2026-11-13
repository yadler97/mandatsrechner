import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Sachsen-Anhalt 2026';
export const date = ['2026-09-06'];
export const lastDate = ['2021-06-06'];
export const countryCode = 'DE';

export const mandateCount = 83;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'FW', 'CDU', 'AfD'],
  parties: {
    CDU:   { votes: 37.12, mandates: 40, inGovernment: true },
    AfD:   { votes: 20.82, mandates: 23, inGovernment: false },
    Linke: { votes: 10.99, mandates: 12, inGovernment: false },
    SPD:   { votes: 8.41,  mandates: 9,  inGovernment: true },
    FDP:   { votes: 6.42,  mandates: 7,  inGovernment: true },
    Grüne: { votes: 5.94,  mandates: 6,  inGovernment: false },
    FW:    { votes: 3.13,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};