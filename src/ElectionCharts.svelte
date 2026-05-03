<script>
    import { Bar, Doughnut } from 'svelte-chartjs';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';
    import { ApportionmentMethods, dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';
    import { formatDate, getMajority, getTwoThirdsMajority } from '$lib/helper';
    import { PartyColours, PartyColoursEU } from '$lib/partyColours';
    import { EUGroups } from '$lib/euGroups';

    import { getContext } from 'svelte'
    import { browser } from '$app/environment';

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

    let name = getContext('name');
    let data = getContext('data');
    let mandateData = getContext('mandateData');
    let majorityData = getContext('majorityData');
    let mandateCount = getContext('mandateCount');
    let threshold = getContext('threshold');
    let apportionmentMethod = getContext('apportionmentMethod');
    let electionDate = getContext('electionDate');
    let countryCode = getContext('countryCode');
    let baseMandateRule = getContext('baseMandateRule');
    let note = getContext('note');
    let majority = 0;
    $: {
        majority = getMajority($mandateCount);
    }
    let twoThirdsMajority = 0;
    $: {
        twoThirdsMajority = getTwoThirdsMajority($mandateCount);
    }

    let barChartData;
    let previousDatasets = [];
    let currentElectionName = "";

    let filteredData = { 
        labels: [], 
        datasets: [{ data: [], order: 0 }]
    };

    $: {
        const isNewElection = $name !== currentElectionName;

        const activeIndices = $data.labels
            .map((_, i) => i)
            .filter(i => $data.datasets.some(ds => ds.index === i && ds.reservedSeats === undefined));

        const newLabels = activeIndices.map(i => $data.labels[i]);
        filteredData.labels = newLabels;

        const sourceDatasets = $data.datasets.filter(ds => ds.reservedSeats === undefined);

        sourceDatasets.forEach((ds, i) => {
            const newData = activeIndices.map(idx => ds.data[idx] || 0);

            if (!filteredData.datasets[i]) {
                const { index, ...rest } = ds;
                filteredData.datasets[i] = { 
                    ...rest, 
                    data: newData,
                    order: 1,
                    stack: 'current',
                    categoryPercentage: 0.35,
                    barPercentage: 3
                };
            } else {
                filteredData.datasets[i].data = newData;
                filteredData.datasets[i].label = ds.label;
                filteredData.datasets[i].backgroundColor = ds.backgroundColor;
                filteredData.datasets[i].order = 1;
                filteredData.datasets[i].stack = 'current';
                filteredData.datasets[i].categoryPercentage = 0.35;
                filteredData.datasets[i].barPercentage = 3;
                delete filteredData.datasets[i].index;
            }
        });

        if (isNewElection) {
            previousDatasets = sourceDatasets.map(ds => {
                const partyKey = ds.label;

                return {
                    ...ds,
                    label: `${ds.label} (Previous)`,
                    data: [...ds.data],
                    order: 2,
                    stack: 'previous',
                    backgroundColor: PartyColours[$countryCode][partyKey]?.trans || ds.backgroundColor, 
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,
                };
            });
            currentElectionName = $name;
        }

        if (filteredData.datasets.length > sourceDatasets.length) {
            filteredData.datasets = filteredData.datasets.slice(0, sourceDatasets.length);
        }

        barChartData = {
            labels: filteredData.labels,
            datasets: [...previousDatasets, ...filteredData.datasets]
        };
    }

    let displayDate = "";
    $: {
        const rawDates = $electionDate; 
        displayDate = formatDate(rawDates);
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

    let calculationHistory = [];
    let eligibleIndices = [];

    function calcMandates(dataset) {
        const filteredParties = dataset.filter(party => party.order !== 2);

        const totalVotesInDataset = filteredParties.reduce((sum, party) => {
            return sum + (party.data[party.index] || 0);
        }, 0);

        others = 100 - totalVotesInDataset;

        const currentIndices = filteredParties
            .map((party, index) => (party.order != 2 && party.reservedSeats === undefined) ? index : -1)
            .filter(index => {
                if (index === -1) return false;
                const value = filteredParties[index].data[filteredParties[index].index];

                let isChecked = false;
                if (browser) {
                    const checkbox = document.getElementById(`checkbox_party_${index}`);
                    isChecked = (checkbox instanceof HTMLInputElement) ? checkbox.checked : false;
                }
                return value >= $threshold || isChecked;
            });

        eligibleIndices = currentIndices;

        const reservedParties = dataset.filter(p => p.reservedSeats !== undefined && p.order != 2);
        const totalReservedSeats = reservedParties.reduce((sum, p) => sum + p.reservedSeats, 0);
        const nonReservedMandateCount = $mandateCount - totalReservedSeats;

        let eligibleShares = eligibleIndices.map(idx => dataset[idx].data[dataset[idx].index]);
        let finalMandates = new Array(filteredParties.length).fill(0);

        if (eligibleShares.length > 0 && nonReservedMandateCount > 0) {
            let result;
            if ($apportionmentMethod == ApportionmentMethods.DHONDT) {
                result = dhondt(eligibleShares, nonReservedMandateCount);
            } else if ($apportionmentMethod == ApportionmentMethods.SAINTE_LAGUE) {
                result = saintelague(eligibleShares, nonReservedMandateCount);
            } else {
                result = hareniemeyer(eligibleShares, nonReservedMandateCount);
            }

            calculationHistory = result.history || [];

            eligibleIndices.forEach((origIdx, i) => {
                finalMandates[origIdx] = result.mandates[i];
            });
        }

        dataset.forEach((party, i) => {
            if (party.reservedSeats !== undefined) finalMandates[i] = party.reservedSeats;
        });

        return finalMandates;
    }

    let tableView = 'rounds'; // 'rounds' or 'divisors'
    let divisorGrid = [];
    let lowestWinningQuotient = 0;

    $: if (calculationHistory.length > 0) {
        // Find the quotient that won the very last mandate
        lowestWinningQuotient = calculationHistory[calculationHistory.length - 1].quotients[
            calculationHistory[calculationHistory.length - 1].winnerIdx
        ];

        // Generate the grid (rows = divisors 1, 2, 3...)
        // We show divisors up to the max seats any single party won + a few extra
        const maxSeats = Math.max(...mandates) + 1;
        const currentShares = eligibleIndices.map(idx => $data.datasets[idx].data[$data.datasets[idx].index]);
        
        divisorGrid = Array.from({ length: maxSeats }, (_, i) => {
            const d = $apportionmentMethod === ApportionmentMethods.SAINTE_LAGUE ? (i + 0.5) : (i + 1);
            return {
                divisor: d,
                values: currentShares.map(share => share / d)
            };
        });
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
            <tbody>
                <tr>
                    <th>Wahltermin</th>
                    <td>{displayDate}</td>
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
            </tbody>
        </table>
    </div>
    <div class="bar_container">
        <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: {
            datalabels: {
                anchor: 'end',  // Positions the labels above the bars
                align: 'top',
                color: 'black',
                font: {
                    weight: 'bold',
                },
                formatter: (value, context) => {
                    const { chart, dataIndex, datasetIndex } = context;

                    const currentDataset = chart.data.datasets[datasetIndex];
                    if (currentDataset['reservedSeats']) {
                        return null;
                    }

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
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                suggestedMax: Math.max(...filteredData.labels.map((_, index) => 
                    filteredData.datasets.reduce((sum, party) => sum + (party.order != 2 ? party.data[index] : 0 || 0), 0)
                )) + 5
            },
        }
    }} />
    </div>
    
    <div class="input_fields_vote">
        {#each $data.datasets as party, i}
            {#if $data.datasets[i].order != 2 && !party.reservedSeats}
                <div class="input_field_vote_party">
                    <div class="display-group">
                        <span class="color-preview" style="background-color: {party.backgroundColor}"></span>
                        <div class="label-stack">
                            <label for="input_party_{i}">{party.label}</label>
                            <span 
                                class="eu-group-tag" 
                                style="
                                    background-color: {PartyColoursEU[EUGroups[$countryCode]?.[party.label]]?.bg || '#999999'};
                                    color: {PartyColoursEU[EUGroups[$countryCode]?.[party.label]]?.text || 'white'};
                                "
                            >
                                {EUGroups[$countryCode]?.[party.label] || 'NI'}
                            </span>
                        </div>
                    </div>
                    <span class="valuePadding"><input id="input_party_{i}" type="number" step="any" bind:value={$data.datasets[i].data[party.index]} min=0 max=100 on:input={() => validatePartyShare(i, party.index)}> %</span>
                </div>
                {#if $data.datasets[i].data[party.index] < $threshold && $baseMandateRule}
                    <div class="base_mandate_checkbox">
                        <label for="checkbox_party_{i}">{$baseMandateRule} Grundmandat(e)?</label>
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
{#if $note}
    <p>Achtung: {$note}</p>
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

<h1>Berechnungsschritte</h1>
<section class="calculation_logic_section">
    {#if $apportionmentMethod !== ApportionmentMethods.HARE_NIEMEYER}
        <div class="toggle-group">
            <button class:active={tableView === 'rounds'} on:click={() => tableView = 'rounds'}>
                Runden-Ansicht
            </button>
            <button class:active={tableView === 'divisors'} on:click={() => tableView = 'divisors'}>
                Divisor-Tabelle
            </button>
        </div>
    {/if}

    <div class="table_wrapper">
        <table>
            <thead>
                <tr>
                    <th class="sticky-col">
                        {#if $apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                            Phase
                        {:else}
                            {tableView === 'rounds' ? 'Mandat' : 'Divisor'}
                        {/if}
                    </th>
                    {#each eligibleIndices as idx}
                        <th>
                            <div class="party-header">
                                <span class="color-bar" style="background-color: {$data.datasets[idx].backgroundColor}"></span>
                                <span class="party-label">{ $data.datasets[idx].label }</span>
                            </div>
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#if tableView === 'rounds' || $apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                    {#each calculationHistory as step}
                        <tr>
                            <td class="sticky-col">
                                <strong>
                                    {#if $apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                                        {step.seat === 0 ? 'Quote' : `Rest ${step.seat}. Mandat`}
                                    {:else}
                                        {step.seat}. Mandat
                                    {/if}
                                </strong>
                            </td>
                            {#each step.quotients as q, i}
                                <td class:winner={step.winnerIdx === i} 
                                    class:initial-row={$apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER && step.seat === 0}>
                                    { q.toLocaleString('de-AT', { 
                                        minimumFractionDigits: 3,
                                        maximumFractionDigits: $apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER ? 5 : 3
                                    }) }
                                </td>
                            {/each}
                        </tr>
                    {/each}
                {:else}
                    {#each divisorGrid as row}
                        <tr>
                            <td class="sticky-col"><strong>/{row.divisor}</strong></td>
                            {#each row.values as val}
                                <td class:winner={val >= lowestWinningQuotient}>
                                    { val.toLocaleString('de-AT', { minimumFractionDigits: 3 }) }
                                </td>
                            {/each}
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</section>