import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Gemeinderatswahl St. Pölten 2026';
export const date = ['2026-01-25'];
export const lastDate = ['2021-01-24'];
export const countryCode = 'AT';

export const mandateCount = 42;
export const threshold = 0; 
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS', 'KPÖ'],
  mandateOrder: ['KPÖ', 'SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ'],
  parties: {
    'SPÖ':   { votes: 56.02, mandates: 25, inGovernment: true },
    'ÖVP':   { votes: 22.74, mandates: 10, inGovernment: false },
    'FPÖ':   { votes: 8.92,  mandates: 3,  inGovernment: false },
    'Grüne': { votes: 8.01,  mandates: 3,  inGovernment: false },
    'NEOS':  { votes: 3.19,  mandates: 1,  inGovernment: false },
    'KPÖ':   { votes: 1.11,  mandates: 0,  inGovernment: false }
  }
};