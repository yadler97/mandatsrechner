import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Sachsen 2024';
export const date = ['2024-09-01'];
export const lastDate = ['2019-09-01'];
export const countryCode = 'DE';

export const mandateCount = 120;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';
export const baseMandateRule = 2;

export const data = {
  partyOrder: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'FW', 'CDU', 'AfD'],
  parties: {
    CDU:   { votes: 31.11, mandates: 45, inGovernment: true },
    AfD:   { votes: 27.50, mandates: 38, inGovernment: false },
    Linke: { votes: 10.36, mandates: 14, inGovernment: false },
    Grüne: { votes: 8.63,  mandates: 12, inGovernment: true },
    SPD:   { votes: 7.72,  mandates: 10, inGovernment: true },
    FDP:   { votes: 4.50,  mandates: 0,  inGovernment: false },
    FW:    { votes: 3.36,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};