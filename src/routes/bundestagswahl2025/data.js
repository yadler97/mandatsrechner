export const name = 'Bundestagswahl 2025';
export const date = '2025-02-23'

export const data = {
  labels: ['SPD', 'CDU/CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
  datasets: [
    {
      label: 'SPD',
      index: 0,
      data: [25.74, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#E3000F',
    },
    {
      label: 'CDU',
      index: 1,
      data: [0, 18.90, 0, 0, 0, 0, 0],
      backgroundColor: '#151518',
    },
    {
      label: 'CSU',
      index: 1,
      data: [0, 5.17, 0, 0, 0, 0, 0],
      backgroundColor: '#008AC5',
    },
    {
      label: 'Grüne',
      index: 2,
      data: [0, 0, 14.75, 0, 0, 0, 0],
      backgroundColor: '#409A3C',
    },
    {
      label: 'FDP',
      index: 3,
      data: [0, 0, 0, 11.46, 0, 0, 0],
      backgroundColor: '#FFED00',
    },
    {
      label: 'AfD',
      index: 4,
      data: [0, 0, 0, 0, 10.34, 0, 0],
      backgroundColor: '#009EE0',
    },
    {
      label: 'Linke',
      index: 5,
      data: [0, 0, 0, 0, 0, 4.89, 0],
      backgroundColor: '#BE3075',
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
    labels: ['SPD', 'CDU', 'CSU', 'Grüne', 'FDP', 'AfD', 'Linke', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [25.74, 18.90, 5.17, 14.75, 11.46, 10.34, 4.89, 0.00],
        backgroundColor: [
          '#E3000F',
          '#151518',
          '#008AC5',
          '#409A3C',
          '#FFED00',
          '#009EE0',
          '#BE3075',
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
        data: [188],
        backgroundColor: '#E3000F',
      },
      {
        label: 'CDU',
        data: [138],
        backgroundColor: '#151518',
        hidden: true,
      },
      {
        label: 'CSU',
        data: [38],
        backgroundColor: '#008AC5',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [107],
        backgroundColor: '#409A3C',
      },
      {
        label: 'FDP',
        data: [84],
        backgroundColor: '#FFED00',
      },
      {
        label: 'AfD',
        data: [75],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'Linke',
        data: [0],
        backgroundColor: '#BE3075',
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