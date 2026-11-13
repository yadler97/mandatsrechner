import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Riksdagsvalet i Sverige 2026';
export const date = ['2026-09-13'];
export const lastDate = ['2022-09-11'];
export const countryCode = 'SE';

export const mandateCount = 349;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  partyOrder: ['S', 'SD', 'M', 'V', 'C', 'KD', 'MP', 'L'],
  mandateOrder: ['V', 'S', 'MP', 'C', 'L', 'M', 'KD', 'SD'],
  parties: {
    'S':  { votes: 30.33, mandates: 107, inGovernment: false },
    'SD': { votes: 20.54, mandates: 73,  inGovernment: false },
    'M':  { votes: 19.10, mandates: 68,  inGovernment: true },
    'V':  { votes: 6.75,  mandates: 24,  inGovernment: false },
    'C':  { votes: 6.71,  mandates: 24,  inGovernment: false },
    'KD': { votes: 5.34,  mandates: 19,  inGovernment: true },
    'MP': { votes: 5.08,  mandates: 18,  inGovernment: false },
    'L':  { votes: 4.61,  mandates: 16,  inGovernment: true },
  }
};