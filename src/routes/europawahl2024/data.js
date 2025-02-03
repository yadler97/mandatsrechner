export const name = 'Europawahl 2024';
export const date = '2024-06-09'

export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [34.55, 0, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 23.89, 0, 0, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 17.20, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 14.08, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.44],
      backgroundColor: '#E84188',
    },
  ],
};

export const mandateData = {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'Mandate',
        data: [34.55, 23.89, 17.20, 14.08, 8.44],
        backgroundColor: [
          '#63c3d0',
          '#E31E2D',
          '#205CA5',
          '#51A51E',
          '#E84188',
        ],
      },
    ],
  };

  export const majorityData = {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'ÖVP',
        data: [8],
        backgroundColor: '#63c3d0',
      },
      {
        label: 'SPÖ',
        data: [5],
        backgroundColor: '#E31E2D',
      },
      {
        label: 'FPÖ',
        data: [3],
        backgroundColor: '#205CA5',
      },
      {
        label: 'Grüne',
        data: [3],
        backgroundColor: '#51A51E',
      },
      {
        label: 'NEOS',
        data: [1],
        backgroundColor: '#E84188',
      },
    ],
  };