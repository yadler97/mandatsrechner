import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Sachsen 2024';
export const date = '2024-09-01'

export const data = {
  labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [31.11, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 27.50, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.36, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 8.63, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'SPD',
      index: 4,
      data: [0, 0, 0, 0, 7.72, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.50, 0, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.36, 0],
      backgroundColor: PartyColoursDE.FW,
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
  labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [45, 38, 14, 12, 10, 0, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.FW,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [31.11, 27.50, 10.36, 8.63, 7.72, 4.50, 3.36, 0.00],
      backgroundColor: [
        PartyColoursDE.CDU,
        PartyColoursDE.AFD,
        PartyColoursDE.LINKE,
        PartyColoursDE.GRUENE,
        PartyColoursDE.SPD,
        PartyColoursDE.FDP,
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
      data: [45],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'AfD',
      data: [38],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [14],
      backgroundColor: PartyColoursDE.LINKE,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [12],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'SPD',
      data: [10],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColoursDE.FDP,
      hidden: true,
    },
    {
      label: 'BVB/FW',
      data: [5],
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