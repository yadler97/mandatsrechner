<script>
    import { Bar, Doughnut } from 'svelte-chartjs';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';
    import { dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';

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
    let mandateCount = 10;
    let threshold = 4;
    let apportionmentMethod = 'D\'Hondt';
    let majority = 0;
    $: {
        majority = Math.floor((mandateCount / 2) + 1);
    }
    let twoThirdsMajority = 0;
    $: {
        twoThirdsMajority = Math.ceil((mandateCount / 3 * 2));
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
        mandates = calcMandates($data.datasets, mandateCount, apportionmentMethod, threshold);
    }

    function calcMandates(dataset, mandateCount, apportionmentMethod, threshold) {
        let votesShares = dataset.map(party => party.data[party.index]);
        others = 100 - votesShares.reduce((a, b) => a + b, 0);
        let eligibleShares = votesShares.map((value, index) => {
            const checkbox = document.getElementById(`checkbox_party_${index}`);
            const isChecked = (checkbox instanceof HTMLInputElement) ? checkbox.checked : false;
            return (value < threshold && !isChecked) ? 0 : value;
        });
        if (others >= -0.00001) {
            if (apportionmentMethod == 'D\'Hondt') {
                mandates = dhondt([...eligibleShares], mandateCount);
            } else if (apportionmentMethod == 'Sainte-Laguë') {
                mandates = saintelague([...eligibleShares], mandateCount);
            } else if (apportionmentMethod == 'Hare-Niemeyer') {
                mandates = hareniemeyer([...eligibleShares], mandateCount);
            }
        }
        return mandates;
    }

    $: {
        $mandateData.datasets[0].data = mandates
        for (let i in mandates) {
            $majorityData.datasets[i].data = [mandates[i]]
        }
    }

    function validateMandateCount(event) {
        let value = event.target.value;
        if (Number(value) > 1000) {
            mandateCount = 1000;
        }
    }

    function validateThreshold(event) {
        let value = event.target.value;
        if (Number(value) > 100) {
            threshold = 100;
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
                <th><label for="input_mandate_count">Abgeordnete</label></th>
                <td><input id="input_mandate_count" type="number" bind:value={mandateCount} min=0 max=1000 on:input={validateMandateCount}></td>
            </tr>
            <tr>
                <th><label for="input_threshold">Sperrklausel</label></th>
                <td><span class="valuePadding"><input id="input_threshold" type="number" bind:value={threshold} min=0 max=100 on:input={validateThreshold}> %</span></td>
            </tr>
            <tr>
                <th><label for="input_apportionment_method">Sitzzuteilungsverfahren</label></th>
                <td><select class="selectApportionmentMethod" id="input_apportionment_method" bind:value={apportionmentMethod}><option>D'Hondt</option><option>Sainte-Laguë</option><option>Hare-Niemeyer</option></select></td>
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
                    const total = chart.data.datasets.reduce((sum, dataset) => {
                    const val = dataset.data[dataIndex];
                    return typeof val === 'number' ? sum + val : sum;
                    }, 0);

                    return total.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Display total value once per stack
                },
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
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                suggestedMax: Math.max(...$data.labels.map((_, index) => 
                    $data.datasets.reduce((sum, party) => sum + (party.data[index] || 0), 0)
                )) + 5
            },
        }
    }} />
    </div>
    
    <div class="input_fields_vote">
        {#each $data.datasets as party, i}
            <div class="input_field_vote_party">
                <label for="input_party_{i}">{party.label}</label>
                <span class="valuePadding"><input id="input_party_{i}" type="number" bind:value={$data.datasets[i].data[party.index]} min=0 max=100 on:input={() => validatePartyShare(i, party.index)}> %</span>
            </div>
        {/each}
        <div class="input_field_vote_party">
            <p>Sonstige:</p>
            <p>{others >= 0 ? others.toFixed(2) : 0}</p>
        </div>
        {#if others < 0}
	        <p>Achtung: Gesamtstimmen dürfen 100% nicht überschreiten!</p>
        {/if}
    </div>
</section>

<h1>Mandatsverteilung</h1>
<section class="mandate_section">
    <div class="pie_container">
        <Doughnut id="mandatesChart" data={$mandateData} options={{ responsive: true, circumference: 180, rotation: -90, plugins: {
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
            }}}} />
    </div>

    <div class="stack_container">
        <Bar data={$majorityData} options={{ responsive: true, indexAxis: 'y', scales: {y: {stacked: true}, x: {stacked: true, max: mandateCount}}, plugins: {
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