import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Tweede Kamerverkiezingen 2025';
export const date = ['2025-10-29'];
export const lastDate = ['2023-11-22'];
export const countryCode = 'NL';

export const mandateCount = 150;
export const threshold = 0;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  partyOrder: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21", "50PLUS"],
  mandateOrder: ["SP", "PvdD", "GL-PvdA", "DENK", "Volt", "D66", "50PLUS", "CU", "NSC", "CDA", "VVD", "BBB", "SGP", "JA21", "PVV", "FvD"],
  parties: {
    "PVV":     { votes: 23.49, mandates: 37, inGovernment: false },
    "GL-PvdA": { votes: 15.75, mandates: 25, inGovernment: false },
    "VVD":     { votes: 15.24, mandates: 24, inGovernment: true },
    "NSC":     { votes: 12.88, mandates: 20, inGovernment: true },
    "D66":     { votes: 6.29,  mandates: 9,  inGovernment: false },
    "BBB":     { votes: 4.65,  mandates: 7,  inGovernment: true },
    "CDA":     { votes: 3.31,  mandates: 5,  inGovernment: false },
    "SP":      { votes: 3.15,  mandates: 5,  inGovernment: false },
    "PvdD":    { votes: 2.25,  mandates: 3,  inGovernment: false },
    "DENK":    { votes: 2.37,  mandates: 3,  inGovernment: false },
    "FvD":     { votes: 2.23,  mandates: 3,  inGovernment: false },
    "SGP":     { votes: 2.08,  mandates: 3,  inGovernment: false },
    "CU":      { votes: 2.04,  mandates: 3,  inGovernment: false },
    "Volt":    { votes: 1.71,  mandates: 2,  inGovernment: false },
    "JA21":    { votes: 0.68,  mandates: 1,  inGovernment: false },
    "50PLUS":  { votes: 0.49,  mandates: 0,  inGovernment: false }
  }
};