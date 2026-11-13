import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Abgeordnetenhauswahl Berlin 2026';
export const date = ['2026-09-20'];
export const lastDate = ['2023-02-12'];
export const countryCode = 'DE';

export const mandateCount = 130;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.HARE_NIEMEYER;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.';

export const data = {
  partyOrder: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'Tierschutz', 'FDP', 'CDU', 'AfD'],
  parties: {
    CDU:        { votes: 28.23, mandates: 52, inGovernment: true },
    SPD:        { votes: 18.39, mandates: 34, inGovernment: true },
    Grüne:      { votes: 18.39, mandates: 34, inGovernment: false },
    Linke:      { votes: 12.20, mandates: 22, inGovernment: false },
    AfD:        { votes: 9.09,  mandates: 17, inGovernment: false },
    FDP:        { votes: 4.64,  mandates: 0,  inGovernment: false },
    Tierschutz: { votes: 2.39,  mandates: 0,  inGovernment: false },
    BSW:        { votes: 0,     mandates: 0,  inGovernment: false },
  }
};