export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [36.05, 0, 0, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 23.02, 0, 0, 0, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 17.49, 0, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 12.08, 0, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'KPÖ',
      index: 4,
      data: [0, 0, 0, 0, 5.99, 0],
      backgroundColor: '#aa0000',
    },
    {
      label: 'NEOS',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.37],
      backgroundColor: '#E84188',
    },
  ],
};

export const mandateData = {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'KPÖ', 'NEOS'],
    datasets: [
      {
        label: 'Mandate',
        data: [36.05, 23.02, 17.49, 12.08, 5.99, 5.37],
        backgroundColor: [
          '#63c3d0',
          '#E31E2D',
          '#205CA5',
          '#51A51E',
          '#aa0000',
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
        data: [18],
        backgroundColor: '#63c3d0',
      },
      {
        label: 'SPÖ',
        data: [12],
        backgroundColor: '#E31E2D',
      },
      {
        label: 'FPÖ',
        data: [8],
        backgroundColor: '#205CA5',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [6],
        backgroundColor: '#51A51E',
        hidden: true,
      },
      {
        label: 'KPÖ',
        data: [2],
        backgroundColor: '#aa0000',
        hidden: true,
      },
      {
        label: 'NEOS',
        data: [2],
        backgroundColor: '#E84188',
        hidden: true,
      },
    ],
  };