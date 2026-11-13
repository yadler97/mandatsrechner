import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Folketingsvalg i Danmark 2026';
export const date = ['2026-03-24'];
export const lastDate = ['2022-11-01'];
export const countryCode = 'DK';

export const mandateCount = 179;
export const threshold = 2;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  partyOrder: ["A", "V", "M", "F", "Æ", "I", "C", "Ø", "B", "Å", "O", "H", "Grönland", "Färöer"],
  mandateOrder: ["Ø", "Å", "F", "A", "B", "M", "V", "C", "I", "O", "Æ", "H", "Grönland", "Färöer", "D"],
  parties: {
    "A": { votes: 27.54, mandates: 50, inGovernment: true },
    "V": { votes: 13.31, mandates: 23, inGovernment: true },
    "M": { votes: 9.27, mandates: 16, inGovernment: true },
    "F": { votes: 8.29, mandates: 15, inGovernment: false },
    "Æ": { votes: 8.08, mandates: 14, inGovernment: false },
    "I": { votes: 7.87, mandates: 14, inGovernment: false },
    "C": { votes: 5.51, mandates: 10, inGovernment: false },
    "Ø": { votes: 5.16, mandates: 9, inGovernment: false },
    "B": { votes: 3.79, mandates: 7, inGovernment: false },
    "Å": { votes: 3.33, mandates: 6, inGovernment: false },
    "O": { votes: 2.63, mandates: 5, inGovernment: false },
    "H": { votes: 0, mandates: 0, inGovernment: false },
    "Grönland": { votes: 0, mandates: 2, reservedSeats: 2, inGovernment: false },
    "Färöer": { votes: 0, mandates: 2, reservedSeats: 2, inGovernment: false },
    "D": { historicalMandates: 6, inGovernment: false }
  }
};