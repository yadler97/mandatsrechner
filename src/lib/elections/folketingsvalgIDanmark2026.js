import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

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
      backgroundColor: PartyColours[countryCode]['A'].normal,
    },
    {
      label: "V",
      index: 1,
      data: [0, 13.31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['V'].normal,
    },
    {
      label: "M",
      index: 2,
      data: [0, 0, 9.27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['M'].normal,
    },
    {
      label: "F",
      index: 3,
      data: [0, 0, 0, 8.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['F'].normal,
    },
    {
      label: "Æ",
      index: 5,
      data: [0, 0, 0, 0, 0, 8.08, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Æ'].normal,
    },
    {
      label: "I",
      index: 4,
      data: [0, 0, 0, 0, 7.87, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['I'].normal,
    },
    {
      label: "C",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 5.51, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['C'].normal,
    },
    {
      label: "Ø",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 5.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Ø'].normal,
    },
    {
      label: "B",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 3.79, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['B'].normal,
    },
    {
      label: "Å",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3.33, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Å'].normal,
    },
    {
      label: "O",
      index: 10,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.63, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['O'].normal,
    },
    {
      label: "H",
      index: 11,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['H'].normal,
    },
    {
      label: "Grönland",
      index: 12,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Grönland'].normal,
      reservedSeats: 2,
    },
    {
      label: "Färöer",
      index: 13,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Färöer'].normal,
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
      backgroundColor: [
        PartyColours[countryCode]['A'].trans,
        PartyColours[countryCode]['V'].trans,
        PartyColours[countryCode]['M'].trans,
        PartyColours[countryCode]['F'].trans,
        PartyColours[countryCode]['Æ'].trans,
        PartyColours[countryCode]['I'].trans,
        PartyColours[countryCode]['C'].trans,
        PartyColours[countryCode]['Ø'].trans,
        PartyColours[countryCode]['B'].trans,
        PartyColours[countryCode]['Å'].trans,
        PartyColours[countryCode]['O'].trans,
        PartyColours[countryCode]['H'].trans,
        PartyColours[countryCode]['Grönland'].trans,
        PartyColours[countryCode]['Färöer'].trans,
        PartyColours[countryCode]['D'].trans,
      ],
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [50, 23, 16, 15, 14, 14, 10, 9, 7, 6, 5, 0, 2, 2, 0],
      backgroundColor: [
        PartyColours[countryCode]['A'].normal,
        PartyColours[countryCode]['V'].normal,
        PartyColours[countryCode]['M'].normal,
        PartyColours[countryCode]['F'].normal,
        PartyColours[countryCode]['Æ'].normal,
        PartyColours[countryCode]['I'].normal,
        PartyColours[countryCode]['C'].normal,
        PartyColours[countryCode]['Ø'].normal,
        PartyColours[countryCode]['B'].normal,
        PartyColours[countryCode]['Å'].normal,
        PartyColours[countryCode]['O'].normal,
        PartyColours[countryCode]['H'].normal,
        PartyColours[countryCode]['Grönland'].normal,
        PartyColours[countryCode]['Färöer'].normal,
        PartyColours[countryCode]['D'].normal,
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
      backgroundColor: PartyColours[countryCode]['A'].normal,
      hidden: false,
    },
    {
      label: "V",
      data: [23],
      backgroundColor: PartyColours[countryCode]['V'].normal,
      hidden: false,
    },
    {
      label: "M",
      data: [16],
      backgroundColor: PartyColours[countryCode]['M'].normal,
      hidden: false,
    },
    {
      label: "F",
      data: [15],
      backgroundColor: PartyColours[countryCode]['F'].normal,
      hidden: true,
    },
    {
      label: "Æ",
      data: [14],
      backgroundColor: PartyColours[countryCode]['Æ'].normal,
      hidden: true,
    },
    {
      label: "I",
      data: [14],
      backgroundColor: PartyColours[countryCode]['I'].normal,
      hidden: true,
    },
    {
      label: "C",
      data: [10],
      backgroundColor: PartyColours[countryCode]['C'].normal,
      hidden: true,
    },
    {
      label: "Ø",
      data: [9],
      backgroundColor: PartyColours[countryCode]['Ø'].normal,
      hidden: true,
    },
    {
      label: "B",
      data: [7],
      backgroundColor: PartyColours[countryCode]['B'].normal,
      hidden: true,
    },
    {
      label: "Å",
      data: [6],
      backgroundColor: PartyColours[countryCode]['Å'].normal,
      hidden: true,
    },
    {
      label: "O",
      data: [5],
      backgroundColor: PartyColours[countryCode]['O'].normal,
      hidden: true,
    },
    {
      label: "H",
      data: [0],
      backgroundColor: PartyColours[countryCode]['H'].normal,
      hidden: true,
    },
    {
      label: "Grönland",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Grönland'].normal,
      hidden: true,
    },
    {
      label: "Färöer",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Färöer'].normal,
      hidden: true,
    }
  ],
};