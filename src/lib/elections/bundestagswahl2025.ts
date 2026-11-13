import { ApportionmentMethods } from "$lib/apportionmentMethods";

export const name = 'Bundestagswahl 2025';
export const date = ['2025-02-23'];
export const lastDate = ['2021-09-26']
export const countryCode = 'DE';

export const mandateCount = 630;
export const threshold = 5;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
export const baseMandateRule = 3;
export const note = 'Der SSW ist als Partei der dänischen Minderheit von der 5%-Hürde ausgenommen.';

export const data = {
	partyOrder: ['SPD', 'CDU/CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW', 'SSW'],
	mandateOrder: ['BSW', 'Linke', 'SPD', 'Grüne', 'SSW', 'FDP', 'CDU', 'CSU', 'AfD'],
	parties: {
		SPD:   { votes: 25.74, mandates: 206, inGovernment: true },
		CDU:   { votes: 18.90, mandates: 152, inGovernment: false, label: 'CDU/CSU' },
		CSU:   { votes: 5.17,  mandates: 45,  inGovernment: false, label: 'CDU/CSU' },
		Grüne: { votes: 14.75, mandates: 118, inGovernment: true },
		FDP:   { votes: 11.46, mandates: 91,  inGovernment: true },
		AfD:   { votes: 10.34, mandates: 83,  inGovernment: false },
		Linke: { votes: 4.89,  mandates: 39,  inGovernment: false },
		BSW:   { votes: 0,     mandates: 0,   inGovernment: false },
		SSW:   { votes: 0.12,  mandates: 1,   inGovernment: false, isExemptFromThreshold: true },
	}
};
