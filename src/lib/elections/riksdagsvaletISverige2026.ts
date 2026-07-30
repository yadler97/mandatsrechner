import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Riksdagsvalet i Sverige 2026';
export const date = ['2026-09-13'];
export const lastDate = ['2022-09-11'];
export const countryCode = 'SE';

export const mandateCount = 349;
export const threshold = 4;
export const apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;

export const data = {
  labels: ['S', 'SD', 'M', 'V', 'C', 'KD', 'MP', 'L'],
  datasets: [
    {
      label: 'V',
      index: 3,
      data: [0, 0, 0, 6.75, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['V'],
    },
    {
      label: 'S',
      index: 0,
      data: [30.33, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['S'],
    },
    {
      label: 'MP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 5.08, 0],
      backgroundColor: PartyColours[countryCode]['MP'],
    },
    {
      label: 'C',
      index: 4,
      data: [0, 0, 0, 0, 6.71, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['C'],
    },
    {
      label: 'L',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 4.61],
      backgroundColor: PartyColours[countryCode]['L'],
    },
    {
      label: 'M',
      index: 2,
      data: [0, 0, 19.10, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['M'],
    },
    {
      label: 'KD',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.34, 0, 0],
      backgroundColor: PartyColours[countryCode]['KD'],
    },
    {
      label: 'SD',
      index: 1,
      data: [0, 20.54, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SD'],
    },
  ],
};

export const mandateData = {
  labels: ['V', 'S', 'MP', 'C', 'L', 'M', 'KD', 'SD'],
  datasets: [
    {
      label: 'Mandate',
      data: [24, 107, 18, 24, 16, 68, 19, 73],
      backgroundColor: [
        PartyColours[countryCode]['V'],
        PartyColours[countryCode]['S'],
        PartyColours[countryCode]['MP'],
        PartyColours[countryCode]['C'],
        PartyColours[countryCode]['L'],
        PartyColours[countryCode]['M'],
        PartyColours[countryCode]['KD'],
        PartyColours[countryCode]['SD'],
      ],
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'V',
      data: [24],
      backgroundColor: PartyColours[countryCode]['V'],
      hidden: true,
    },
    {
      label: 'S',
      data: [107],
      backgroundColor: PartyColours[countryCode]['S'],
      hidden: true,
    },
    {
      label: 'MP',
      data: [18],
      backgroundColor: PartyColours[countryCode]['MP'],
      hidden: true,
    },
    {
      label: 'C',
      data: [24],
      backgroundColor: PartyColours[countryCode]['C'],
      hidden: true,
    },
    {
      label: 'L',
      data: [16],
      backgroundColor: PartyColours[countryCode]['L'],
      hidden: false,
    },
    {
      label: 'M',
      data: [68],
      backgroundColor: PartyColours[countryCode]['M'],
      hidden: false,
    },
    {
      label: 'KD',
      data: [19],
      backgroundColor: PartyColours[countryCode]['KD'],
      hidden: false,
    },
    {
      label: 'SD',
      data: [73],
      backgroundColor: PartyColours[countryCode]['SD'],
      hidden: true,
    },
  ],
};