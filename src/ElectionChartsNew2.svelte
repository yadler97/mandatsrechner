<script>
    import ChartCanvas from './ChartCanvas.svelte';
    import { getContext, untrack } from 'svelte';

    import { formatDate, getMajority, getTwoThirdsMajority } from '$lib/helper';
    import { PartyColours, PartyColoursEU } from '$lib/partyColours';
    import { EUGroupNames, EUGroups } from '$lib/euGroups';

    let electionState = getContext('electionState');

    // Derived logic: Directly tracks 'state.data'
    let filteredData = $derived.by(() => {
        const activeIndices = electionState.data.labels
            .map((_, i) => i)
            .filter(i => electionState.data.datasets.some(ds => ds.index === i && ds.reservedSeats === undefined));

        const labels = activeIndices.map(i => electionState.data.labels[i]);
        const sourceDatasets = electionState.data.datasets.filter(ds => ds.reservedSeats === undefined);

        const datasets = sourceDatasets.map(ds => {
            const newData = activeIndices.map(idx => ds.data[idx] || 0);
            const { index, ...rest } = ds;
            return {
                ...rest,
                data: newData,
                order: 1,
                stack: 'current',
                categoryPercentage: 0.35,
                barPercentage: 3
            };
        });

        return { labels, datasets };
    });

    let others = $state();

    // Only ever WRITES previousDatasets, never reads it — no self-loop risk.
    let previousDatasets = $state([]);
    let currentElectionName = $state("");

    function validatePartyShare(index, partyIndex) {
        if (electionState.data.datasets[index].data[partyIndex] > 100) {
            electionState.data.datasets[index].data[partyIndex] = 100;
        }

        console.log("-----")
        //console.log(electionState.data)
        console.log(filteredData)
        //console.log(previousDatasets)
        //console.log(barChartData)
        //console.log(plainBarChartData)
    }

    $effect(() => {
        const isNewElection = electionState.name !== currentElectionName;
        if (!isNewElection) return;

        const snapshot = untrack(() => filteredData);

        previousDatasets = snapshot.datasets.map(ds => {
            const partyKey = ds.label;
            return {
                ...ds,
                label: `${ds.label} (Previous)`,
                data: [...ds.data],
                order: 2,
                stack: 'previous',
                backgroundColor: PartyColours[electionState.countryCode][partyKey]?.trans || ds.backgroundColor,
                categoryPercentage: 0.8,
                barPercentage: 0.9,
            };
        });

        currentElectionName = electionState.name;
    });

    let barChartData = $derived({
        labels: filteredData.labels,
        datasets: [...previousDatasets, ...filteredData.datasets]
    });

    let plainBarChartData = $derived(structuredClone($state.snapshot(barChartData)));

    let barChartOptions = $derived({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: 'black',
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

                    return [totalCurrent.toLocaleString('de-AT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), diffString];
                },
                labels: {
                    0: { color: 'black' },
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
                            if (diff > 0) return 'green';
                            if (diff == 0) return 'black';
                            return 'red';
                        }
                    }
                }
            },
            annotation: {
                annotations: electionState.threshold > 0 ? {
                    majorityLine: {
                        type: 'line',
                        yMin: electionState.threshold,
                        yMax: electionState.threshold,
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 2,
                    }
                } : {}
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
                grid: { display: false }
            },
            y: {
                stacked: true,
                suggestedMax: (() => {
                    if (!filteredData.labels || filteredData.datasets.length === 0) return 100;
                    
                    return Math.max(...filteredData.labels.map((_, index) =>
                        filteredData.datasets.reduce((sum, party) => 
                            sum + (party.order != 2 ? (party.data[index] || 0) : 0), 0
                        )
                    )) + 5;
                })()
            },
        }
    });
</script>

<h1>Stimmenanteile</h1>
<section class="vote_share_section">
    <div class="info_container">
        <p>Allgemeine Informationen</p>
        <table>
            <tbody>
                <tr>
                    <th>Wahltermin</th>
                    <td>TODO</td>
                </tr>
                <tr>
                    <th>Abgeordnete</th>
                    <td>{electionState.mandateCount}</td>
                </tr>
                <tr>
                    <th>Sperrklausel</th>
                    <td>{#if electionState.threshold > 0}
                        {electionState.threshold} %
                    {:else}
                        keine
                    {/if}</td>
                </tr>
                <tr>
                    <th>Sitzzuteilungsverfahren</th>
                    <td>TODO</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="bar_container">
        <ChartCanvas type="bar" data={plainBarChartData} options={barChartOptions} />
    </div>

    <div class="input_fields_vote">
        {#each [...electionState.data.datasets].map((p, i) => ({ ...p, originalIndex: i }))
            .sort((a, b) => {
                const indexDiff = a.index - b.index;
                return indexDiff !== 0 ? indexDiff : a.label.localeCompare(b.label);
            }) as party (party.originalIndex)}
            {#if electionState.data.datasets[party.originalIndex].order != 2 && !party.reservedSeats}
                <div class="input_field_vote_party">
                    <div class="display-group">
                        <span class="color-preview" style="background-color: {party.backgroundColor}"></span>
                        <div class="label-stack">
                            <label for="input_party_{party.originalIndex}">{party.label}</label>
                            <span 
                                class="eu-group-tag" 
                                style="
                                    background-color: {PartyColoursEU[EUGroups[electionState.countryCode]?.[party.label]]?.bg || '#999999'};
                                    color: {PartyColoursEU[EUGroups[electionState.countryCode]?.[party.label]]?.text || 'white'};
                                "
                                title={EUGroupNames[EUGroups[electionState.countryCode]?.[party.label] || 'NI']}
                            >
                                {EUGroups[electionState.countryCode]?.[party.label] || 'NI'}
                            </span>
                        </div>
                    </div>
                    <span class="valuePadding"><input id="input_party_{party.originalIndex}" type="number" step="any" bind:value={electionState.data.datasets[party.originalIndex].data[party.index]} min=0 max=100 oninput={() => validatePartyShare(party.originalIndex, party.index)}> %</span>
                </div>
                <!--{#if $data.datasets[party.originalIndex].data[party.index] < $threshold && $baseMandateRule}
                    <div class="base_mandate_checkbox">
                        <label for="checkbox_party_{party.originalIndex}">{$baseMandateRule} Grundmandat(e)?</label>
                        <input id="checkbox_party_{party.originalIndex}" type="checkbox" onchange={() => calcMandates($data.datasets)}>
                    </div>
                {/if}!-->
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