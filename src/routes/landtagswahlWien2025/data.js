export const data = {
    labels: ['SPÖ', 'ÖVP', 'Grüne', 'NEOS', 'FPÖ', 'HC', 'LINKS', 'BIER', 'SÖZ'],
    datasets: [
      {
        label: 'Stimmenanteil in %',
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