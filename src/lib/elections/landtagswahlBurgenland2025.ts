import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Burgenland 2025';
export const date = ['2025-01-19'];
export const lastDate = ['2020-01-26'];
export const countryCode = 'AT';

export const mandateCount = 36;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  partyOrder: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  mandateOrder: ['SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ'],
  parties: {
    'SPÖ':   { votes: 49.94, mandates: 19, inGovernment: true },
    'ÖVP':   { votes: 30.58, mandates: 11, inGovernment: false },
    'FPÖ':   { votes: 9.79,  mandates: 4,  inGovernment: false },
    'Grüne': { votes: 6.72,  mandates: 2,  inGovernment: false },
    'NEOS':  { votes: 1.71,  mandates: 0,  inGovernment: false }
  }
};