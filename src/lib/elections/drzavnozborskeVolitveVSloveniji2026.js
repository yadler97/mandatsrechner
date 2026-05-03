import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Državnozborske volitve v Sloveniji 2026';
export const date = ['2026-03-22'];
export const countryCode = 'SI';

export const mandateCount = 90;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.DHONDT;

export const data = {
  labels: ["GS", "SDS", "NSi + SLS + FOKUS", "SD", "Levica + Vesna", "Demokrati", "Resni.ca", "Pirati", "PVP"],
  datasets: [
    {
      label: "GS",
      index: 0,
      data: [34.45, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['GS'].normal,
    },
    {
      label: "SDS",
      index: 1,
      data: [0, 23.48, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SDS'].normal,
    },
    {
      label: "NSi + SLS + FOKUS",
      index: 2,
      data: [0, 0, 6.86, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NSi + SLS + FOKUS'].normal,
    },
    {
      label: "SD",
      index: 3,
      data: [0, 0, 0, 6.69, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SD'].normal,
    },
    {
      label: "Levica + Vesna",
      index: 4,
      data: [0, 0, 0, 0, 4.46, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Levica + Vesna'].normal,
    },
    {
      label: "Demokrati",
      index: 5,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Demokrati'].normal,
    },
    {
      label: "Resni.ca",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.86, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Resni.ca'].normal,
    },
    {
      label: "Pirati",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.63, 0, 0],
      backgroundColor: PartyColours[countryCode]['Pirati'].normal,
    },
    {
      label: "PVP",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['PVP'].normal,
    },
    {
      label: "Minderheiten",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Minorities'].normal,
      reservedSeats: 2,
    }
  ],
};

export const mandateData = {
  labels: ["GS", "SDS", "NSi + SLS + FOKUS", "SD", "Levica + Vesna", "Demokrati", "Resni.ca", "Pirati", "PVP", "Minderheiten"],
  datasets: [
    {
      label: "Mandate (2022)",
      data: [41, 27, 8, 7, 5, 0, 0, 0, 0, 2],
      backgroundColor: [
        PartyColours[countryCode]['GS'].trans,
        PartyColours[countryCode]['SDS'].trans,
        PartyColours[countryCode]['NSi + SLS + FOKUS'].trans,
        PartyColours[countryCode]['SD'].trans,
        PartyColours[countryCode]['Levica + Vesna'].trans,
        PartyColours[countryCode]['Demokrati'].trans,
        PartyColours[countryCode]['Resni.ca'].trans,
        PartyColours[countryCode]['Pirati'].trans,
        PartyColours[countryCode]['PVP'].trans,
        PartyColours[countryCode]['Minorities'].trans,
      ],
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [41, 27, 8, 7, 5, 0, 0, 0, 0, 2],
      backgroundColor: [
        PartyColours[countryCode]['GS'].normal,
        PartyColours[countryCode]['SDS'].normal,
        PartyColours[countryCode]['NSi + SLS + FOKUS'].normal,
        PartyColours[countryCode]['SD'].normal,
        PartyColours[countryCode]['Levica + Vesna'].normal,
        PartyColours[countryCode]['Demokrati'].normal,
        PartyColours[countryCode]['Resni.ca'].normal,
        PartyColours[countryCode]['Pirati'].normal,
        PartyColours[countryCode]['PVP'].normal,
        PartyColours[countryCode]['Minorities'].normal,
      ],
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    {
      label: "GS",
      data: [41],
      backgroundColor: PartyColours[countryCode]['GS'].normal,
      hidden: false,
    },
    {
      label: "SDS",
      data: [27],
      backgroundColor: PartyColours[countryCode]['SDS'].normal,
      hidden: true,
    },
    {
      label: "NSi + SLS + FOKUS",
      data: [8],
      backgroundColor: PartyColours[countryCode]['NSi + SLS + FOKUS'].normal,
      hidden: true,
    },
    {
      label: "SD",
      data: [7],
      backgroundColor: PartyColours[countryCode]['SD'].normal,
      hidden: false,
    },
    {
      label: "Levica + Vesna",
      data: [5],
      backgroundColor: PartyColours[countryCode]['Levica + Vesna'].normal,
      hidden: false,
    },
    {
      label: "Demokrati",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Demokrati'].normal,
      hidden: true,
    },
    {
      label: "Resni.ca",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Resni.ca'].normal,
      hidden: true,
    },
    {
      label: "Pirati",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Pirati'].normal,
      hidden: true,
    },
    {
      label: "PVP",
      data: [0],
      backgroundColor: PartyColours[countryCode]['PVP'].normal,
      hidden: true,
    },
    {
      label: "Minderheiten",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Minorities'].normal,
      hidden: true,
    },
  ],
};