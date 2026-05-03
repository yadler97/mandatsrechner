import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Tweede Kamerverkiezingen 2025';
export const date = ['2025-10-29'];
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
      backgroundColor: PartyColours[countryCode]['PVV'].normal,
    },
    {
      label: "GL-PvdA",
      index: 1,
      data: [0, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['GL-PvdA'].normal,
    },
    {
      label: "VVD",
      index: 2,
      data: [0, 0, 15.24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['VVD'].normal,
    },
    {
      label: "NSC",
      index: 3,
      data: [0, 0, 0, 12.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NSC'].normal,
    },
    {
      label: "D66",
      index: 4,
      data: [0, 0, 0, 0, 6.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['D66'].normal,
    },
    {
      label: "BBB",
      index: 5,
      data: [0, 0, 0, 0, 0, 4.65, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['BBB'].normal,
    },
    {
      label: "CDA",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.31, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['CDA'].normal,
    },
    {
      label: "SP",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 3.15, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SP'].normal,
    },
    {
      label: "PvdD",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2.25, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['PvdD'].normal,
    },
    {
      label: "DENK",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2.37, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['DENK'].normal,
    },
    {
      label: "FvD",
      index: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.23, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['FvD'].normal,
    },
    {
      label: "SGP",
      index: 11,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.08, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SGP'].normal,
    },
    {
      label: "CU",
      index: 12,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.04, 0, 0],
      backgroundColor: PartyColours[countryCode]['CU'].normal,
    },
    {
      label: "Volt",
      index: 13,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.71, 0],
      backgroundColor: PartyColours[countryCode]['Volt'].normal,
    },
    {
      label: "JA21",
      index: 14,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.68],
      backgroundColor: PartyColours[countryCode]['JA21'].normal,
    },
  ],
};

export const mandateData = {
  labels: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21"],
  datasets: [
    {
      label: "Mandate (2023)",
      data: [37, 25, 24, 20, 9, 7, 5, 5, 3, 3, 3, 3, 3, 2, 1],
      backgroundColor: [
        PartyColours[countryCode]['PVV'].trans,
        PartyColours[countryCode]['GL-PvdA'].trans,
        PartyColours[countryCode]['VVD'].trans,
        PartyColours[countryCode]['NSC'].trans,
        PartyColours[countryCode]['D66'].trans,
        PartyColours[countryCode]['BBB'].trans,
        PartyColours[countryCode]['CDA'].trans,
        PartyColours[countryCode]['SP'].trans,
        PartyColours[countryCode]['PvdD'].trans,
        PartyColours[countryCode]['DENK'].trans,
        PartyColours[countryCode]['FvD'].trans,
        PartyColours[countryCode]['SGP'].trans,
        PartyColours[countryCode]['CU'].trans,
        PartyColours[countryCode]['Volt'].trans,
        PartyColours[countryCode]['JA21'].trans,
      ],
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [37, 25, 24, 20, 9, 7, 5, 5, 3, 3, 3, 3, 3, 2, 1],
      backgroundColor: [
        PartyColours[countryCode]['PVV'].normal,
        PartyColours[countryCode]['GL-PvdA'].normal,
        PartyColours[countryCode]['VVD'].normal,
        PartyColours[countryCode]['NSC'].normal,
        PartyColours[countryCode]['D66'].normal,
        PartyColours[countryCode]['BBB'].normal,
        PartyColours[countryCode]['CDA'].normal,
        PartyColours[countryCode]['SP'].normal,
        PartyColours[countryCode]['PvdD'].normal,
        PartyColours[countryCode]['DENK'].normal,
        PartyColours[countryCode]['FvD'].normal,
        PartyColours[countryCode]['SGP'].normal,
        PartyColours[countryCode]['CU'].normal,
        PartyColours[countryCode]['Volt'].normal,
        PartyColours[countryCode]['JA21'].normal,
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
      backgroundColor: PartyColours[countryCode]['PVV'].normal,
      hidden: true,
    },
    {
      label: "GL-PvdA",
      data: [25],
      backgroundColor: PartyColours[countryCode]['GL-PvdA'].normal,
      hidden: true,
    },
    {
      label: "VVD",
      data: [24],
      backgroundColor: PartyColours[countryCode]['VVD'].normal,
    },
    {
      label: "NSC",
      data: [20],
      backgroundColor: PartyColours[countryCode]['NSC'].normal,
    },
    {
      label: "D66",
      data: [9],
      backgroundColor: PartyColours[countryCode]['D66'].normal,
      hidden: true,
    },
    {
      label: "BBB",
      data: [7],
      backgroundColor: PartyColours[countryCode]['BBB'].normal,
    },
    {
      label: "CDA",
      data: [5],
      backgroundColor: PartyColours[countryCode]['CDA'].normal,
      hidden: true,
    },
    {
      label: "SP",
      data: [5],
      backgroundColor: PartyColours[countryCode]['SP'].normal,
      hidden: true,
    },
    {
      label: "PvdD",
      data: [3],
      backgroundColor: PartyColours[countryCode]['PvdD'].normal,
      hidden: true,
    },
    {
      label: "DENK",
      data: [3],
      backgroundColor: PartyColours[countryCode]['DENK'].normal,
      hidden: true,
    },
    {
      label: "FvD",
      data: [3],
      backgroundColor: PartyColours[countryCode]['FvD'].normal,
      hidden: true,
    },
    {
      label: "SGP",
      data: [3],
      backgroundColor: PartyColours[countryCode]['SGP'].normal,
      hidden: true,
    },
    {
      label: "CU",
      data: [3],
      backgroundColor: PartyColours[countryCode]['CU'].normal,
      hidden: true,
    },
    {
      label: "Volt",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Volt'].normal,
      hidden: true,
    },
    {
      label: "JA21",
      data: [1],
      backgroundColor: PartyColours[countryCode]['JA21'].normal,
      hidden: true,
    },
  ],
};