import { ApportionmentMethods } from "$lib/apportionmentMethods";
import { PartyColours } from "$lib/partyColours";

export const name = 'Riksdagsvalet i Sverige 2026';
export const date = ['2026-09-13'];
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
      backgroundColor: PartyColours[countryCode]['V'].normal,
    },
    {
      label: 'S',
      index: 0,
      data: [30.33, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['S'].normal,
    },
    {
      label: 'MP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 5.08, 0],
      backgroundColor: PartyColours[countryCode]['MP'].normal,
    },
    {
      label: 'C',
      index: 4,
      data: [0, 0, 0, 0, 6.71, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['C'].normal,
    },
    {
      label: 'L',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 4.61],
      backgroundColor: PartyColours[countryCode]['L'].normal,
    },
    {
      label: 'M',
      index: 2,
      data: [0, 0, 19.10, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['M'].normal,
    },
    {
      label: 'KD',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.34, 0, 0],
      backgroundColor: PartyColours[countryCode]['KD'].normal,
    },
    {
      label: 'SD',
      index: 1,
      data: [0, 20.54, 0, 0, 0, 0, 0, 0],
      backgroundColor: PartyColours[countryCode]['SD'].normal,
    },
  ],
};

export const mandateData = {
  labels: ['V', 'S', 'MP', 'C', 'L', 'M', 'KD', 'SD'],
  datasets: [
    {
      label: 'Mandate (2022)',
      data: [24, 107, 18, 24, 16, 68, 19, 73],
      backgroundColor: [
        PartyColours[countryCode]['V'].trans,
        PartyColours[countryCode]['S'].trans,
        PartyColours[countryCode]['MP'].trans,
        PartyColours[countryCode]['C'].trans,
        PartyColours[countryCode]['L'].trans,
        PartyColours[countryCode]['M'].trans,
        PartyColours[countryCode]['KD'].trans,
        PartyColours[countryCode]['SD'].trans,
      ],
      weight: 0.4,
    },
    {
      label: 'Mandate',
      data: [24, 107, 18, 24, 16, 68, 19, 73],
      backgroundColor: [
        PartyColours[countryCode]['V'].normal,
        PartyColours[countryCode]['S'].normal,
        PartyColours[countryCode]['MP'].normal,
        PartyColours[countryCode]['C'].normal,
        PartyColours[countryCode]['L'].normal,
        PartyColours[countryCode]['M'].normal,
        PartyColours[countryCode]['KD'].normal,
        PartyColours[countryCode]['SD'].normal,
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
      backgroundColor: PartyColours[countryCode]['V'].normal,
      hidden: true,
    },
    {
      label: 'S',
      data: [107],
      backgroundColor: PartyColours[countryCode]['S'].normal,
      hidden: true,
    },
    {
      label: 'MP',
      data: [18],
      backgroundColor: PartyColours[countryCode]['MP'].normal,
      hidden: true,
    },
    {
      label: 'C',
      data: [24],
      backgroundColor: PartyColours[countryCode]['C'].normal,
      hidden: true,
    },
    {
      label: 'L',
      data: [16],
      backgroundColor: PartyColours[countryCode]['L'].normal,
      hidden: false,
    },
    {
      label: 'M',
      data: [68],
      backgroundColor: PartyColours[countryCode]['M'].normal,
      hidden: false,
    },
    {
      label: 'KD',
      data: [19],
      backgroundColor: PartyColours[countryCode]['KD'].normal,
      hidden: false,
    },
    {
      label: 'SD',
      data: [73],
      backgroundColor: PartyColours[countryCode]['SD'].normal,
      hidden: true,
    },
  ],
};