export const data = {
  labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
  datasets: [
    {
      label: 'ÖVP',
      index: 0,
      data: [37.46, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'SPÖ',
      index: 1,
      data: [0, 21.18, 0, 0, 0, 0, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'FPÖ',
      index: 2,
      data: [0, 0, 16.17, 0, 0, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 13.90, 0, 0, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'NEOS',
      index: 4,
      data: [0, 0, 0, 0, 8.10, 0, 0],
      backgroundColor: '#E84188',
    },
    {
      label: 'BIER',
      index: 5,
      data: [0, 0, 0, 0, 0, 0.10, 0],
      backgroundColor: '#ffcc00',
    },
    {
      label: 'KPÖ',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.69],
      backgroundColor: '#aa0000',
    },
  ],
};

export const mandateData = {
    labels: ['ÖVP', 'SPÖ', 'FPÖ', 'Grüne', 'NEOS', 'BIER', 'KPÖ'],
    datasets: [
      {
        label: 'Mandate',
        data: [37.46, 21.18, 16.17, 13.90, 8.10, 0.10, 0.69],
        backgroundColor: [
          '#63c3d0',
          '#E31E2D',
          '#205CA5',
          '#51A51E',
          '#E84188',
          '#ffcc00',
          '#aa0000',
        ],
      },
    ],
  };

  export const majorityData = {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'ÖVP',
        data: [71],
        backgroundColor: '#63c3d0',
      },
      {
        label: 'SPÖ',
        data: [40],
        backgroundColor: '#E31E2D',
        hidden: true,
      },
      {
        label: 'FPÖ',
        data: [31],
        backgroundColor: '#205CA5',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [26],
        backgroundColor: '#51A51E',
      },
      {
        label: 'NEOS',
        data: [15],
        backgroundColor: '#E84188',
        hidden: true,
      },
      {
        label: 'BIER',
        data: [0],
        backgroundColor: '#ffcc00',
        hidden: true,
      },
      {
        label: 'KPÖ',
        data: [0],
        backgroundColor: '#aa0000',
        hidden: true,
      },
    ],
  };