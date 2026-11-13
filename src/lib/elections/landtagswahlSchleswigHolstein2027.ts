import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Landtagswahl Schleswig-Holstein 2027';
export const date = ['2027-04-18'];
export const lastDate = ['2022-05-08'];
export const countryCode = 'DE';

export const mandateCount = 69;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const note = 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen. Der SSW ist als Partei der dänischen Minderheit von der 5%-Hürde ausgenommen.';

export const data = {
  partyOrder: ['CDU', 'Grüne', 'SPD', 'FDP', 'SSW', 'AfD', 'Linke', 'BSW'],
  mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'SSW', 'FDP', 'CDU', 'AfD'],
  parties: {
    CDU:   { votes: 43.39, mandates: 34, inGovernment: true },
    Grüne: { votes: 18.32, mandates: 14, inGovernment: true },
    SPD:   { votes: 15.96, mandates: 12, inGovernment: false },
    FDP:   { votes: 6.39,  mandates: 5,  inGovernment: false },
    SSW:   { votes: 5.72,  mandates: 4,  inGovernment: false, isExemptFromThreshold: true },
    AfD:   { votes: 4.41,  mandates: 0,  inGovernment: false },
    Linke: { votes: 1.66,  mandates: 0,  inGovernment: false },
    BSW:   { votes: 0,     mandates: 0,  inGovernment: false },
  }
}
