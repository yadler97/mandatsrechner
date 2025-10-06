import { PartyColoursDE, PartyColoursTransDE } from "$lib/partyColours";

export const name = 'Landtagswahl Rheinland-Pfalz 2026';
export const date = ['2026-03-22'];

export const data = {
  labels: ["SPD", "CDU", "Grüne", "AfD", "FDP", "FW", "Linke", "BSW"],
  datasets: [
    {
      label: "SPD",
      index: 0,
      data: [35.71, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.SPD
    },
    {
      label: "CDU",
      index: 1,
      data: [0, 27.67, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.CDU
    },
    {
      label: "Grüne",
      index: 2,
      data: [0, 0, 9.30, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.GRUENE
    },
    {
      label: "AfD",
      index: 3,
      data: [0, 0, 0, 8.28, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.AFD
    },
    {
      label: "FDP",
      index: 4,
      data: [0, 0, 0, 0, 5.52, 0, 0, 0],
      backgroundColor: PartyColoursDE.FDP
    },
    {
      label: "FW",
      index: 5,
      data: [0, 0, 0, 0, 0, 5.36, 0, 0],
      backgroundColor: PartyColoursDE.FW
    },
    {
      label: "Linke",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.49, 0],
      backgroundColor: PartyColoursDE.LINKE
    },
    {
      label: "BSW",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDE.BSW
    }
  ]
};

export const mandateData = {
  labels: ['SPD', 'CDU', 'Grüne', 'AfD', 'FDP', 'FW', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'Mandate (2021)',
      data: [39, 31, 10, 9, 6, 6, 0, 0],
      backgroundColor: [
        PartyColoursTransDE.SPD,
        PartyColoursTransDE.CDU,
        PartyColoursTransDE.GRUENE,
        PartyColoursTransDE.AFD,
        PartyColoursTransDE.FDP,
        PartyColoursTransDE.FW,
        PartyColoursTransDE.LINKE,
        PartyColoursTransDE.BSW,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [39, 31, 10, 9, 6, 6, 0, 0],
      backgroundColor: [
        PartyColoursDE.SPD,
        PartyColoursDE.CDU,
        PartyColoursDE.GRUENE,
        PartyColoursDE.AFD,
        PartyColoursDE.FDP,
        PartyColoursDE.FW,
        PartyColoursDE.LINKE,
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
      data: [39],
      backgroundColor: PartyColoursDE.SPD,
    },
    {
      label: 'CDU',
      data: [31],
      backgroundColor: PartyColoursDE.CDU,
      hidden: true,
    },
    {
      label: 'Grüne',
      data: [10],
      backgroundColor: PartyColoursDE.GRUENE,
    },
    {
      label: 'AfD',
      data: [9],
      backgroundColor: PartyColoursDE.AFD,
      hidden: true,
    },
    {
      label: 'FDP',
      data: [6],
      backgroundColor: PartyColoursDE.FDP,
    },
    {
      label: 'FW',
      data: [6],
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