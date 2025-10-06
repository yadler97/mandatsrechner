import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Baden-Württemberg 2026';
export const date = ['2026-03-08'];

export const data = {
  labels: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Grüne',
      index: 0,
      data: [32.64, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 24.05, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'SPD',
      index: 2,
      data: [0, 0, 11.02, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 10.46, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.74, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.57, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.01, 0],
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
  labels: ['Grüne', 'CDU', 'SPD', 'FDP', 'AfD', 'Linke', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [58, 42, 19, 18, 17, 0, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.FW,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [58, 42, 19, 18, 17, 0, 0, 0],
      backgroundColor: [
        PartyColoursDE.GRUENE,
        PartyColoursDE.CDU,
        PartyColoursDE.SPD,
        PartyColoursDE.FDP,
        PartyColoursDE.AFD,
        PartyColoursDE.LINKE,
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
      label: 'Grüne',
      data: [58],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'CDU',
      data: [42],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'SPD',
      data: [19],
      backgroundColor: PartyColoursDE.SPD,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [18],
      backgroundColor: PartyColoursDE.FDP,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'FW',
      data: [0],
      backgroundColor: PartyColoursDE.FW,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [0],
      backgroundColor: PartyColoursDE.LINKE,
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