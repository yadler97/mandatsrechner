import { PartyColoursNL, PartyColoursTransNL } from "$lib/partyColours";

export const name = 'Tweede Kamerverkiezingen 2025';
export const date = ['2025-10-29'];

export const data = {
  labels: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21"],
  datasets: [
    { label: "PVV", index: 0, data: [23.49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.PVV },
    { label: "GL-PvdA", index: 1, data: [0, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.GLPvdA },
    { label: "VVD", index: 2, data: [0, 0, 15.24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.VVD },
    { label: "NSC", index: 3, data: [0, 0, 0, 12.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.NSC },
    { label: "D66", index: 4, data: [0, 0, 0, 0, 6.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.D66 },
    { label: "BBB", index: 5, data: [0, 0, 0, 0, 0, 4.65, 0, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.BBB },
    { label: "CDA", index: 6, data: [0, 0, 0, 0, 0, 0, 3.31, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.CDA },
    { label: "SP", index: 7, data: [0, 0, 0, 0, 0, 0, 0, 3.15, 0, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.SP },
    { label: "PvdD", index: 8, data: [0, 0, 0, 0, 0, 0, 0, 0, 2.25, 0, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.PvdD },
    { label: "DENK", index: 9, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2.37, 0, 0, 0, 0, 0], backgroundColor: PartyColoursNL.DENK },
    { label: "FvD", index: 10, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.23, 0, 0, 0, 0], backgroundColor: PartyColoursNL.FvD },
    { label: "SGP", index: 11, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.08, 0, 0, 0], backgroundColor: PartyColoursNL.SGP },
    { label: "CU", index: 12, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.04, 0, 0], backgroundColor: PartyColoursNL.CU },
    { label: "Volt", index: 13, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.71, 0], backgroundColor: PartyColoursNL.Volt },
    { label: "JA21", index: 14, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.68], backgroundColor: PartyColoursNL.JA21 },
  ],
};

export const mandateData = {
  labels: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "DENK", "FvD", "SGP", "CU", "Volt", "JA21"],
  datasets: [
    {
      label: "Mandate (2023)",
      data: [37, 25, 24, 20, 9, 7, 5, 5, 3, 3, 3, 3, 3, 2, 1],
      backgroundColor: Object.values(PartyColoursTransNL),
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [37, 25, 24, 20, 9, 7, 5, 5, 3, 3, 3, 3, 3, 2, 1],
      backgroundColor: Object.values(PartyColoursNL),
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    { label: "PVV", data: [37], backgroundColor: PartyColoursNL.PVV },
    { label: "GL-PvdA", data: [25], backgroundColor: PartyColoursNL.GLPvdA },
    { label: "VVD", data: [24], backgroundColor: PartyColoursNL.VVD },
    { label: "NSC", data: [20], backgroundColor: PartyColoursNL.NSC },
    { label: "D66", data: [9], backgroundColor: PartyColoursNL.D66 },
    { label: "BBB", data: [7], backgroundColor: PartyColoursNL.BBB },
    { label: "CDA", data: [5], backgroundColor: PartyColoursNL.CDA },
    { label: "SP", data: [5], backgroundColor: PartyColoursNL.SP },
    { label: "PvdD", data: [3], backgroundColor: PartyColoursNL.PvdD },
    { label: "DENK", data: [3], backgroundColor: PartyColoursNL.DENK },
    { label: "FvD", data: [3], backgroundColor: PartyColoursNL.FvD },
    { label: "SGP", data: [3], backgroundColor: PartyColoursNL.SGP },
    { label: "CU", data: [3], backgroundColor: PartyColoursNL.CU },
    { label: "Volt", data: [2], backgroundColor: PartyColoursNL.Volt },
    { label: "JA21", data: [1], backgroundColor: PartyColoursNL.JA21 },
  ],
};