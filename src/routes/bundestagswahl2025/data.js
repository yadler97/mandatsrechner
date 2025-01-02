export const data = {
    labels: ['SPD', 'CDU', 'Grüne', 'FDP', 'AfD', 'CSU', 'Linke', 'BSW'],
    datasets: [
      {
        label: 'Stimmenanteil in %',
        data: [25.74, 18.90, 14.75, 11.46, 10.34, 5.17, 4.89, 0.00],
        backgroundColor: [
          '#E3000F',
          '#151518',
          '#409A3C',
          '#FFED00',
          '#009EE0',
          '#008AC5',
          '#BE3075',
          '#7D254F',
        ],
      },
    ],
  };

export const mandateData = {
    labels: ['SPD', 'CDU', 'Grüne', 'FDP', 'AfD', 'CSU', 'Linke', 'BSW'],
    datasets: [
      {
        label: 'Mandate',
        data: [25.74, 18.90, 14.75, 11.46, 10.34, 5.17, 4.89, 0.00],
        backgroundColor: [
          '#E3000F',
          '#151518',
          '#409A3C',
          '#FFED00',
          '#009EE0',
          '#008AC5',
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
        data: [71],
        backgroundColor: '#E3000F',
      },
      {
        label: 'CDU',
        data: [40],
        backgroundColor: '#151518',
        hidden: true,
      },
      {
        label: 'Grüne',
        data: [31],
        backgroundColor: '#409A3C',
      },
      {
        label: 'FDP',
        data: [26],
        backgroundColor: '#FFED00',
      },
      {
        label: 'AfD',
        data: [15],
        backgroundColor: '#009EE0',
        hidden: true,
      },
      {
        label: 'CSU',
        data: [0],
        backgroundColor: '#008AC5',
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