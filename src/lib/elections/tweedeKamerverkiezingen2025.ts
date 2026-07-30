import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Tweede Kamerverkiezingen 2025';
export const date = ['2025-10-29'];
export const lastDate = ['2023-11-22'];
export const countryCode = 'NL';

export const mandateCount = 150;
export const threshold = 0;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21"],
  datasets: [
    {
      label: "PVV",
      index: 0,
      data: [23.49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['PVV'],
    },
    {
      label: "GL-PvdA",
      index: 1,
      data: [0, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['GL-PvdA'],
    },
    {
      label: "VVD",
      index: 2,
      data: [0, 0, 15.24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['VVD'],
    },
    {
      label: "NSC",
      index: 3,
      data: [0, 0, 0, 12.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NSC'],
    },
    {
      label: "D66",
      index: 4,
      data: [0, 0, 0, 0, 6.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['D66'],
    },
    {
      label: "BBB",
      index: 5,
      data: [0, 0, 0, 0, 0, 4.65, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BBB'],
    },
    {
      label: "CDA",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.31, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDA'],
    },
    {
      label: "SP",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 3.15, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SP'],
    },
    {
      label: "PvdD",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2.25, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['PvdD'],
    },
    {
      label: "DENK",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2.37, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['DENK'],
    },
    {
      label: "FvD",
      index: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.23, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FvD'],
    },
    {
      label: "SGP",
      index: 11,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.08, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SGP'],
    },
    {
      label: "CU",
      index: 12,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.04, 0, 0],
      backgroundColor: PartyColours[countryCode]['CU'],
    },
    {
      label: "Volt",
      index: 13,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.71, 0],
      backgroundColor: PartyColours[countryCode]['Volt'],
    },
    {
      label: "JA21",
      index: 14,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.68],
      backgroundColor: PartyColours[countryCode]['JA21'],
    },
  ],
};

export const mandateData = {
  labels: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21"],
  datasets: [
    {
      label: "Mandate",
      data: [37, 25, 24, 20, 9, 7, 5, 5, 3, 3, 3, 3, 3, 2, 1],
      backgroundColor: [
        PartyColours[countryCode]['PVV'],
        PartyColours[countryCode]['GL-PvdA'],
        PartyColours[countryCode]['VVD'],
        PartyColours[countryCode]['NSC'],
        PartyColours[countryCode]['D66'],
        PartyColours[countryCode]['BBB'],
        PartyColours[countryCode]['CDA'],
        PartyColours[countryCode]['SP'],
        PartyColours[countryCode]['PvdD'],
        PartyColours[countryCode]['DENK'],
        PartyColours[countryCode]['FvD'],
        PartyColours[countryCode]['SGP'],
        PartyColours[countryCode]['CU'],
        PartyColours[countryCode]['Volt'],
        PartyColours[countryCode]['JA21'],
      ],
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    {
      label: "PVV",
      data: [37],
      backgroundColor: PartyColours[countryCode]['PVV'],
      hidden: true,
    },
    {
      label: "GL-PvdA",
      data: [25],
      backgroundColor: PartyColours[countryCode]['GL-PvdA'],
      hidden: true,
    },
    {
      label: "VVD",
      data: [24],
      backgroundColor: PartyColours[countryCode]['VVD'],
      hidden: false,
    },
    {
      label: "NSC",
      data: [20],
      backgroundColor: PartyColours[countryCode]['NSC'],
      hidden: false,
    },
    {
      label: "D66",
      data: [9],
      backgroundColor: PartyColours[countryCode]['D66'],
      hidden: true,
    },
    {
      label: "BBB",
      data: [7],
      backgroundColor: PartyColours[countryCode]['BBB'],
      hidden: false,
    },
    {
      label: "CDA",
      data: [5],
      backgroundColor: PartyColours[countryCode]['CDA'],
      hidden: true,
    },
    {
      label: "SP",
      data: [5],
      backgroundColor: PartyColours[countryCode]['SP'],
      hidden: true,
    },
    {
      label: "PvdD",
      data: [3],
      backgroundColor: PartyColours[countryCode]['PvdD'],
      hidden: true,
    },
    {
      label: "DENK",
      data: [3],
      backgroundColor: PartyColours[countryCode]['DENK'],
      hidden: true,
    },
    {
      label: "FvD",
      data: [3],
      backgroundColor: PartyColours[countryCode]['FvD'],
      hidden: true,
    },
    {
      label: "SGP",
      data: [3],
      backgroundColor: PartyColours[countryCode]['SGP'],
      hidden: true,
    },
    {
      label: "CU",
      data: [3],
      backgroundColor: PartyColours[countryCode]['CU'],
      hidden: true,
    },
    {
      label: "Volt",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Volt'],
      hidden: true,
    },
    {
      label: "JA21",
      data: [1],
      backgroundColor: PartyColours[countryCode]['JA21'],
      hidden: true,
    },
  ],
};