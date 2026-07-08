export function createBarChartOptions({ electionState, filteredData, threshold, chartColors }) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            bar: {
                borderWidth: 1,
                borderColor: '#ffffff',
                borderSkipped: 'bottom'
            }
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: chartColors.text,
                font: { weight: 'bold' },
                formatter: (value, context) => {
                    const { chart, dataIndex, datasetIndex } = context;
 
                    const currentDataset = chart.data.datasets[datasetIndex];
                    if (currentDataset['reservedSeats']) return null;
 
                    const lastDatasetIndex = chart.data.datasets.length - 1;
                    if (datasetIndex !== lastDatasetIndex) return '';
 
                    const totalCurrent = chart.data.datasets.reduce((sum, dataset) => {
                        const val = dataset.data[dataIndex];
                        return typeof val === 'number' && dataset.order != 2 ? sum + val : sum;
                    }, 0);
 
                    const totalPrevious = chart.data.datasets.reduce((sum, dataset) => {
                        const val = dataset.data[dataIndex];
                        return typeof val === 'number' && dataset.order != 1 ? sum + val : sum;
                    }, 0);
 
                    const diff = totalCurrent - totalPrevious;
                    let diffString;
                    if (diff > 0) {
                        diffString = "+" + diff.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    } else if (diff == 0) {
                        diffString = "±" + diff.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    } else {
                        diffString = diff.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }
 
                    return [
                        totalCurrent.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                        diffString
                    ];
                },
                labels: {
                    0: { color: chartColors.text },
                    1: {
                        color: (context) => {
                            const { chart, dataIndex } = context;
                            const totalCurrent = chart.data.datasets.reduce((sum, dataset) => {
                                const val = dataset.data[dataIndex];
                                return typeof val === 'number' && dataset.order != 2 ? sum + val : sum;
                            }, 0);
                            const totalPrevious = chart.data.datasets.reduce((sum, dataset) => {
                                const val = dataset.data[dataIndex];
                                return typeof val === 'number' && dataset.order != 1 ? sum + val : sum;
                            }, 0);
                            const diff = totalCurrent - totalPrevious;
                            if (diff > 0) return chartColors.green;
                            if (diff == 0) return chartColors.text;
                            return chartColors.red;
                        }
                    }
                }
            },
            annotation: {
                annotations: threshold > 0 ? {
                    majorityLine: {
                        type: 'line',
                        yMin: threshold,
                        yMax: threshold,
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 2,
                    }
                } : {}
            },
            legend: {
                display: true,
                labels: {
                    color: chartColors.text,
                    filter: (legendItem, chartData) => {
                        const visibleLabels = chartData.datasets
                            .filter(item => item.order != 2)
                            .map(item => item.label);
                        return visibleLabels.includes(legendItem.text);
                    },
                },
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: { color: chartColors.textMuted }
            },
            y: {
                stacked: true,
                ticks: { color: chartColors.textMuted },
                grid: {
                    color: chartColors.grid,
                    drawBorder: true,
                    borderColor: chartColors.border
                },
                suggestedMax: (() => {
                    if (!filteredData?.labels || filteredData.datasets.length === 0) return 100;
                    return Math.max(...filteredData.labels.map((_, index) =>
                        filteredData.datasets.reduce((sum, party) =>
                            sum + (party.order != 2 ? (party.data[index] || 0) : 0), 0
                        )
                    )) + 5;
                })()
            },
        }
    };
}

export function createMandateChartOptions({ dataIndex, chartColors }) {
    return {
        responsive: true,
        cutout: '40%',
        circumference: 180,
        rotation: -90,
        elements: {
            arc: {
                borderWidth: 1,
                borderColor: '#ffffff'
            }
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'start',
                color: 'white',
                formatter: function(value) {
                    return value > 0 ? value : ''
                },
                font: { weight: 'bold', size: 20 }
            },
            legend: {
                display: true,
                labels: {
                    generateLabels: function(chart) {
                        const dataset = chart.data.datasets[dataIndex];
                        const labels = chart.data.labels || [];
                        const backgroundColors = dataset.backgroundColor || [];

                        return labels.map((label, i) => ({
                            text: String(label),
                            fontColor: chartColors.text,
                            fillStyle: Array.isArray(backgroundColors) ? backgroundColors[i] || 'gray' : 'gray',
                            strokeStyle: 'white',
                            lineWidth: 1,
                            index: i
                        }));
                    }
                },
                onClick: () => false,
            }
        }
    };
}

export function createMajorityChartOptions({ electionState, mandateCount, majority, twoThirdsMajority, chartColors }) {
    return {
        responsive: true,
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
                borderColor: '#ffffff',
                borderSkipped: 'none'
            }
        },
        scales: {
            y: {
                stacked: true,
                ticks: { color: chartColors.textMuted }
            },
            x: {
                stacked: true,
                max: mandateCount,
                ticks: { color: chartColors.textMuted }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    majorityLine: {
                        type: 'line',
                        xMin: majority,
                        xMax: majority,
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 3,
                    },
                    twoThirdsMajorityLine: {
                        type: 'line',
                        xMin: twoThirdsMajority,
                        xMax: twoThirdsMajority,
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1,
                    }
                }
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: 'white',
                formatter: function(value) {
                    return value > 0 ? value : ''
                },
                font: { weight: 'bold', size: 20 }
            },
            legend: {
                labels: {
                    color: chartColors.text,
                },
                onClick: function(event, legendItem) {
                    if (legendItem.datasetIndex !== undefined) {
                        const datasetIndex = legendItem.datasetIndex;
                        const isVisible = electionState.majorityData.datasets[datasetIndex].hidden;
                        electionState.majorityData.datasets[datasetIndex].hidden = !isVisible;
                    }
                }
            }
        }
    };
}