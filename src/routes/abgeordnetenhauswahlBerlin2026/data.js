import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Abgeordnetenhauswahl Berlin 2026';
export const date = ['2026-09-20'];

export const data = {
  labels: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [28.23, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'SPD',
      index: 1,
      data: [0, 18.39, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 18.39, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 12.20, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.LINKE,
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 9.09, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD,
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.64, 0, 0],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'Tierschutz',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.39, 0],
      backgroundColor: PartyColoursDE.TIERSCHUTZ,
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
  labels: ['CDU', 'SPD', 'Grüne', 'Linke', 'AfD', 'FDP', 'Tierschutz', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2023)',
      data: [52, 34, 34, 22, 17, 0, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.TIERSCHUTZ,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [52, 34, 34, 22, 17, 0, 0, 0],
      backgroundColor: [
        PartyColoursDE.CDU,
        PartyColoursDE.SPD,
        PartyColoursDE.GRUENE,
        PartyColoursDE.LINKE,
        PartyColoursDE.AFD,
        PartyColoursDE.FDP,
        PartyColoursDE.TIERSCHUTZ,
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
      data: [52],
      backgroundColor: PartyColoursDE.CDU,
    },
    {
      label: 'SPD',
      data: [34],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'Grüne',
      data: [34],
      backgroundColor: PartyColoursDE.GRUENE,
      hidden: true,
    },
    {
      label: 'Linke',
      data: [22],
      backgroundColor: PartyColoursDE.LINKE,
      hidden: true,
    },
    {
      label: 'AfD',
      data: [17],
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
      label: 'Tierschutz',
      data: [0],
      backgroundColor: PartyColoursDE.TIERSCHUTZ,
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