export const name = 'Landtagswahl Sachsen 2024';
export const date = '2024-09-01'

export const data = {
  labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
  datasets: [
    {
      label: 'CDU',
      index: 0,
      data: [31.11, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#151518',
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 27.50, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#009EE0',
    },
    {
      label: 'Linke',
      index: 2,
      data: [0, 0, 10.36, 0, 0, 0, 0, 0],
      backgroundColor: '#BE3075',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 8.63, 0, 0, 0, 0],
      backgroundColor: '#409A3C',
    },
    {
      label: 'SPD',
      index: 4,
      data: [0, 0, 0, 0, 7.72, 0, 0, 0],
      backgroundColor: '#E3000F',
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.50, 0, 0],
      backgroundColor: '#FFED00',
    },
    {
      label: 'FW',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 3.36, 0],
      backgroundColor: '#F8A501',
    },
    {
      label: 'BSW',
      index: 7,
      data: [0, 0, 0, 0, 0, 0, 0, 0.00],
      backgroundColor: '#7D254F',
    },
  ],
};

export const mandateData = {
    labels: ['CDU', 'AfD', 'Linke', 'Grüne', 'SPD', 'FDP', 'FW', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [31.11, 27.50, 10.36, 8.63, 7.72, 4.50, 3.36, 0.00],
        backgroundColor: [
          '#151518',
          '#009EE0',
          '#BE3075',
          '#409A3C',
          '#E3000F',
          '#FFED00',
          '#F8A501',
          '#7D254F',
        ],
      },
    ],
  };

  export const majorityData = {
    labels: ['Mandate'],
    datasets: [
      {
        label: 'CDU',
        data: [45],
        backgroundColor: '#151518',
      },
      {
        label: 'AfD',
        data: [38],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'Linke',
        data: [14],
        backgroundColor: '#BE3075',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [12],
        backgroundColor: '#409A3C',
      },
      {
        label: 'SPD',
        data: [10],
        backgroundColor: '#E3000F',
      },
      {
        label: 'FDP',
        data: [0],
        backgroundColor: '#FFED00',
        hidden: true,
      },
      {
        label: 'BVB/FW',
        data: [5],
        backgroundColor: '#F8A501',
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