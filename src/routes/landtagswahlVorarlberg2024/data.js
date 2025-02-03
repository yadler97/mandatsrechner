export const data = {
  labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [43.53, 0, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 18.89, 0, 0, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 13.93, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'SPÖ',
      index: 3,
      data: [0, 0, 0, 9.46, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.51],
      backgroundColor: '#E84188',
    },
  ],
};

export const mandateData = {
    labels: ['ÖVP', 'Grüne', 'FPÖ', 'SPÖ', 'NEOS'],
    datasets: [
      {
        label: 'Mandate',
        data: [43.53, 18.89, 13.93, 9.46, 8.51],
        backgroundColor: [
          '#63c3d0',
          '#51A51E',
          '#205CA5',
          '#E31E2D',
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
        data: [17],
        backgroundColor: '#63c3d0',
      },
      {
        label: 'Grüne',
        data: [7],
        backgroundColor: '#51A51E',
      },
      {
        label: 'FPÖ',
        data: [5],
        backgroundColor: '#205CA5',
        hidden: true,
      },
      {
        label: 'SPÖ',
        data: [4],
        backgroundColor: '#E31E2D',
        hidden: true,
      },
      {
        label: 'NEOS',
        data: [3],
        backgroundColor: '#E84188',
        hidden: true,
      },
    ],
  };