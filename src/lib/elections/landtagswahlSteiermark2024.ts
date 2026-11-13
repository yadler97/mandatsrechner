import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Steiermark 2024';
export const date = ['2024-11-24'];
export const lastDate = ['2019-11-24'];
export const countryCode = 'AT';

export const mandateCount = 48;
export const threshold = 0;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  partyOrder: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  mandateOrder: ['KPÖ', 'SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ'],
  parties: {
    'ÖVP':   { votes: 36.05, mandates: 18, inGovernment: true },
    'SPÖ':   { votes: 23.02, mandates: 12, inGovernment: true },
    'FPÖ':   { votes: 17.49, mandates: 8,  inGovernment: false },
    'Grüne': { votes: 12.08, mandates: 6,  inGovernment: false },
    'KPÖ':   { votes: 5.99,  mandates: 2,  inGovernment: false },
    'NEOS':  { votes: 5.37,  mandates: 2,  inGovernment: false }
  }
};