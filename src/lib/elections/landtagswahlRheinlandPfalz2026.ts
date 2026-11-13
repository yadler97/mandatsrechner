import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Rheinland-Pfalz 2026';
export const date = ['2026-03-22'];
export const lastDate = ['2021-03-14'];
export const countryCode = 'DE';

export const mandateCount = 101;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['SPD', 'CDU', 'Grüne', 'AfD', 'FDP', 'FW', 'Linke', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'FW', 'CDU', 'AfD'],
  parties: {
    SPD:   { votes: 35.71, mandates: 39, inGovernment: true },
    CDU:   { votes: 27.67, mandates: 31, inGovernment: false },
    Grüne: { votes: 9.30,  mandates: 10, inGovernment: true },
    AfD:   { votes: 8.28,  mandates: 9,  inGovernment: false },
    FDP:   { votes: 5.52,  mandates: 6,  inGovernment: true },
    FW:    { votes: 5.36,  mandates: 6,  inGovernment: false },
    Linke: { votes: 2.49,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};