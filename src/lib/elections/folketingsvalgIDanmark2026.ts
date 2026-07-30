import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Folketingsvalg i Danmark 2026';
export const date = ['2026-03-24'];
export const lastDate = ['2022-11-01'];
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
      backgroundColor: PartyColours[countryCode]['A'],
    },
    {
      label: "V",
      index: 1,
      data: [0, 13.31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['V'],
    },
    {
      label: "M",
      index: 2,
      data: [0, 0, 9.27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['M'],
    },
    {
      label: "F",
      index: 3,
      data: [0, 0, 0, 8.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['F'],
    },
    {
      label: "Æ",
      index: 5,
      data: [0, 0, 0, 0, 0, 8.08, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Æ'],
    },
    {
      label: "I",
      index: 4,
      data: [0, 0, 0, 0, 7.87, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['I'],
    },
    {
      label: "C",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 5.51, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['C'],
    },
    {
      label: "Ø",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 5.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Ø'],
    },
    {
      label: "B",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 3.79, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['B'],
    },
    {
      label: "Å",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3.33, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Å'],
    },
    {
      label: "O",
      index: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.63, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['O'],
    },
    {
      label: "H",
      index: 11,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['H'],
    },
    {
      label: "Grönland",
      index: 12,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grönland'],
      reservedSeats: 2,
    },
    {
      label: "Färöer",
      index: 13,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Färöer'],
      reservedSeats: 2,
    }
  ],
};

export const mandateData = {
  labels: ["A", "V", "M", "F", "Æ", "I", "C", "Ø", "B", "Å", "O", "H", "Grönland", "Färöer", "D"],
  datasets: [
    {
      label: "Mandate",
      data: [50, 23, 16, 15, 14, 14, 10, 9, 7, 6, 5, 0, 2, 2, 6],
      backgroundColor: [
        PartyColours[countryCode]['A'],
        PartyColours[countryCode]['V'],
        PartyColours[countryCode]['M'],
        PartyColours[countryCode]['F'],
        PartyColours[countryCode]['Æ'],
        PartyColours[countryCode]['I'],
        PartyColours[countryCode]['C'],
        PartyColours[countryCode]['Ø'],
        PartyColours[countryCode]['B'],
        PartyColours[countryCode]['Å'],
        PartyColours[countryCode]['O'],
        PartyColours[countryCode]['H'],
        PartyColours[countryCode]['Grönland'],
        PartyColours[countryCode]['Färöer'],
        PartyColours[countryCode]['D'],
      ],
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    {
      label: "A",
      data: [50],
      backgroundColor: PartyColours[countryCode]['A'],
      hidden: false,
    },
    {
      label: "V",
      data: [23],
      backgroundColor: PartyColours[countryCode]['V'],
      hidden: false,
    },
    {
      label: "M",
      data: [16],
      backgroundColor: PartyColours[countryCode]['M'],
      hidden: false,
    },
    {
      label: "F",
      data: [15],
      backgroundColor: PartyColours[countryCode]['F'],
      hidden: true,
    },
    {
      label: "Æ",
      data: [14],
      backgroundColor: PartyColours[countryCode]['Æ'],
      hidden: true,
    },
    {
      label: "I",
      data: [14],
      backgroundColor: PartyColours[countryCode]['I'],
      hidden: true,
    },
    {
      label: "C",
      data: [10],
      backgroundColor: PartyColours[countryCode]['C'],
      hidden: true,
    },
    {
      label: "Ø",
      data: [9],
      backgroundColor: PartyColours[countryCode]['Ø'],
      hidden: true,
    },
    {
      label: "B",
      data: [7],
      backgroundColor: PartyColours[countryCode]['B'],
      hidden: true,
    },
    {
      label: "Å",
      data: [6],
      backgroundColor: PartyColours[countryCode]['Å'],
      hidden: true,
    },
    {
      label: "O",
      data: [5],
      backgroundColor: PartyColours[countryCode]['O'],
      hidden: true,
    },
    {
      label: "H",
      data: [0],
      backgroundColor: PartyColours[countryCode]['H'],
      hidden: true,
    },
    {
      label: "Grönland",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Grönland'],
      hidden: true,
    },
    {
      label: "Färöer",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Färöer'],
      hidden: true,
    }
  ],
};