<script>
    import { Bar, Doughnut } from 'svelte-chartjs';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';
    import { ApportionmentMethods, dhondt, saintelague, hareniemeyer } from '$lib/apportionmentMethods';
    import { getMajority, getTwoThirdsMajority } from '$lib/helper';

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

    let data = getContext('data');
    let mandateData = getContext('mandateData');
    let majorityData = getContext('majorityData');
    let mandateCount = 10;
    let threshold = 4;
    let apportionmentMethod = 'D\'Hondt';
    let majority = 0;
    $: {
        majority = getMajority(mandateCount);
    }
    let twoThirdsMajority = 0;
    $: {
        twoThirdsMajority = getTwoThirdsMajority(mandateCount);
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

    let calculationHistory = [];
    let eligibleIndices = [];

    function calcMandates(dataset, mandateCount, apportionmentMethod, threshold) {
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
                return value >= threshold || isChecked;
            });

        eligibleIndices = currentIndices;

        const reservedParties = dataset.filter(p => p.reservedSeats !== undefined && p.order != 2);
        const totalReservedSeats = reservedParties.reduce((sum, p) => sum + p.reservedSeats, 0);
        const nonReservedMandateCount = mandateCount - totalReservedSeats;

        let eligibleShares = eligibleIndices.map(idx => dataset[idx].data[dataset[idx].index]);
        let finalMandates = new Array(filteredParties.length).fill(0);

        if (eligibleShares.length > 0 && nonReservedMandateCount > 0) {
            let result;
            if (apportionmentMethod == ApportionmentMethods.DHONDT) {
                result = dhondt(eligibleShares, nonReservedMandateCount);
            } else if (apportionmentMethod == ApportionmentMethods.SAINTE_LAGUE) {
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
            const d = apportionmentMethod === ApportionmentMethods.SAINTE_LAGUE ? (i + 0.5) : (i + 1);
            return {
                divisor: d,
                values: currentShares.map(share => share / d)
            };
        });
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

    function exportConfig() {
        const config = {
            data: $data,
            mandateData: $mandateData,
            majorityData: $majorityData,
            settings: {
                mandateCount,
                threshold,
                apportionmentMethod
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
                $data = config.data;
                $mandateData = config.mandateData;
                $majorityData = config.majorityData;

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
        $data.labels[index] = newName;
        $data.datasets[index].label = newName;
        $mandateData.labels[index] = newName;
        $majorityData.datasets[index].label = newName;
        
        // trigger reactivity
        $data = $data;
        $mandateData = $mandateData;
        $majorityData = $majorityData;
    }

    let editingIndex = null; // tracks which party is in "edit mode"

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

        $data.datasets[index].backgroundColor = newColor;
        $mandateData.datasets[0].backgroundColor[index] = newColor;
        $majorityData.datasets[index].backgroundColor = newColor;

        // trigger reactivity
        $data = $data;
        $mandateData = $mandateData;
        $majorityData = $majorityData;
    }

    function addParty() {
        const newIndex = $data.datasets.length;

        if (newIndex >= 26) {
            alert("Maximale Anzahl von 26 Parteien erreicht.");
            return;
        }

        const newLabel = String.fromCharCode(65 + newIndex); // A, B, C...
        const defaultColor = '#cccccc';

        // 1. update data
        $data.labels = [...$data.labels, newLabel];
        
        // add a 0 to the data array of every EXISTING party
        $data.datasets.forEach(ds => {
            ds.data.push(0);
        });

        // add the NEW party's dataset
        const newDataArray = new Array($data.labels.length).fill(0);
        $data.datasets = [...$data.datasets, {
            label: newLabel,
            index: newIndex,
            data: newDataArray,
            backgroundColor: defaultColor
        }];

        // 2. update mandateData
        $mandateData.labels = [...$mandateData.labels, newLabel];
        $mandateData.datasets[0].data = [...$mandateData.datasets[0].data, 0];
        $mandateData.datasets[0].backgroundColor = [...$mandateData.datasets[0].backgroundColor, defaultColor];

        // 3. update majorityData
        $majorityData.datasets = [...$majorityData.datasets, {
            label: newLabel,
            data: [0],
            backgroundColor: defaultColor,
            hidden: false
        }];
    }

    function removeParty(index) {
        if ($data.datasets.length <= 1) return;

        // 1. update data
        $data.labels.splice(index, 1);
        $data.datasets.splice(index, 1);

        // remove the specific index from the data array of ALL remaining parties
        $data.datasets.forEach((ds) => {
            ds.data.splice(index, 1);
        });

        // re-sync the 'index' property so the inputs still point to the right array slot
        $data.datasets.forEach((ds, i) => {
            ds.index = i;
        });

        // 2. update mandateData
        $mandateData.labels.splice(index, 1);
        $mandateData.datasets[0].data.splice(index, 1);
        $mandateData.datasets[0].backgroundColor.splice(index, 1);

        // 3. update majorityData
        $majorityData.datasets.splice(index, 1);

        // trigger reactivity
        $data = $data;
        $mandateData = $mandateData;
        $majorityData = $majorityData;
        
        if (editingIndex === index) editingIndex = null;
    }
</script>
<h1>Stimmenanteile</h1>
<section class="vote_share_section">
    <div class="info_container">
        <p>Allgemeine Informationen</p>
        <table>
            <tbody>
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
            </tbody>
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
                <div class="name-container">
                    {#if editingIndex === i}
                        <div class="edit-group">
                            <input
                                type="color"
                                class="color-picker"
                                value={party.backgroundColor}
                                aria-label="Farbe ändern"
                                title="Farbe ändern"
                                on:input={(e) => updatePartyColor(i, e)}
                            />
                            <input
                                class="name-edit-input"
                                type="text"
                                value={party.label}
                                on:input={(e) => handleNameInput(i, e)}
                                on:keydown={handleKeydown}
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
                        on:click={() => toggleEdit(i)}
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
                        bind:value={$data.datasets[i].data[party.index]}
                        min=0
                        max=100
                        on:input={() => validatePartyShare(i, party.index)}
                    > %
                </span>

                <button
                    class="remove-btn"
                    on:click={() => removeParty(i)}
                    aria-label="Partei löschen"
                    title="Partei löschen"
                >
                    ✕
                </button>
            </div>
        {/each}

        <button class="add-party-btn" on:click={addParty}>
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

<section class="config_actions">
    <div>
        <button class="action-btn export-btn" on:click={exportConfig}>
            JSON exportieren
        </button>

        <label class="action-btn import-label">
            JSON importieren
            <input 
                type="file" 
                accept=".json" 
                on:change={importConfig} 
                hidden 
            />
        </label>
    </div>
</section>

<h1>Berechnungsschritte</h1>
<section class="calculation_logic_section">
    {#if apportionmentMethod !== ApportionmentMethods.HARE_NIEMEYER}
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
                        {#if apportionmentMethod === ApportionmentMethods.HARE_NIEMEYER}
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