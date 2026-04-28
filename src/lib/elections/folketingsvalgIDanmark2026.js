import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColoursDK, PartyColoursTransDK } from "$lib/partyColours";

export const name = 'Folketingsvalg i Danmark 2026';
export const date = ['2026-03-24'];
export const countryCode = 'DK';

export const mandateCount = 179;
export const threshold = 2;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  labels: ["A", "V", "M", "F", "I", "Æ", "C", "Ø", "B", "Å", "O", "H", "Grönland", "Färöer"],
  datasets: [
    {
      label: "A",
      index: 0,
      data: [27.54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.A,
    },
    {
      label: "V",
      index: 1,
      data: [0, 13.31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.V,
    },
    {
      label: "M",
      index: 2,
      data: [0, 0, 9.27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.M,
    },
    {
      label: "F",
      index: 3,
      data: [0, 0, 0, 8.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.F,
    },
    {
      label: "Æ",
      index: 5,
      data: [0, 0, 0, 0, 0, 8.08, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.AE,
    },
    {
      label: "I",
      index: 4,
      data: [0, 0, 0, 0, 7.87, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.I,
    },
    {
      label: "C",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 5.51, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.C,
    },
    {
      label: "Ø",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 5.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.OE,
    },
    {
      label: "B",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 3.79, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.B,
    },
    {
      label: "Å",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3.33, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.AA,
    },
    {
      label: "O",
      index: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.63, 0, 0, 0],
      backgroundColor: PartyColoursDK.O,
    },
    {
      label: "H",
      index: 11,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.H,
    },
    {
      label: "Grönland",
      index: 12,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.Groenland,
      reservedSeats: 2,
    },
    {
      label: "Färöer",
      index: 13,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursDK.Faeroeer,
      reservedSeats: 2,
    }
  ],
};

export const mandateData = {
  labels: ["A", "V", "M", "F", "Æ", "I", "C", "Ø", "B", "Å", "O", "H", "Grönland", "Färöer", "D"],
  datasets: [
    {
      label: "Mandate (2022)",
      data: [50, 23, 16, 15, 14, 14, 10, 9, 7, 6, 5, 0, 2, 2, 6],
      backgroundColor: Object.values(PartyColoursTransDK),
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [50, 23, 16, 15, 14, 14, 10, 9, 7, 6, 5, 0, 2, 2, 0],
      backgroundColor: Object.values(PartyColoursDK),
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    {
      label: "A",
      data: [50],
      backgroundColor: PartyColoursDK.A,
      hidden: false,
    },
    {
      label: "V",
      data: [23],
      backgroundColor: PartyColoursDK.V,
      hidden: false,
    },
    {
      label: "M",
      data: [16],
      backgroundColor: PartyColoursDK.M,
      hidden: false,
    },
    {
      label: "F",
      data: [15],
      backgroundColor: PartyColoursDK.F,
      hidden: true,
    },
    {
      label: "Æ",
      data: [14],
      backgroundColor: PartyColoursDK.AE,
      hidden: true,
    },
    {
      label: "I",
      data: [14],
      backgroundColor: PartyColoursDK.I,
      hidden: true,
    },
    {
      label: "C",
      data: [10],
      backgroundColor: PartyColoursDK.C,
      hidden: true,
    },
    {
      label: "Ø",
      data: [9],
      backgroundColor: PartyColoursDK.OE,
      hidden: true,
    },
    {
      label: "B",
      data: [7],
      backgroundColor: PartyColoursDK.B,
      hidden: true,
    },
    {
      label: "Å",
      data: [6],
      backgroundColor: PartyColoursDK.AA,
      hidden: true,
    },
    {
      label: "O",
      data: [5],
      backgroundColor: PartyColoursDK.O,
      hidden: true,
    },
    {
      label: "H",
      data: [0],
      backgroundColor: PartyColoursDK.H,
      hidden: true,
    },
    {
      label: "Grönland",
      data: [2],
      backgroundColor: PartyColoursDK.Groenland,
      hidden: true,
    },
    {
      label: "Färöer",
      data: [2],
      backgroundColor: PartyColoursDK.Faeroeer,
      hidden: true,
    }
  ],
};