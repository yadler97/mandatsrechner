const colors = [
  '#e6194B', // Red
  '#3cb44b', // Green
  '#ffe119', // Yellow
  '#4363d8', // Blue
  '#f58231', // Orange
  '#911eb4'  // Purple
];

export const data = {
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
  datasets: [
    {
      label: 'A',
      index: 0,
      data: [40, 0, 0, 0, 0, 0],
      backgroundColor: colors[0],
    },
    {
      label: 'B',
      index: 1,
      data: [0, 30, 0, 0, 0, 0],
      backgroundColor: colors[1],
    },
    {
      label: 'C',
      index: 2,
      data: [0, 0, 15, 0, 0, 0],
      backgroundColor: colors[2],
    },
    {
      label: 'D',
      index: 3,
      data: [0, 0, 0, 10, 0, 0],
      backgroundColor: colors[3],
    },
    {
      label: 'E',
      index: 4,
      data: [0, 0, 0, 0, 3, 0],
      backgroundColor: colors[4],
    },
    {
      label: 'F',
      index: 5,
      data: [0, 0, 0, 0, 0, 2],
      backgroundColor: colors[5],
    },
  ],
};

export const mandateData = {
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
  datasets: [
    {
      label: 'Mandate',
      data: [40, 30, 15, 10, 3, 2],
      backgroundColor: colors,
    },
  ],
};

export const majorityData = {
  labels: ['Mandate'],
  datasets: [
    {
      label: 'A',
      data: [0],
      backgroundColor: colors[0],
    },
    {
      label: 'B',
      data: [0],
      backgroundColor: colors[1],
    },
    {
      label: 'C',
      data: [0],
      backgroundColor: colors[2],
    },
    {
      label: 'D',
      data: [0],
      backgroundColor: colors[3],
    },
    {
      label: 'E',
      data: [0],
      backgroundColor: colors[4],
    },
    {
      label: 'F',
      data: [0],
      backgroundColor: colors[5],
    },
  ],
};