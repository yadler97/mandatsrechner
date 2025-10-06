import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Brandenburg 2024';
export const date = ['2024-09-22'];

export const data = {
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [26.18, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.51, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 15.57, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 10.78, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'Linke',
      index: 4,
      data: [0, 0, 0, 0, 10.72, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'BVB/FW',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.05, 0, 0],
      backgroundColor: PartyColoursDE.FW,
    },
    {
      label: 'FDP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 4.08, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColoursDE.BSW,
    },
  ],
};

export const mandateData = {
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [25, 23, 15, 10, 10, 5, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.FW,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [26.18, 23.51, 15.57, 10.78, 10.72, 5.05, 4.08, 0.00],
      backgroundColor: [
        PartyColoursDE.SPD,
        PartyColoursDE.AFD,
        PartyColoursDE.CDU,
        PartyColoursDE.GRUENE,
        PartyColoursDE.LINKE,
        PartyColoursDE.FW,
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
      data: [25],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'AfD',
      data: [23],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'Linke',
      data: [10],
      backgroundColor: PartyColoursDE.LINKE,
      hidden: true,
    },
    {
      label: 'BVB/FW',
      data: [5],
      backgroundColor: PartyColoursDE.FW,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
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