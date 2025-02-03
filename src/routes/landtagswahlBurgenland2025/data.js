export const data = {
  labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [49.94, 0, 0, 0, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 30.58, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 9.79, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 6.72, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 1.71],
      backgroundColor: '#E84188',
    },
  ],
};

export const mandateData = {
    labels: ['SPÖ', 'ÖVP', 'FPÖ', 'Grüne', 'NEOS'],
    datasets: [
      {
        label: 'Mandate',
        data: [49.94, 30.58, 9.79, 6.72, 1.71],
        backgroundColor: [
          '#E31E2D',
          '#63c3d0',
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
        label: 'SPÖ',
        data: [19],
        backgroundColor: '#E31E2D',
      },
      {
        label: 'ÖVP',
        data: [11],
        backgroundColor: '#63c3d0',
        hidden: true,
      },
      {
        label: 'FPÖ',
        data: [4],
        backgroundColor: '#205CA5',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [2],
        backgroundColor: '#51A51E',
        hidden: true,
      },
      {
        label: 'NEOS',
        data: [0],
        backgroundColor: '#E84188',
        hidden: true,
      },
    ],
  };