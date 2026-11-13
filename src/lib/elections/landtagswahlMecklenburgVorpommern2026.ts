import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Mecklenburg-Vorpommern 2026';
export const date = ['2026-09-20'];
export const lastDate = ['2021-09-26'];
export const countryCode = 'DE';

export const mandateCount = 71;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['SPD', 'AfD', 'CDU', 'Linke', 'Grüne', 'FDP', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'CDU', 'AfD'],
  parties: {
    SPD:   { votes: 39.59, mandates: 34, inGovernment: true },
    AfD:   { votes: 16.72, mandates: 14, inGovernment: false },
    CDU:   { votes: 13.30, mandates: 12, inGovernment: false },
    Linke: { votes: 9.94,  mandates: 9,  inGovernment: true },
    Grüne: { votes: 6.30,  mandates: 5,  inGovernment: false },
    FDP:   { votes: 5.80,  mandates: 5,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};