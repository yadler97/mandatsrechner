import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Mecklenburg-Vorpommern 2026';
export const date = ['2026-09-20'];

export const data = {
  labels: ['SPD', 'AfD', 'CDU', 'Linke', 'GRÜNE', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [39.59, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 16.72, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 13.30, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.94, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'GRÜNE',
      index: 4,
      data: [0, 0, 0, 0, 6.30, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.80, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.BSW,
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'AfD', 'CDU', 'Linke', 'GRÜNE', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2023)',
      data: [34, 14, 12, 9, 5, 5, 0],
      backgroundColor: [
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [34, 14, 12, 9, 5, 5, 0],
      backgroundColor: [
        PartyColoursDE.SPD,
        PartyColoursDE.AFD,
        PartyColoursDE.CDU,
        PartyColoursDE.LINKE,
        PartyColoursDE.GRUENE,
        PartyColoursDE.FDP,
        PartyColoursDE.BSW,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPD',
      data: [34],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'AfD',
      data: [14],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [12],
      backgroundColor: PartyColoursDE.CDU,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [9],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'GRÜNE',
      data: [5],
      backgroundColor: PartyColoursDE.GRUENE,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [5],
      backgroundColor: PartyColoursDE.FDP,
      hidden: true,
    },
    {
      label: 'BSW',
      data: [0],
      backgroundColor: PartyColoursDE.BSW,
      hidden: true,
    },
  ],
};