const colours = [
  '#e6194B', // Red
  '#3cb44b', // Green
  '#ffe119', // Yellow
  '#4363d8', // Blue
  '#f58231', // Orange
  '#911eb4'  // Purple
];

export const voteData = {
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
  datasets: [
    {
      label: 'A',
      index: 0,
      data: [40, 0, 0, 0, 0, 0],
      backgroundColor: colours[0],
    },
    {
      label: 'B',
      index: 1,
      data: [0, 30, 0, 0, 0, 0],
      backgroundColor: colours[1],
    },
    {
      label: 'C',
      index: 2,
      data: [0, 0, 15, 0, 0, 0],
      backgroundColor: colours[2],
    },
    {
      label: 'D',
      index: 3,
      data: [0, 0, 0, 10, 0, 0],
      backgroundColor: colours[3],
    },
    {
      label: 'E',
      index: 4,
      data: [0, 0, 0, 0, 3, 0],
      backgroundColor: colours[4],
    },
    {
      label: 'F',
      index: 5,
      data: [0, 0, 0, 0, 0, 2],
      backgroundColor: colours[5],
    },
  ],
};

export const mandateData = {
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
  datasets: [
    {
      label: 'Mandate',
      data: [40, 30, 15, 10, 3, 2],
      backgroundColor: colours,
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'A',
      data: [0],
      backgroundColor: colours[0],
    },
    {
      label: 'B',
      data: [0],
      backgroundColor: colours[1],
    },
    {
      label: 'C',
      data: [0],
      backgroundColor: colours[2],
    },
    {
      label: 'D',
      data: [0],
      backgroundColor: colours[3],
    },
    {
      label: 'E',
      data: [0],
      backgroundColor: colours[4],
    },
    {
      label: 'F',
      data: [0],
      backgroundColor: colours[5],
    },
  ],
};