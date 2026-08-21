<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenBerlin2026.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenBerlin2026.png">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, lastDate, countryCode, name } from '../../lib/elections/bezirkswahlenBerlin2026';
    import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    const districts = [
        { id: '1', name: 'Mitte' },
        { id: '2', name: 'Friedrichshain-Kreuzberg' },
        { id: '3', name: 'Pankow' },
        { id: '4', name: 'Charlottenburg-Wilmersdorf' },
        { id: '5', name: 'Spandau' },
        { id: '6', name: 'Steglitz-Zehlendorf' },
        { id: '7', name: 'Tempelhof-Schöneberg' },
        { id: '8', name: 'Neukölln' },
        { id: '9', name: 'Treptow-Köpenick' },
        { id: '10', name: 'Marzahn-Hellersdorf' },
        { id: '11', name: 'Lichtenberg' },
        { id: '12', name: 'Reinickendorf' }
    ];

    let district = $state('1');

    if (browser) {
        district = page.url.searchParams.get('bezirk') || '1';
        // svelte-ignore state_referenced_locally
        let districtInt = parseInt(district);

        if (isNaN(districtInt) || districtInt < 1 || districtInt > 12) {
            districtInt = 1;
            goto(`${page.url.pathname}?bezirk=${districtInt.toString()}`, { replaceState: true });
        }
    }

    let electionState = $state({
        name: '',
        mandateCount: 0,
        threshold: 3,
        apportionmentMethod: ApportionmentMethods.DHONDT,
        data: data[0],
        mandateData: mandateData[0],
        majorityData: majorityData[0],
        countryCode: countryCode,
        date: date,
        lastDate: lastDate,
        baseMandateRule: false,
        note: ''
    });

    let previousData = $state(structuredClone(data[0]));
    let previousMandateData = $state(structuredClone(mandateData[0]));

    const updateDistrict = (selectedDistrict) => {
        district = selectedDistrict;
        const districtInt = parseInt(district);

        const currentDistrictObj = districts.find(d => d.id === district);
        const districtName = currentDistrictObj ? currentDistrictObj.name : '';

        const fresh = structuredClone(data[districtInt - 1]);
        previousData.labels = fresh.labels;
        previousData.datasets = fresh.datasets;

        const freshMandates = structuredClone(mandateData[districtInt - 1]);
        previousMandateData.labels = freshMandates.labels;
        previousMandateData.datasets = freshMandates.datasets;

        electionState.name = `${name} (${district}., ${districtName})`;
        electionState.data = data[districtInt - 1];
        electionState.mandateData = mandateData[districtInt - 1];
        electionState.majorityData = majorityData[1]; // Assuming index mapping
        electionState.majorityData = majorityData[districtInt - 1];
        electionState.mandateCount = 55;
    };

    $effect(() => {
        const v = page.url.searchParams.get('v');
        if (v) {
            const voteArray = v.split(',').map(Number);
            voteArray.forEach((votes, i) => {
                if (electionState.data.datasets[i]) {
                    const idx = electionState.data.datasets[i].index;
                    electionState.data.datasets[i].data[idx] = votes;
                }
            });
        }
    });

    // svelte-ignore state_referenced_locally
    updateDistrict(district);

    const gotoDistrict = (selectedDistrict) => {
        goto(`?bezirk=${selectedDistrict}`, { replaceState: true });
        updateDistrict(selectedDistrict);
    }

    setContext('electionState', electionState);
    setContext('previousData', previousData);
    setContext('previousMandateData', previousMandateData);
</script>

<select bind:value={district} onchange={() => gotoDistrict(district)} class="district_select">
    {#each districts as d}
        <option value={d.id}>{d.id}., {d.name}</option>
    {/each}
</select>

<ElectionCharts />