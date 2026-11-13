import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Thüringen 2024';
export const date = ['2024-09-01'];
export const lastDate = ['2019-10-27'];
export const countryCode = 'DE';

export const mandateCount = 88;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'FDP', 'CDU', 'AfD'],
  parties: {
    'Linke': { votes: 31.02, mandates: 29, inGovernment: true },
    'AfD':   { votes: 23.40, mandates: 22, inGovernment: false },
    'CDU':   { votes: 21.75, mandates: 21, inGovernment: false },
    'SPD':   { votes: 8.21,  mandates: 8,  inGovernment: true },
    'Grüne': { votes: 5.19,  mandates: 5,  inGovernment: true },
    'FDP':   { votes: 5.01,  mandates: 5,  inGovernment: false },
    'BSW':   { votes: 0.00,  mandates: 0,  inGovernment: false }
  }
};