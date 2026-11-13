import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Gemeinderatswahl Graz 2026';
export const date = ['2026-06-28'];
export const lastDate = ['2021-09-26'];
export const countryCode = 'AT';

export const mandateCount = 48;
export const threshold = 0; 
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ['KPÖ', 'ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS', 'KFG'],
  mandateOrder: ['KPÖ', 'SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'KFG', 'FPÖ'],
  parties: {
    'KPÖ':   { votes: 28.84, mandates: 15, inGovernment: true },
    'ÖVP':   { votes: 25.91, mandates: 13, inGovernment: false },
    'Grüne': { votes: 17.32, mandates: 9,  inGovernment: true },
    'FPÖ':   { votes: 10.61, mandates: 2,  inGovernment: false },
    'SPÖ':   { votes: 9.53,  mandates: 4,  inGovernment: true },
    'NEOS':  { votes: 5.42,  mandates: 2,  inGovernment: false },
    'KFG':   { votes: 0,     mandates: 3,  inGovernment: false, colorKey: 'rgb(85, 136, 153)' }
  }
};