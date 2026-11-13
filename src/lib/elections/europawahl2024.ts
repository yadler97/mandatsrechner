import { ApportionmentMethods } from '$lib/apportionmentMethods';

export const name = 'Europawahl 2024';
export const date = ['2024-06-06', '2024-06-09'];
export const lastDate = ['2019-05-23', '2019-05-26'];

export const data = [
  {
    countryName: 'Österreich',
    countryCode: 'AT',
    mandateCount: 20,
    threshold: 4,
    apportionmentMethod: ApportionmentMethods.DHONDT,
    partyOrder: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    mandateOrder: ['SPÖ', 'Grüne', 'NEOS', 'ÖVP', 'FPÖ'],
    parties: {
      'ÖVP':   { votes: 34.55, mandates: 7 },
      'SPÖ':   { votes: 23.89, mandates: 5 },
      'FPÖ':   { votes: 17.20, mandates: 3 },
      'Grüne': { votes: 14.08, mandates: 3 },
      'NEOS':  { votes: 8.44,  mandates: 1 }
    }
  },
  {
    countryName: 'Deutschland',
    countryCode: 'DE',
    mandateCount: 96,
    threshold: 0,
    apportionmentMethod: ApportionmentMethods.SAINTE_LAGUE,
    partyOrder: ['CDU/CSU', 'Grüne', 'SPD', 'AfD', 'Linke', 'FDP', 'PARTEI', 'FW', 'Tierschutz', 'ÖDP', 'Familie', 'Volt', 'PIRATEN', 'BSW', 'PDF'],
    mandateOrder: ['BSW', 'Linke', 'PARTEI', 'SPD', 'Grüne', 'Tierschutz', 'PIRATEN', 'Volt', 'PDF', 'FDP', 'ÖDP', 'FW', 'CDU', 'CSU', 'Familie', 'AfD'],
    parties: {
      'CDU':        { votes: 22.56, mandates: 23, label: 'CDU/CSU' },
      'CSU':        { votes: 6.30,  mandates: 6,  label: 'CDU/CSU' },
      'Grüne':      { votes: 20.52, mandates: 21 },
      'SPD':        { votes: 15.83, mandates: 16 },
      'AfD':        { votes: 10.98, mandates: 11 },
      'Linke':      { votes: 5.50,  mandates: 5 },
      'FDP':        { votes: 5.42,  mandates: 5 },
      'PARTEI':     { votes: 2.40,  mandates: 2 },
      'FW':         { votes: 2.16,  mandates: 2 },
      'Tierschutz': { votes: 1.45,  mandates: 1 },
      'ÖDP':        { votes: 0.99,  mandates: 1 },
      'Familie':    { votes: 0.73,  mandates: 1 },
      'Volt':       { votes: 0.67,  mandates: 1 },
      'PIRATEN':    { votes: 0.65,  mandates: 1 },
      'BSW':        { votes: 0.00,  mandates: 0 },
      'PDF':        { votes: 0.00,  mandates: 0 }
    }
  }
];