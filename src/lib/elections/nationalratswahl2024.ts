import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Nationalratswahl 2024';
export const date = ['2024-09-29'];
export const lastDate = ['2019-09-29'];
export const countryCode = 'AT';

export const mandateCount = 183;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'KPÖ', 'BIER'],
  mandateOrder: ['KPÖ', 'SPÖ', 'Grüne', 'BIER', 'NEOS', 'ÖVP', 'FPÖ'],
  parties: {
    ÖVP:   { votes: 37.46, mandates: 71, inGovernment: true },
    SPÖ:   { votes: 21.18, mandates: 40, inGovernment: false },
    FPÖ:   { votes: 16.17, mandates: 31, inGovernment: false },
    Grüne: { votes: 13.90, mandates: 26, inGovernment: true },
    NEOS:  { votes: 8.10,  mandates: 15, inGovernment: false },
    KPÖ:   { votes: 0.69,  mandates: 0,  inGovernment: false },
    BIER:  { votes: 0.10,  mandates: 0,  inGovernment: false },
  }
};