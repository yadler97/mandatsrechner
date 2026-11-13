import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Vorarlberg 2024';
export const date = ['2024-10-13'];
export const lastDate = ['2019-10-13'];
export const countryCode = 'AT';

export const mandateCount = 36;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  partyOrder: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  mandateOrder: ['SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ'],
  parties: {
    'ÖVP':   { votes: 43.53, mandates: 17, inGovernment: true },
    'Grüne': { votes: 18.89, mandates: 7,  inGovernment: true },
    'FPÖ':   { votes: 13.93, mandates: 5,  inGovernment: false },
    'SPÖ':   { votes: 9.46,  mandates: 4,  inGovernment: false },
    'NEOS':  { votes: 8.51,  mandates: 3,  inGovernment: false }
  }
};