import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Brandenburg 2024';
export const date = ['2024-09-22'];
export const lastDate = ['2019-09-01'];
export const countryCode = 'DE';

export const mandateCount = 88;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';
export const baseMandateRule = 1;

export const data = {
  partyOrder: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'BVB/FW', 'CDU', 'AfD'],
  parties: {
    SPD:      { votes: 26.18, mandates: 25, inGovernment: true },
    AfD:      { votes: 23.51, mandates: 23, inGovernment: false },
    CDU:      { votes: 15.57, mandates: 15, inGovernment: true },
    Grüne:    { votes: 10.78, mandates: 10, inGovernment: true },
    Linke:    { votes: 10.72, mandates: 10, inGovernment: false },
    'BVB/FW': { votes: 5.05,  mandates: 5,  inGovernment: false, colourKey: 'FW' },
    FDP:      { votes: 4.08,  mandates: 0,  inGovernment: false },
    BSW:      { votes: 0,     mandates: 0,  inGovernment: false },
  }
};