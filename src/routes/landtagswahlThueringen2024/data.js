export const name = 'Landtagswahl Thüringen 2024';
export const date = '2024-09-01'

export const data = {
  labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'Linke',
      index: 0,
      data: [31.02, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#BE3075',
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.40, 0, 0, 0, 0, 0],
      backgroundColor: '#009EE0',
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 21.75, 0, 0, 0, 0],
      backgroundColor: '#151518',
    },
    {
      label: 'SPD',
      index: 3,
      data: [0, 0, 0, 8.21, 0, 0, 0],
      backgroundColor: '#E3000F',
    },
    {
      label: 'Grüne',
      index: 4,
      data: [0, 0, 0, 0, 5.19, 0, 0],
      backgroundColor: '#409A3C',
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.01, 0],
      backgroundColor: '#FFED00',
    },
    {
      label: 'BSW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: '#7D254F',
    },
  ],
};

export const mandateData = {
    labels: ['Linke', 'AfD', 'CDU', 'SPD', 'Grüne', 'FDP', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [31.02, 23.40, 21.75, 8.21, 10.72, 5.19, 5.01, 0.00],
        backgroundColor: [
          '#BE3075',
          '#009EE0',
          '#151518',
          '#E3000F',
          '#409A3C',
          '#FFED00',
          '#7D254F',
        ],
      },
    ],
  };

  export const majorityData = {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'Linke',
        data: [29],
        backgroundColor: '#BE3075',
      },
      {
        label: 'AfD',
        data: [22],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'CDU',
        data: [21],
        backgroundColor: '#151518',
        hidden: true,
      },
      {
        label: 'SPD',
        data: [8],
        backgroundColor: '#E3000F',
      },
      {
        label: 'Grüne',
        data: [5],
        backgroundColor: '#409A3C',
      },
      {
        label: 'FDP',
        data: [5],
        backgroundColor: '#FFED00',
        hidden: true,
      },
      {
        label: 'BSW',
        data: [0],
        backgroundColor: '#7D254F',
        hidden: true,
      },
    ],
  };