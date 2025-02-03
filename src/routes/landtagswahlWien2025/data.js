export const name = 'Landtags- und Gemeinderatswahl Wien 2025';
export const date = '2025-04-27'

export const data = {
  labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'LINKS', 'BIER', 'SÖZ'],
  datasets: [
    {
      label: 'SPÖ',
      index: 0,
      data: [41.62, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#E31E2D',
    },
    {
      label: 'ÖVP',
      index: 1,
      data: [0, 20.43, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#63c3d0',
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.80, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#51A51E',
    },
    {
      label: 'NEOS',
      index: 3,
      data: [0, 0, 0, 7.47, 0, 0, 0, 0, 0],
      backgroundColor: '#E84188',
    },
    {
      label: 'FPÖ',
      index: 4,
      data: [0, 0, 0, 0, 7.11, 0, 0, 0, 0],
      backgroundColor: '#205CA5',
    },
    {
      label: 'HC',
      index: 5,
      data: [0, 0, 0, 0, 0, 3.27, 0, 0, 0],
      backgroundColor: '#173253',
    },
    {
      label: 'LINKS',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 2.06, 0, 0],
      backgroundColor: '#5C0AA3',
    },
    {
      label: 'BIER',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 1.80, 0],
      backgroundColor: '#FFCC00',
    },
    {
      label: 'SÖZ',
      index: 8,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 1.20],
      backgroundColor: '#3C2D82',
    },
  ],
};

export const mandateData = {
    labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'LINKS', 'BIER', 'SÖZ'],
    datasets: [
      {
        label: 'Mandate',
        data: [41.62, 20.43, 14.80, 7.47, 7.11, 3.27, 2.06, 1.80, 1.20],
        backgroundColor: [
          '#E31E2D',
          '#63c3d0',
          '#51A51E',
          '#E84188',
          '#205CA5',
          '#173253',
          '#5C0AA3',
          '#FFCC00',
          '#3C2D82',
        ],
      },
    ],
  };

  export const majorityData = {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'SPÖ',
        data: [46],
        backgroundColor: '#E31E2D',
      },
      {
        label: 'ÖVP',
        data: [22],
        backgroundColor: '#63c3d0',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [16],
        backgroundColor: '#51A51E',
        hidden: true,
      },
      {
        label: 'NEOS',
        data: [8],
        backgroundColor: '#E84188',
      },
      {
        label: 'FPÖ',
        data: [8],
        backgroundColor: '#205CA5',
        hidden: true,
      },
      {
        label: 'HC',
        data: [0],
        backgroundColor: '#173253',
        hidden: true,
      },
      {
        label: 'LINKS',
        data: [0],
        backgroundColor: '#5C0AA3',
        hidden: true,
      },
      {
        label: 'BIER',
        data: [0],
        backgroundColor: '#FFCC00',
        hidden: true,
      },
      {
        label: 'SÖZ',
        data: [0],
        backgroundColor: '#3C2D82',
        hidden: true,
      },
    ],
  };