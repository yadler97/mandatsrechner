<script>
    import ChartCanvas from './ChartCanvas.svelte';
    import { getContext } from 'svelte';

    import { ApportionmentMethods, dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';
    import { formatDate, getMajority, getTwoThirdsMajority } from '$lib/helper';
    import { PartyColours, PartyColoursEU } from '$lib/partyColours';
    import { EUGroupNames, EUGroups } from '$lib/euGroups';

    let electionState = getContext('electionState');
    let previousData = getContext('previousData');

    let majority = $derived(getMajority(electionState.mandateCount));
    let twoThirdsMajority = $derived(getTwoThirdsMajority(electionState.mandateCount));
    let displayDate = $derived(formatDate(electionState.date));

    let mandates = $state([]);
    let others = $state();
    let calculationHistory = $state([]);
    let eligibleIndices = $state([]);

    let calcResult = $derived(calcMandates(
        electionState.data.datasets
    ));

    $effect(() => {
        mandates = calcResult.mandates;
        others = calcResult.others;
        eligibleIndices = calcResult.eligibleIndices;
        calculationHistory = calcResult.history;
    });

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

    let previousDatasets = $state([]);
    let currentElectionName = $state("");

    $effect(() => {
        const isNewElection = electionState.name !== currentElectionName;
        if (!isNewElection) return;

        previousDatasets = previousData.datasets.map(ds => {
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

    function validatePartyShare(index, partyIndex) {
        if (electionState.data.datasets[index].data[partyIndex] > 100) {
            electionState.data.datasets[index].data[partyIndex] = 100;
        }
    }

    let tableView = $state('rounds'); // 'rounds' or 'divisors'
    let divisorGrid = $state([]);
    let lowestWinningQuotient = $state(0);

    function calcMandates(dataset) {
        const filteredParties = dataset.filter(party => party.order !== 2);

        const totalVotesInDataset = filteredParties.reduce((sum, party) => {
            return sum + (party.data[party.index] || 0);
        }, 0);

        const others = 100 - totalVotesInDataset;

        const currentIndices = filteredParties
            .map((party, index) => (party.order != 2 && party.reservedSeats === undefined) ? index : -1)
            .filter(index => {
                if (index === -1) return false;
                const party = filteredParties[index];
                const value = party.data[party.index];

                return value >= electionState.threshold || party.isChecked;
            });

        const reservedParties = dataset.filter(p => p.reservedSeats !== undefined && p.order != 2);
        const totalReservedSeats = reservedParties.reduce((sum, p) => sum + p.reservedSeats, 0);
        const nonReservedMandateCount = electionState.mandateCount - totalReservedSeats;

        let eligibleShares = currentIndices.map(idx => dataset[idx].data[dataset[idx].index]);
        let finalMandates = new Array(filteredParties.length).fill(0);
        let history = [];

        if (eligibleShares.length > 0 && nonReservedMandateCount > 0) {
            let result;
            if (electionState.apportionmentMethod == ApportionmentMethods.DHONDT) {
                result = dhondt(eligibleShares, nonReservedMandateCount);
            } else if (electionState.apportionmentMethod == ApportionmentMethods.SAINTE_LAGUE) {
                result = saintelague(eligibleShares, nonReservedMandateCount);
            } else {
                result = hareniemeyer(eligibleShares, nonReservedMandateCount);
            }
            history = result.history || [];
            currentIndices.forEach((origIdx, i) => {
                finalMandates[origIdx] = result.mandates[i];
            });
        }

        dataset.forEach((party, i) => {
            if (party.reservedSeats !== undefined) finalMandates[i] = party.reservedSeats;
        });

        return {
            mandates: finalMandates,
            others: others,
            eligibleIndices: currentIndices,
            history: history
        };
    }

    $effect(() => {
        if (calculationHistory.length === 0) return;

        lowestWinningQuotient = calculationHistory[calculationHistory.length - 1].quotients[
            calculationHistory[calculationHistory.length - 1].winnerIdx
        ];

        const maxSeats = Math.max(...mandates) + 1;
        const currentShares = eligibleIndices.map(idx =>
            electionState.data.datasets[idx].data[electionState.data.datasets[idx].index]
        );

        divisorGrid = Array.from({ length: maxSeats }, (_, i) => {
            const d = electionState.apportionmentMethod === ApportionmentMethods.SAINTE_LAGUE ? (i + 0.5) : (i + 1);
            return {
                divisor: d,
                values: currentShares.map(share => share / d)
            };
        });
    });

    $effect(() => {
        electionState.mandateData.datasets[1].data = mandates;
        for (let i in mandates) {
            electionState.majorityData.datasets[i].data = [mandates[i]];
        }
    });

    let selectedParties = $derived.by(() => {
        let total = 0;
        electionState.majorityData.datasets.forEach((dataset) => {
            if (!dataset.hidden) {
                total += dataset.data[0];
            }
        });
        return total;
    });

    async function copyShareLink() {
        const voteValues = electionState.data.datasets.map(ds => {
            const idx = ds.index;
            return ds.data[idx];
        }).join(',');

        const url = new URL(window.location.href);
        url.searchParams.set('v', voteValues);

        try {
            await navigator.clipboard.writeText(url.toString());
            alert("Link wurde in die Zwischenablage kopiert!");
        } catch (err) {
            console.error("Fehler beim Kopieren des Links:", err);
            alert("Kopieren fehlgeschlagen.");
        }
    }

    let plainBarChartData = $derived(structuredClone($state.snapshot(barChartData)));
    let plainMandateData = $derived(structuredClone($state.snapshot(electionState.mandateData)));
    let plainMajorityData = $derived(structuredClone($state.snapshot(electionState.majorityData)));

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

    let mandateChartOptions = $derived({
        responsive: true,
        cutout: '40%',
        circumference: 180,
        rotation: -90,
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
                onClick: () => false,
            }
        }
    });

    let majorityChartOptions = $derived({
        responsive: true,
        indexAxis: 'y',
        scales: {
            y: { stacked: true },
            x: { stacked: true, max: electionState.mandateCount }
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
                onClick: function(event, legendItem) {
                    if (legendItem.datasetIndex !== undefined) {
                        const datasetIndex = legendItem.datasetIndex;
                        const isVisible = electionState.majorityData.datasets[datasetIndex].hidden;
                        electionState.majorityData.datasets[datasetIndex].hidden = !isVisible;
                    }
                }
            }
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
                    <td>{displayDate}</td>
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
                    <td>{electionState.apportionmentMethod}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="bar_container">
        <ChartCanvas type="bar" data={plainBarChartData} options={barChartOptions} name={electionState.name} />
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
                {#if electionState.data.datasets[party.originalIndex].data[party.index] < electionState.threshold && electionState.baseMandateRule}
                    <div class="base_mandate_checkbox">
                        <label for="checkbox_party_{party.originalIndex}">{electionState.baseMandateRule} Grundmandat(e)?</label>
                        <input id="checkbox_party_{party.originalIndex}" type="checkbox" bind:checked={electionState.data.datasets[party.originalIndex].isChecked}>
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
{#if electionState.note}
    <p>Achtung: {electionState.note}</p>
{/if}
<section class="mandate_section">
    <div class="pie_container">
        <ChartCanvas type="doughnut" id="mandatesChart" data={plainMandateData} options={mandateChartOptions} name={electionState.name} />
    </div>

    <div class="stack_container">
        <ChartCanvas type="bar" data={plainMajorityData} options={majorityChartOptions} name={electionState.name} />
        <p class="majorityText {selectedParties < majority ? 'red' : 'green'}">
            Mehrheit: {selectedParties}/{majority}
        </p>
        <p class="majorityText {selectedParties < twoThirdsMajority ? 'red' : 'green'}">
            Zweidrittelmehrheit: {selectedParties}/{twoThirdsMajority}
        </p>
    </div>
</section>

<section class="config_actions">
    <div>
        <button class="action-btn export-btn" onclick={copyShareLink}>
            Link teilen
        </button>
    </div>
</section>

<h1>Berechnungsschritte</h1>
<section class="calculation_logic_section">
    {#if electionState.apportionmentMethod !== ApportionmentMethods.HARE_NIEMEYER}
        <div class="toggle-group">
            <button class:active={tableView === 'rounds'} onclick={() => tableView = 'rounds'}>
                Runden-Ansicht
            </button>
            <button class:active={tableView === 'divisors'} onclick={() => tableView = 'divisors'}>
                Divisor-Tabelle
            </button>
        </div>
    {/if}

    <div class="table_wrapper">
        <table>
            <thead>
                <tr>
                    <th class="sticky-col">
                        {#if electionState.apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                            Phase
                        {:else}
                            {tableView === 'rounds' ? 'Mandat' : 'Divisor'}
                        {/if}
                    </th>
                    {#each eligibleIndices.filter(idx => electionState.data.datasets[idx]) as idx}
                        <th>
                            <div class="party-header">
                                <span class="color-bar" style="background-color: {electionState.data.datasets[idx].backgroundColor}"></span>
                                <span class="party-label">{ electionState.data.datasets[idx].label }</span>
                            </div>
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#if tableView === 'rounds' || electionState.apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                    {#each calculationHistory as step}
                        <tr>
                            <td class="sticky-col">
                                <strong>
                                    {#if electionState.apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                                        {step.seat === 0 ? 'Quote' : `Rest ${step.seat}. Mandat`}
                                    {:else}
                                        {step.seat}. Mandat
                                    {/if}
                                </strong>
                            </td>
                            {#each step.quotients as q, i}
                                <td class:winner={step.winnerIdx === i}
                                    class:initial-row={electionState.apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER && step.seat === 0}>
                                    { (q ?? 0).toLocaleString('de-AT', {
                                        minimumFractionDigits: 3,
                                        maximumFractionDigits: electionState.apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER ? 5 : 3
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