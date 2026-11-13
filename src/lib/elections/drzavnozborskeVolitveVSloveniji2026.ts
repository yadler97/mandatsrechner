import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Državnozborske volitve v Sloveniji 2026';
export const date = ['2026-03-22'];
export const lastDate = ['2022-04-24'];
export const countryCode = 'SI';

export const mandateCount = 90;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ["GS", "SDS", "NSi + SLS + FOKUS", "SD", "Levica + Vesna", "Demokrati", "Resni.ca", "Pirati", "PVP", "Minderheiten"],
  mandateOrder: ["Levica + Vesna", "SD", "GS", "Pirati", "NSi + SLS + FOKUS", "PVP", "Demokrati", "SDS", "Resni.ca", "Minderheiten"],
  parties: {
    "GS":                { votes: 34.45, mandates: 41, inGovernment: true },
    "SDS":               { votes: 23.48, mandates: 27, inGovernment: false },
    "NSi + SLS + FOKUS": { votes: 6.86,  mandates: 8,  inGovernment: false },
    "SD":                { votes: 6.69,  mandates: 7,  inGovernment: true },
    "Levica + Vesna":    { votes: 4.46,  mandates: 5,  inGovernment: true },
    "Demokrati":         { votes: 0,     mandates: 0,  inGovernment: false },
    "Resni.ca":          { votes: 2.86,  mandates: 0,  inGovernment: false },
    "Pirati":            { votes: 1.63,  mandates: 0,  inGovernment: false },
    "PVP":               { votes: 0,     mandates: 0,  inGovernment: false },
    "Minderheiten":      { votes: 0,     mandates: 2,  inGovernment: false, reservedSeats: 2 }
  }
};