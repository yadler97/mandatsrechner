import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Saarland 2027';
export const date = ['2027-04-18'];
export const lastDate = ['2022-03-27'];
export const countryCode = 'DE';

export const mandateCount = 51;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ['SPD', 'CDU', 'AfD', 'Grüne', 'FDP', 'Linke', 'Tierschutz', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'Tierschutz', 'FDP', 'CDU', 'AfD'],
  parties: {
    SPD:        { votes: 43.50, mandates: 29, inGovernment: true },
    CDU:        { votes: 28.55, mandates: 19, inGovernment: false },
    AfD:        { votes: 5.68,  mandates: 3,  inGovernment: false },
    Grüne:      { votes: 4.99,  mandates: 0,  inGovernment: false },
    FDP:        { votes: 4.78,  mandates: 0,  inGovernment: false },
    Linke:      { votes: 2.58,  mandates: 0,  inGovernment: false },
    Tierschutz: { votes: 2.30,  mandates: 0,  inGovernment: false },
    BSW:        { votes: 0,     mandates: 0,  inGovernment: false },
  }
};