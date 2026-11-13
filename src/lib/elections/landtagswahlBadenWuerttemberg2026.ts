import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Baden-Württemberg 2026';
export const date = ['2026-03-08'];
export const lastDate = ['2021-03-14'];
export const countryCode = 'DE';

export const mandateCount = 120;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'FW', 'CDU', 'AfD'],
  parties: {
    Grüne: { votes: 32.64, mandates: 58, inGovernment: true },
    CDU:   { votes: 24.05, mandates: 42, inGovernment: true },
    SPD:   { votes: 11.02, mandates: 19, inGovernment: false },
    FDP:   { votes: 10.46, mandates: 18, inGovernment: false },
    AfD:   { votes: 9.74,  mandates: 17, inGovernment: false },
    Linke: { votes: 3.57,  mandates: 0,  inGovernment: false },
    FW:    { votes: 3.01,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};