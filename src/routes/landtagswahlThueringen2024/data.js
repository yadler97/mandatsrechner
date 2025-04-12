import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Thüringen 2024';
export const date = '2024-09-01'

export const data = {
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Linke',
      index: 0,
      data: [31.02, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.40, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 21.75, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.21, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 5.19, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.01, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: PartyColoursDE.BSW,
    },
  ],
};

export const mandateData = {
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2019)',
      data: [29, 22, 21, 8, 5, 5, 0],
      backgroundColor: [
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [31.02, 23.40, 21.75, 8.21, 5.19, 5.01, 0.00],
      backgroundColor: [
        PartyColoursDE.LINKE,
        PartyColoursDE.AFD,
        PartyColoursDE.CDU,
        PartyColoursDE.SPD,
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
      label: 'Linke',
      data: [29],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'AfD',
      data: [22],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'CDU',
      data: [21],
      backgroundColor: PartyColoursDE.CDU,
      hidden: true,
    },
    {
      label: 'SPD',
      data: [8],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      data: [5],
      backgroundColor: PartyColoursDE.GRUENE,
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