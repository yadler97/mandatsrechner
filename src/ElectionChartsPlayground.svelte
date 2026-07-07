<script>
    import ChartCanvas from './ChartCanvas.svelte';
    import { getContext } from 'svelte';

    import { ApportionmentMethods, dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';
    import { getMajority, getTwoThirdsMajority } from '$lib/helper';

    let electionState = getContext('electionState');

    let mandateCount = $state(10);
    let threshold = $state(4);
    let apportionmentMethod = $state('D\'Hondt');

    let majority = $derived(getMajority(mandateCount));
    let twoThirdsMajority = $derived(getTwoThirdsMajority(mandateCount));

    let mandates = $state([]);
    let others = $state();
    let calculationHistory = $state([]);
    let eligibleIndices = $state([]);

    let calcResult = $derived(calcMandates(
        electionState.data.datasets, 
        mandateCount, 
        apportionmentMethod, 
        threshold
    ));

    $effect(() => {
        mandates = calcResult.mandates;
        others = calcResult.others;
        eligibleIndices = calcResult.eligibleIndices;
        calculationHistory = calcResult.history;
    });

    function calcMandates(dataset, mandateCount, apportionmentMethod, threshold) {
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

                return value >= threshold || party.isChecked;
            });

        const reservedParties = dataset.filter(p => p.reservedSeats !== undefined && p.order != 2);
        const totalReservedSeats = reservedParties.reduce((sum, p) => sum + p.reservedSeats, 0);
        const nonReservedMandateCount = mandateCount - totalReservedSeats;

        let eligibleShares = currentIndices.map(idx => dataset[idx].data[dataset[idx].index]);
        let finalMandates = new Array(filteredParties.length).fill(0);
        let history = [];

        if (eligibleShares.length > 0 && nonReservedMandateCount > 0) {
            let result;
            if (apportionmentMethod == ApportionmentMethods.DHONDT) {
                result = dhondt(eligibleShares, nonReservedMandateCount);
            } else if (apportionmentMethod == ApportionmentMethods.SAINTE_LAGUE) {
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

    let tableView = $state('rounds'); // 'rounds' or 'divisors'
    let divisorGrid = $state([]);
    let lowestWinningQuotient = $state(0);

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
        if (electionState.data.datasets[index].data[partyIndex] > 100) {
            electionState.data.datasets[index].data[partyIndex] = 100;
        }
    }

    function exportConfig() {
        const config = {
            data: electionState.data,
            mandateData: electionState.mandateData,
            majorityData: electionState.majorityData,
            settings: {
                mandateCount: mandateCount,
                threshold: threshold,
                apportionmentMethod: apportionmentMethod
            }
        };
        
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mandatsrechner_config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function importConfig(event) {
        const target = event.target;
        const file = target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            if (!e || !e.target || typeof e.target.result !== 'string') return; // wow, that's ugly

            try {
                const config = JSON.parse(e.target.result);
                
                // update settings
                mandateCount = config.settings.mandateCount;
                threshold = config.settings.threshold;
                apportionmentMethod = config.settings.apportionmentMethod;

                // update svelte stores
                electionState.data = config.data;
                electionState.mandateData = config.mandateData;
                electionState.majorityData = config.majorityData;

                // reset file input so same file can be uploaded twice if needed
                target.value = '';
                alert('Konfiguration erfolgreich geladen!');
            } catch (err) {
                console.error("Import error:", err);
                alert('Fehler beim Laden der Datei. Bitte stellen Sie sicher, dass es sich um ein gültiges JSON handelt.');
            }
        };
        reader.readAsText(file);
    }

    function updatePartyName(index, newName) {
        electionState.data.labels[index] = newName;
        electionState.data.datasets[index].label = newName;
        electionState.mandateData.labels[index] = newName;
        electionState.majorityData.datasets[index].label = newName;
        
        // trigger reactivity
        electionState.data = electionState.data;
        electionState.mandateData = electionState.mandateData;
        electionState.majorityData = electionState.majorityData;
    }

    let editingIndex = $state(null); // tracks which party is in "edit mode"

    function toggleEdit(index) {
        if (editingIndex === index) {
            editingIndex = null;
        } else {
            editingIndex = index;
        }
    }

    function handleNameInput(index, event) {
        updatePartyName(index, event.target.value);
    }

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            editingIndex = null;
        }
    }

    function updatePartyColor(index, event) {
        const newColor = event.target.value;

        electionState.data.datasets[index].backgroundColor = newColor;
        electionState.mandateData.datasets[0].backgroundColor[index] = newColor;
        electionState.majorityData.datasets[index].backgroundColor = newColor;

        // trigger reactivity
        electionState.data = electionState.data;
        electionState.mandateData = electionState.mandateData;
        electionState.majorityData = electionState.majorityData;
    }

    function addParty() {
        const newIndex = electionState.data.datasets.length;

        if (newIndex >= 26) {
            alert("Maximale Anzahl von 26 Parteien erreicht.");
            return;
        }

        const newLabel = String.fromCharCode(65 + newIndex); // A, B, C...
        const defaultColor = '#cccccc';

        // 1. update data
        electionState.data.labels = [...electionState.data.labels, newLabel];
        
        // add a 0 to the data array of every EXISTING party
        electionState.data.datasets.forEach(ds => {
            ds.data.push(0);
        });

        // add the NEW party's dataset
        const newDataArray = new Array(electionState.data.labels.length).fill(0);
        electionState.data.datasets = [...electionState.data.datasets, {
            label: newLabel,
            index: newIndex,
            data: newDataArray,
            backgroundColor: defaultColor
        }];

        // 2. update mandateData
        electionState.mandateData.labels = [...electionState.mandateData.labels, newLabel];
        electionState.mandateData.datasets[0].data = [...electionState.mandateData.datasets[0].data, 0];
        electionState.mandateData.datasets[0].backgroundColor = [...electionState.mandateData.datasets[0].backgroundColor, defaultColor];

        // 3. update majorityData
        electionState.majorityData.datasets = [...electionState.majorityData.datasets, {
            label: newLabel,
            data: [0],
            backgroundColor: defaultColor,
            hidden: false
        }];
    }

    function removeParty(index) {
        if (electionState.data.datasets.length <= 1) return;

        eligibleIndices = eligibleIndices
            .filter(idx => idx !== index)
            .map(idx => (idx > index ? idx - 1 : idx));

        // 1. update data
        electionState.data.labels.splice(index, 1);
        electionState.data.datasets.splice(index, 1);

        // remove the specific index from the data array of ALL remaining parties
        electionState.data.datasets.forEach((ds) => {
            ds.data.splice(index, 1);
        });

        // re-sync the 'index' property so the inputs still point to the right array slot
        electionState.data.datasets.forEach((ds, i) => {
            ds.index = i;
        });

        // 2. update mandateData
        electionState.mandateData.labels.splice(index, 1);
        electionState.mandateData.datasets[0].data.splice(index, 1);
        electionState.mandateData.datasets[0].backgroundColor.splice(index, 1);

        // 3. update majorityData
        electionState.majorityData.datasets.splice(index, 1);

        // trigger reactivity
        electionState.data = electionState.data;
        electionState.mandateData = electionState.mandateData;
        electionState.majorityData = electionState.majorityData;
        
        if (editingIndex === index) editingIndex = null;
    }

    let selectedParties = $derived.by(() => {
        let total = 0;
        electionState.majorityData.datasets.forEach((dataset) => {
            if (!dataset.hidden) {
                total += dataset.data[0];
            }
        });
        return total;
    });

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
            const d = apportionmentMethod === ApportionmentMethods.SAINTE_LAGUE ? (i + 0.5) : (i + 1);
            return {
                divisor: d,
                values: currentShares.map(share => share / d)
            };
        });
    });

    $effect(() => {
        electionState.mandateData.datasets[0].data = mandates;
        for (let i in mandates) {
            electionState.majorityData.datasets[i].data = [mandates[i]];
        }
    });

    let plainBarChartData = $derived(structuredClone($state.snapshot(electionState.data)));
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
                suggestedMax: Math.max(...electionState.data.labels.map((_, index) => 
                    electionState.data.datasets.reduce((sum, party) => sum + (party.data[index] || 0), 0)
                )) + 5
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
                    <th><label for="input_mandate_count">Abgeordnete</label></th>
                    <td><input id="input_mandate_count" type="number" bind:value={mandateCount} min=0 max=1000 oninput={validateMandateCount}></td>
                </tr>
                <tr>
                    <th><label for="input_threshold">Sperrklausel</label></th>
                    <td><span class="valuePadding"><input id="input_threshold" type="number" bind:value={threshold} min=0 max=100 oninput={validateThreshold}> %</span></td>
                </tr>
                <tr>
                    <th><label for="input_apportionment_method">Sitzzuteilungsverfahren</label></th>
                    <td><select class="selectApportionmentMethod" id="input_apportionment_method" bind:value={apportionmentMethod}><option>D'Hondt</option><option>Sainte-Laguë</option><option>Hare-Niemeyer</option></select></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="bar_container">
        <ChartCanvas type="bar" data={plainBarChartData} options={barChartOptions} name={"Spielwiese"} />
    </div>
    
    <div class="input_fields_vote">
        {#each electionState.data.datasets as party, i}
            <div class="input_field_vote_party">
                <div class="name-container">
                    {#if editingIndex === i}
                        <div class="edit-group">
                            <input
                                type="color"
                                class="color-picker"
                                value={party.backgroundColor}
                                aria-label="Farbe ändern"
                                title="Farbe ändern"
                                oninput={(e) => updatePartyColor(i, e)}
                            />
                            <input
                                class="name-edit-input"
                                type="text"
                                value={party.label}
                                oninput={(e) => handleNameInput(i, e)}
                                onkeydown={handleKeydown}
                                autoFocus
                            />
                        </div>
                    {:else}
                        <div class="display-group">
                            <span class="color-preview" style="background-color: {party.backgroundColor}"></span>
                            <label for="input_party_{i}">{party.label}</label>
                        </div>
                    {/if}

                    <button
                        class="edit-icon-btn"
                        onclick={() => toggleEdit(i)}
                        aria-label={editingIndex === i ? 'Änderungen speichern' : 'Partei bearbeiten'}
                        title={editingIndex === i ? 'Änderungen speichern' : 'Partei bearbeiten'}
                    >
                        {editingIndex === i ? '✅' : '✏️'}
                    </button>
                </div>
                
                <span class="valuePadding">
                    <input
                        id="input_party_{i}"
                        type="number"
                        step="any"
                        bind:value={electionState.data.datasets[i].data[party.index]}
                        min=0
                        max=100
                        oninput={() => validatePartyShare(i, party.index)}
                    > %
                </span>

                <button
                    class="remove-btn"
                    onclick={() => removeParty(i)}
                    aria-label="Partei löschen"
                    title="Partei löschen"
                >
                    ✕
                </button>
            </div>
        {/each}

        <button class="add-party-btn" onclick={addParty}>
            + Partei hinzufügen
        </button>

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
        <ChartCanvas type="doughnut" id="mandatesChart" data={plainMandateData} options={mandateChartOptions} name={"Spielwiese"} />
    </div>

    <div class="stack_container">
        <ChartCanvas type="bar" data={plainMajorityData} options={majorityChartOptions} name={"Spielwiese"} />
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
        <button class="action-btn export-btn" onclick={exportConfig}>
            JSON exportieren
        </button>

        <label class="action-btn import-label">
            JSON importieren
            <input 
                type="file" 
                accept=".json" 
                onchange={importConfig} 
                hidden 
            />
        </label>
    </div>
</section>

<h1>Berechnungsschritte</h1>
<section class="calculation_logic_section">
    {#if apportionmentMethod !== ApportionmentMethods.HARE_NIEMEYER}
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
                        {#if apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                            Phase
                        {:else}
                            {tableView === 'rounds' ? 'Mandat' : 'Divisor'}
                        {/if}
                    </th>
                    {#each eligibleIndices as idx}
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
                {#if tableView === 'rounds' || apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                    {#each calculationHistory as step}
                        <tr>
                            <td class="sticky-col">
                                <strong>
                                    {#if apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
                                        {step.seat === 0 ? 'Quote' : `Rest ${step.seat}. Mandat`}
                                    {:else}
                                        {step.seat}. Mandat
                                    {/if}
                                </strong>
                            </td>
                            {#each step.quotients as q, i}
                                <td class:winner={step.winnerIdx === i} 
                                    class:initial-row={apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER && step.seat === 0}>
                                    { q.toLocaleString('de-AT', { 
                                        minimumFractionDigits: 3,
                                        maximumFractionDigits: apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER ? 5 : 3
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