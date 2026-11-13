import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtags- und Gemeinderatswahl Wien 2025';
export const date = ['2025-04-27'];
export const lastDate = ['2020-10-11'];
export const countryCode = 'AT';

export const mandateCount = 100;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.DHONDT;
export const note = 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.';

export const data = {
  partyOrder: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'KPÖ', 'SÖZ'],
  mandateOrder: ['KPÖ', 'SÖZ', 'SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ', 'HC'],
  parties: {
    SPÖ:   { votes: 41.62, mandates: 46, inGovernment: true },
    ÖVP:   { votes: 20.43, mandates: 22, inGovernment: false },
    Grüne: { votes: 14.80, mandates: 16, inGovernment: false },
    NEOS:  { votes: 7.47,  mandates: 8,  inGovernment: true },
    FPÖ:   { votes: 7.11,  mandates: 8,  inGovernment: false },
    HC:    { votes: 3.27,  mandates: 0,  inGovernment: false },
    KPÖ:   { votes: 2.06,  mandates: 0,  inGovernment: false },
    SÖZ:   { votes: 1.20,  mandates: 0,  inGovernment: false },
  }
};