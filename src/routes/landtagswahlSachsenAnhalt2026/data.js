import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Sachsen-Anhalt 2026';
export const date = ['2026-09-06'];

export const data = {
  labels: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [37.12, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 20.82, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.99, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.41, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'FDP',
      index: 4,
      data: [0, 0, 0, 0, 6.42, 0, 0, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'Grüne',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.94, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.13, 0],
      backgroundColor: PartyColoursDE.FW,
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.BSW,
    },
  ],
};

export const mandateData = {
  labels: ['CDU', 'AfD', 'Linke', 'SPD', 'FDP', 'Grüne', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [40, 23, 12, 9, 7, 6, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.FW,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [40, 23, 12, 9, 7, 6, 0, 0],
      backgroundColor: [
        PartyColoursDE.CDU,
        PartyColoursDE.AFD,
        PartyColoursDE.LINKE,
        PartyColoursDE.SPD,
        PartyColoursDE.FDP,
        PartyColoursDE.GRUENE,
        PartyColoursDE.FW,
        PartyColoursDE.BSW,
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'CDU',
      data: [40],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColoursDE.LINKE,
      hidden: true,
    },
    {
      label: 'SPD',
      data: [9],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'FDP',
      data: [7],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'Grüne',
      data: [6],
      backgroundColor: PartyColoursDE.GRUENE,
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
      backgroundColor: PartyColoursDE.FW,
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