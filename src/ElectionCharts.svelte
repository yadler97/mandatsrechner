<script>
    import { Bar, Doughnut } from 'svelte-chartjs';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';
    import { ApportionmentMethods, dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';

    import { getContext } from 'svelte'

    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from 'chart.js/auto';

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
        ChartDataLabels,
        annotationPlugin
    );

    let data = getContext('data');
    let mandateData = getContext('mandateData');
    let majorityData = getContext('majorityData');
    let mandateCount = getContext('mandateCount');
    let threshold = getContext('threshold');
    let apportionmentMethod = getContext('apportionmentMethod');
    let electionDate = getContext('electionDate');
    let baseMandateRule = getContext('baseMandateRule');
    let note = getContext('note');
    let majority = 0;
    $: {
        majority = Math.floor(($mandateCount / 2) + 1);
    }
    let twoThirdsMajority = 0;
    $: {
        twoThirdsMajority = Math.ceil(($mandateCount / 3 * 2));
    }

    if (electionDate.length == 1) {
        const dateObj = new Date(electionDate[0]);
        electionDate = dateObj.toLocaleDateString("de-AT", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    } else {
        const startDateObj = new Date(electionDate[0]);
        const endDateObj = new Date(electionDate[1]);
        electionDate = `${startDateObj.toLocaleDateString("de-AT", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })} - ${endDateObj.toLocaleDateString("de-AT", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })}`;
    }

    let mandates = [];

    let others;

    let selectedParties = 0;
    $: {
        selectedParties = 0;
        $majorityData.datasets.forEach((dataset, index) => {
            if (!dataset.hidden) {
                selectedParties += dataset.data[0];
            }
        });
    }

    $: {
        mandates = calcMandates($data.datasets);
    }

    function calcMandates(dataset) {
        let filteredIndices = dataset
            .map((party, index) => party.order != 2 ? index : -1)
            .filter(index => index !== -1);

        let votesShares = filteredIndices
            .map(index => dataset[index].data[dataset[index].index]);

        others = 100 - votesShares.reduce((a, b) => a + b, 0);

        let eligibleShares = votesShares.map((value, filteredIndex) => {
            const originalIndex = filteredIndices[filteredIndex];
            const checkbox = document.getElementById(`checkbox_party_${originalIndex}`);
            const isChecked = (checkbox instanceof HTMLInputElement) ? checkbox.checked : false;
            return (value < $threshold && !isChecked) ? 0 : value;
        });
        if (others >= -0.00001) {
            if ($apportionmentMethod == ApportionmentMethods.DHONDT) {
                mandates = dhondt([...eligibleShares], $mandateCount);
            } else if ($apportionmentMethod == ApportionmentMethods.SAINTE_LAGUE) {
                mandates = saintelague([...eligibleShares], $mandateCount);
            } else if ($apportionmentMethod == ApportionmentMethods.HARE_NIEMEYER) {
                mandates = hareniemeyer([...eligibleShares], $mandateCount);
            }
        }
        return mandates;
    }

    $: {
        $mandateData.datasets[1].data = mandates
        for (let i in mandates) {
            $majorityData.datasets[i].data = [mandates[i]]
        }
    }

    function validatePartyShare(index, partyIndex) {
        if ($data.datasets[index].data[partyIndex] > 100) {
            $data.datasets[index].data[partyIndex] = 100;
        }
    }
</script>
<h1>Stimmenanteile</h1>
<section class="vote_share_section">
    <div class="info_container">
        <p>Allgemeine Informationen</p>
        <table>
            <tr>
                <th>Wahltermin</th>
                <td>{electionDate}</td>
              </tr>
              <tr>
                <th>Abgeordnete</th>
                <td>{$mandateCount}</td>
              </tr>
              <tr>
                <th>Sperrklausel</th>
                <td>{#if $threshold > 0}
                    {$threshold} %
                  {:else}
                    keine
                  {/if}</td>
              </tr>
              <tr>
                <th>Sitzzuteilungsverfahren</th>
                <td>{$apportionmentMethod}</td>
              </tr>
        </table>
    </div>
    <div class="bar_container">
        <Bar data={$data} options={{ responsive: true, maintainAspectRatio: false, plugins: {
            datalabels: {
                anchor: 'end',  // Positions the labels above the bars
                align: 'top',
                color: 'black',
                font: {
                    weight: 'bold',
                },
                formatter: (value, context) => {
                    const { chart, dataIndex, datasetIndex } = context;

                    // Only place label on the last dataset in the stack
                    const lastDatasetIndex = chart.data.datasets.length - 1;
                    if (datasetIndex !== lastDatasetIndex) return ''; // Hide for other stacks

                    // Sum all values in this category (column)
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

                    return [totalCurrent.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), diffString];
                },
                labels: {
                    0: {
                        color: 'black',
                    },
                    1: {
                        color: (context) => {
                            const { chart, dataIndex, datasetIndex } = context;
                            const totalCurrent = chart.data.datasets.reduce((sum, dataset) => {
                                const val = dataset.data[dataIndex];
                                return typeof val === 'number' && dataset.order != 2 ? sum + val : sum;
                            }, 0);

                            const totalPrevious = chart.data.datasets.reduce((sum, dataset) => {
                                const val = dataset.data[dataIndex];
                                return typeof val === 'number' && dataset.order != 1 ? sum + val : sum;
                            }, 0);
                            const diff = totalCurrent - totalPrevious;
                            if (diff > 0) {
                                return 'green';
                            } else if (diff == 0) {
                                return 'black';
                            } else {
                                return 'red';
                            }
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
                } : {} // Empty object if threshold is 0 or less
            },
            legend: {
                display: true,
                labels: {
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
            },
            y: {
                stacked: true,
                suggestedMax: Math.max(...$data.labels.map((_, index) => 
                    $data.datasets.reduce((sum, party) => sum + (party.order != 2 ? party.data[index] : 0 || 0), 0)
                )) + 5
            },
        }
    }} />
    </div>
    
    <div class="input_fields_vote">
        {#each $data.datasets as party, i}
            {#if $data.datasets[i].order != 2}
                <div class="input_field_vote_party">
                    <label for="input_party_{i}">{party.label}</label>
                    <span class="valuePadding"><input id="input_party_{i}" type="number" step="any" bind:value={$data.datasets[i].data[party.index]} min=0 max=100 on:input={() => validatePartyShare(i, party.index)}> %</span>
                </div>
                {#if $data.datasets[i].data[party.index] < $threshold && baseMandateRule}
                    <div class="base_mandate_checkbox">
                        <label for="checkbox_party_{i}">{baseMandateRule} Grundmandat(e)?</label>
                        <input id="checkbox_party_{i}" type="checkbox" on:change={() => calcMandates($data.datasets)}>
                    </div>
                {/if}
            {/if}
        {/each}
        <div class="input_field_vote_party">
            <p>Sonstige:</p>
            <p>{others >= 0 ? others.toFixed(2) : 0}</p>
        </div>
        {#if others < -0.00001}
	        <p>Achtung: Gesamtstimmen dürfen 100% nicht überschreiten!</p>
        {/if}
    </div>
</section>

<h1>Mandatsverteilung</h1>
{#if note}
    <p>Achtung: {note}</p>
{/if}
<section class="mandate_section">
    <div class="pie_container">
        <Doughnut id="mandatesChart" data={$mandateData} options={{ responsive: true, cutout: '40%', circumference: 180, rotation: -90, plugins: {
            datalabels: {
                anchor: 'end',
                align: 'start',
                color: 'white',
                formatter: function(value) {
                    return value > 0 ? value : ''
                },
                font: {
                    weight: 'bold',
                    size: 20,
                }
            },
            legend: {
                display: true,
                labels: {
                    generateLabels: function(chart) {
                        const dataset = chart.data.datasets[1];
                        const labels = chart.data.labels || [];
                        const backgroundColors = dataset.backgroundColor || [];

                        return labels.map((label, i) => ({
                            text: String(label),
                            fillStyle: Array.isArray(backgroundColors) ? backgroundColors[i] || 'gray' : 'gray', 
                            strokeStyle: Array.isArray(backgroundColors) ? backgroundColors[i] || 'gray' : 'gray', 
                            lineWidth: 0,
                            index: i
                        }));
                    }
                },
                onClick: () => {
                    return false;
                }
            }
            }}} />
    </div>

    <div class="stack_container">
        <Bar data={$majorityData} options={{ responsive: true, indexAxis: 'y', scales: {y: {stacked: true}, x: {stacked: true, max: $mandateCount}}, plugins: {
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
                font: {
                    weight: 'bold',
                    size: 20,
                }
            },
            legend: {
                onClick: function(event, legendItem) {
                    if (legendItem.datasetIndex !== undefined) {
                        const datasetIndex = legendItem.datasetIndex;
                        const isVisible = $majorityData.datasets[datasetIndex].hidden;

                        // Toggle the visibility of selected party
                        $majorityData.datasets[datasetIndex].hidden = !isVisible;
                    }
                }
            }
        }}} />
        <p class="majorityText {selectedParties < majority ? 'red' : 'green'}">
            Mehrheit: {selectedParties}/{majority}
        </p>
        <p class="majorityText {selectedParties < twoThirdsMajority ? 'red' : 'green'}">
            Zweidrittelmehrheit: {selectedParties}/{twoThirdsMajority}
        </p>
    </div>
</section>