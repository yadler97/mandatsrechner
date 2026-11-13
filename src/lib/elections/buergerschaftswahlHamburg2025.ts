import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Bürgerschaftswahl Hamburg 2025';
export const date = ['2025-03-02'];
export const lastDate = ['2020-02-23']
export const countryCode = 'DE';

export const mandateCount = 121;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  partyOrder: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'Volt', 'FDP', 'CDU', 'AfD'],
  parties: {
    SPD:   { votes: 39.23, mandates: 54, inGovernment: true },
    Grüne: { votes: 24.16, mandates: 33, inGovernment: true },
    CDU:   { votes: 11.17, mandates: 15, inGovernment: false },
    Linke: { votes: 9.08,  mandates: 13, majorityMandates: 12, inGovernment: false },
    AfD:   { votes: 5.30,  mandates: 7,  inGovernment: false },
    FDP:   { votes: 4.97,  mandates: 1,  majorityMandates: 0,  inGovernment: false },
    Volt:  { votes: 1.29,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
};