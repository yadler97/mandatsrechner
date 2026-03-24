import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColoursSI, PartyColoursTransSI } from "$lib/partyColours";

export const name = 'Državnozborske volitve v Sloveniji 2026';
export const date = ['2026-03-22'];

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
      backgroundColor: PartyColoursSI.GS,
    },
    {
      label: "SDS",
      index: 1,
      data: [0, 23.48, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.SDS,
    },
    {
      label: "NSi + SLS + FOKUS",
      index: 2,
      data: [0, 0, 6.86, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.NSi,
    },
    {
      label: "SD",
      index: 3,
      data: [0, 0, 0, 6.69, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.SD,
    },
    {
      label: "Levica + Vesna",
      index: 4,
      data: [0, 0, 0, 0, 4.46, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.Levica,
    },
    {
      label: "Demokrati",
      index: 5,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.DEM,
    },
    {
      label: "Resni.ca",
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.86, 0, 0, 0],
      backgroundColor: PartyColoursSI.RES,
    },
    {
      label: "Pirati",
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.63, 0, 0],
      backgroundColor: PartyColoursSI.PIR,
    },
    {
      label: "PVP",
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.PVP,
    },
    {
      label: "Minderheiten",
      index: 9,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColoursSI.Minorities,
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
      backgroundColor: Object.values(PartyColoursTransSI),
      weight: 0.4,
    },
    {
      label: "Mandate",
      data: [41, 27, 8, 7, 5, 0, 0, 0, 0, 2],
      backgroundColor: Object.values(PartyColoursSI),
    }
  ],
};

export const majorityData = {
  labels: ["Mandate"],
  datasets: [
    {
      label: "GS",
      data: [41],
      backgroundColor: PartyColoursSI.GS,
      hidden: false,
    },
    {
      label: "SDS",
      data: [27],
      backgroundColor: PartyColoursSI.SDS,
      hidden: true,
    },
    {
      label: "NSi + SLS + FOKUS",
      data: [8],
      backgroundColor: PartyColoursSI.NSi,
      hidden: true,
    },
    {
      label: "SD",
      data: [7],
      backgroundColor: PartyColoursSI.SD,
      hidden: false,
    },
    {
      label: "Levica + Vesna",
      data: [5],
      backgroundColor: PartyColoursSI.Levica,
      hidden: false,
    },
    {
      label: "Demokrati",
      data: [0],
      backgroundColor: PartyColoursSI.DEM,
      hidden: true,
    },
    {
      label: "Resni.ca",
      data: [0],
      backgroundColor: PartyColoursSI.RES,
      hidden: true,
    },
    {
      label: "Pirati",
      data: [0],
      backgroundColor: PartyColoursSI.PIR,
      hidden: true,
    },
    {
      label: "PVP",
      data: [0],
      backgroundColor: PartyColoursSI.PVP,
      hidden: true,
    },
    {
      label: "Minderheiten",
      data: [2],
      backgroundColor: PartyColoursSI.Minorities,
      hidden: true,
    },
  ],
};