import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Državnozborske volitve v Sloveniji 2026';
export const date = ['2026-03-22'];
export const lastDate = ['2022-04-24'];
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
      backgroundColor: PartyColours[countryCode]['GS'],
    },
    {
      label: "SDS",
      index: 1,
      data: [0, 23.48, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SDS'],
    },
    {
      label: "NSi + SLS + FOKUS",
      index: 2,
      data: [0, 0, 6.86, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['NSi + SLS + FOKUS'],
    },
    {
      label: "SD",
      index: 3,
      data: [0, 0, 0, 6.69, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SD'],
    },
    {
      label: "Levica + Vesna",
      index: 4,
      data: [0, 0, 0, 0, 4.46, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Levica + Vesna'],
    },
    {
      label: "Demokrati",
      index: 5,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Demokrati'],
    },
    {
      label: "Resni.ca",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.86, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Resni.ca'],
    },
    {
      label: "Pirati",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.63, 0, 0],
      backgroundColor: PartyColours[countryCode]['Pirati'],
    },
    {
      label: "PVP",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['PVP'],
    },
    {
      label: "Minderheiten",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['Minorities'],
      reservedSeats: 2,
    }
  ],
};

export const mandateData = {
  labels: ["GS", "SDS", "NSi + SLS + FOKUS", "SD", "Levica + Vesna", "Demokrati", "Resni.ca", "Pirati", "PVP", "Minderheiten"],
  datasets: [
    {
      label: "Mandate",
      data: [41, 27, 8, 7, 5, 0, 0, 0, 0, 2],
      backgroundColor: [
        PartyColours[countryCode]['GS'],
        PartyColours[countryCode]['SDS'],
        PartyColours[countryCode]['NSi + SLS + FOKUS'],
        PartyColours[countryCode]['SD'],
        PartyColours[countryCode]['Levica + Vesna'],
        PartyColours[countryCode]['Demokrati'],
        PartyColours[countryCode]['Resni.ca'],
        PartyColours[countryCode]['Pirati'],
        PartyColours[countryCode]['PVP'],
        PartyColours[countryCode]['Minorities'],
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
      backgroundColor: PartyColours[countryCode]['GS'],
      hidden: false,
    },
    {
      label: "SDS",
      data: [27],
      backgroundColor: PartyColours[countryCode]['SDS'],
      hidden: true,
    },
    {
      label: "NSi + SLS + FOKUS",
      data: [8],
      backgroundColor: PartyColours[countryCode]['NSi + SLS + FOKUS'],
      hidden: true,
    },
    {
      label: "SD",
      data: [7],
      backgroundColor: PartyColours[countryCode]['SD'],
      hidden: false,
    },
    {
      label: "Levica + Vesna",
      data: [5],
      backgroundColor: PartyColours[countryCode]['Levica + Vesna'],
      hidden: false,
    },
    {
      label: "Demokrati",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Demokrati'],
      hidden: true,
    },
    {
      label: "Resni.ca",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Resni.ca'],
      hidden: true,
    },
    {
      label: "Pirati",
      data: [0],
      backgroundColor: PartyColours[countryCode]['Pirati'],
      hidden: true,
    },
    {
      label: "PVP",
      data: [0],
      backgroundColor: PartyColours[countryCode]['PVP'],
      hidden: true,
    },
    {
      label: "Minderheiten",
      data: [2],
      backgroundColor: PartyColours[countryCode]['Minorities'],
      hidden: true,
    },
  ],
};