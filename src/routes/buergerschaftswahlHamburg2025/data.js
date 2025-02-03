export const data = {
  labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [39.23, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#E3000F',
    },
    {
      label: 'Grüne',
      index: 1,
      data: [0, 24.16, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#409A3C',
    },
    {
      label: 'CDU',
      index: 2,
      data: [0, 0, 11.17, 0, 0, 0, 0, 0],
      backgroundColor: '#151518',
    },
    {
      label: 'Linke',
      index: 3,
      data: [0, 0, 0, 9.08, 0, 0, 0, 0],
      backgroundColor: '#BE3075',
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 5.30, 0, 0, 0],
      backgroundColor: '#009EE0',
    },
    {
      label: 'FDP',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.97, 0, 0],
      backgroundColor: '#FFED00',
    },
    {
      label: 'Volt',
      index: 6,
      data: [0, 0, 0, 0, 0, 0, 1.29, 0],
      backgroundColor: '#8A2BE2',
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
    labels: ['SPD', 'Grüne', 'CDU', 'Linke', 'AfD', 'FDP', 'Volt', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [39.23, 24.16, 11.17, 9.08, 5.30, 4.97, 1.29, 0.00],
        backgroundColor: [
          '#E3000F',
          '#409A3C',
          '#151518',
          '#BE3075',
          '#009EE0',
          '#FFED00',
          '#8A2BE2',
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
        data: [54],
        backgroundColor: '#E3000F',
      },
      {
        label: 'Grüne',
        data: [33],
        backgroundColor: '#409A3C',
      },
      {
        label: 'CDU',
        data: [15],
        backgroundColor: '#151518',
        hidden: true,
      },
      {
        label: 'Linke',
        data: [12],
        backgroundColor: '#BE3075',
        hidden: true,
      },
      {
        label: 'AfD',
        data: [7],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'FDP',
        data: [0],
        backgroundColor: '#FFED00',
        hidden: true,
      },
      {
        label: 'Volt',
        data: [0],
        backgroundColor: '#8A2BE2',
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