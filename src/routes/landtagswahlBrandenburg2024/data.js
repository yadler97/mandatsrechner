export const name = 'Landtagswahl Brandenburg 2024';
export const date = '2024-09-22'

export const data = {
  labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [26.18, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#E3000F',
    },
    {
      label: 'AfD',
      index: 1,
      data: [0, 23.51, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#009EE0',
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 15.57, 0, 0, 0, 0, 0],
      backgroundColor: '#151518',
    },
    {
      label: 'Grüne',
      index: 3,
      data: [0, 0, 0, 10.78, 0, 0, 0, 0],
      backgroundColor: '#409A3C',
    },
    {
      label: 'Linke',
      index: 4,
      data: [0, 0, 0, 0, 10.72, 0, 0, 0],
      backgroundColor: '#BE3075',
    },
    {
      label: 'BVB/FW',
      index: 5,
      data: [0, 0, 0, 0, 0, 5.05, 0, 0],
      backgroundColor: '#F8A501',
    },
    {
      label: 'FDP',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 4.08, 0],
      backgroundColor: '#FFED00',
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
    labels: ['SPD', 'AfD', 'CDU', 'Grüne', 'Linke', 'BVB/FW', 'FDP', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [26.18, 23.51, 15.57, 10.78, 10.72, 5.05, 4.08, 0.00],
        backgroundColor: [
          '#E3000F',
          '#009EE0',
          '#151518',
          '#409A3C',
          '#BE3075',
          '#F8A501',
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
        label: 'SPD',
        data: [25],
        backgroundColor: '#E3000F',
      },
      {
        label: 'AfD',
        data: [23],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'CDU',
        data: [15],
        backgroundColor: '#151518',
      },
      {
        label: 'Grüne',
        data: [10],
        backgroundColor: '#409A3C',
      },
      {
        label: 'Linke',
        data: [10],
        backgroundColor: '#BE3075',
        hidden: true,
      },
      {
        label: 'BVB/FW',
        data: [5],
        backgroundColor: '#F8A501',
        hidden: true,
      },
      {
        label: 'FDP',
        data: [0],
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