import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Bürgerschaftswahl Hamburg 2025';
export const date = '2025-03-02'

export const data = {
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [39.23, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 24.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 11.17, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.08, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 5.30, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.97, 0, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'Volt',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 1.29, 0],
      backgroundColor: PartyColoursDE.VOLT,
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
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [54, 33, 15, 13, 7, 1, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.VOLT,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [39.23, 24.16, 11.17, 9.08, 5.30, 4.97, 1.29, 0.00],
      backgroundColor: [
        PartyColoursDE.SPD,
        PartyColoursDE.GRUENE,
        PartyColoursDE.CDU,
        PartyColoursDE.LINKE,
        PartyColoursDE.AFD,
        PartyColoursDE.FDP,
        PartyColoursDE.VOLT,
        PartyColoursDE.BSW,
      ],
    }
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'SPD',
      data: [54],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      data: [33],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'CDU',
      data: [15],
      backgroundColor: PartyColoursDE.CDU,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [12],
      backgroundColor: PartyColoursDE.LINKE,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [7],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [0],
      backgroundColor: PartyColoursDE.FDP,
      hidden: true,
    },
    {
      label: 'Volt',
      data: [0],
      backgroundColor: PartyColoursDE.VOLT,
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