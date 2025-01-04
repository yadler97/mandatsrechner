<script>
    import { Bar, Pie } from 'svelte-chartjs';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';

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
        majorityData.datasets.forEach((dataset, index) => {
            if (!dataset.hidden) {
                selectedParties += dataset.data[0];
            }
        });
    }

    $: {
        others = 100 - data.datasets[0].data.reduce((a, b) => a + b, 0)
        if (others >= 0) {
            data.datasets[0].data = data.datasets[0].data
            if (apportionmentMethod == 'D\'Hondt') {
                mandates = dhondt([...data.datasets[0].data], mandateCount, threshold)
            } else if (apportionmentMethod == 'Sainte-Laguë') {
                mandates = saintelague([...data.datasets[0].data], mandateCount, threshold)
            }
        }
    }

    function dhondt(vote_shares, mandate_count, threshold) {
        let mandates = []
        let current_divisors = []
        let current_vote_count = [...vote_shares]

        for (let i in vote_shares) {
            current_divisors.push(1)
            mandates.push(0)

            if (vote_shares[i] < threshold) {
                vote_shares[i] = 0
                current_vote_count[i] = 0
            }
        }

        for (let i = 0; i < mandate_count; i++) {
            let idx = current_vote_count.indexOf(Math.max(...current_vote_count));
            current_divisors[idx] = current_divisors[idx] + 1
            mandates[idx] = mandates[idx] + 1
            current_vote_count[idx] = vote_shares[idx] / current_divisors[idx]
        }

        return mandates
    }

    function saintelague(vote_shares, mandate_count, threshold) {
        let mandates = []
        let current_divisors = new Array(vote_shares.length).fill(0.5);
        let current_vote_count = [...vote_shares]

        for (let i in vote_shares) {
            current_divisors.push(1)
            mandates.push(0)

            if (vote_shares[i] < threshold) {
                vote_shares[i] = 0
                current_vote_count[i] = 0
            }
        }

        for (let i = 0; i < mandate_count; i++) {
            let idx = current_vote_count.indexOf(Math.max(...current_vote_count));
            current_divisors[idx] = current_divisors[idx] + 1
            mandates[idx] = mandates[idx] + 1
            current_vote_count[idx] = vote_shares[idx] / current_divisors[idx]
        }

        return mandates
    }

    $: {
        mandateData.datasets[0].data = mandates
        for (let i in mandates) {
            majorityData.datasets[i].data = [mandates[i]]
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
                <td><input id="input_mandate_count" type="number" bind:value={mandateCount} min=0 max=1000></td>
            </tr>
            <tr>
                <th><label for="input_threshold">Sperrklausel</label></th>
                <td><span class="valuePadding"><input id="input_threshold" type="number" bind:value={threshold} min=0 max=100> %</span></td>
            </tr>
            <tr>
                <th><label for="input_apportionment_method">Sitzzuteilungsverfahren</label></th>
                <td><select class="selectApportionmentMethod" bind:value={apportionmentMethod}><option>D'Hondt</option><option>Sainte-Laguë</option></select></td>
            </tr>
        </table>
    </div>
    <div class="bar_container">
        <Bar {data} options={{ responsive: true, plugins: {
            datalabels: {
                display: false
            }
        } }} />
    </div>
    
    <div class="input_fields_vote">
        {#each data.datasets[0].data as party, i}
            <div class="input_field_vote_party">
                <label for="input_party_{i}">{data.labels[i]}</label>
                <input id="input_party_{i}" type="number" bind:value={data.datasets[0].data[i]} min=0 max=100>
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
        <Pie id="mandatesChart" data={mandateData} options={{ responsive: true, circumference: 180, rotation: -90, plugins: {
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
        <Bar data={majorityData} options={{ responsive: true, indexAxis: 'y', scales: {y: {stacked: true}, x: {stacked: true, max: mandateCount}}, plugins: {
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
                        const isVisible = majorityData.datasets[datasetIndex].hidden;

                        // Toggle the visibility of selected party
                        majorityData.datasets[datasetIndex].hidden = !isVisible;
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