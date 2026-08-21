<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenWien2025.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenWien2025.png">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, lastDate, countryCode, name } from '../../lib/elections/bezirkswahlenWien2025';
    import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    const districts = [
        { id: '1', name: 'Innere Stadt' },
        { id: '2', name: 'Leopoldstadt' },
        { id: '3', name: 'Landstraße' },
        { id: '4', name: 'Wieden' },
        { id: '5', name: 'Margareten' },
        { id: '6', name: 'Mariahilf' },
        { id: '7', name: 'Neubau' },
        { id: '8', name: 'Josefstadt' },
        { id: '9', name: 'Alsergrund' },
        { id: '10', name: 'Favoriten' },
        { id: '11', name: 'Simmering' },
        { id: '12', name: 'Meidling' },
        { id: '13', name: 'Hietzing' },
        { id: '14', name: 'Penzing' },
        { id: '15', name: 'Rudolfsheim-Fünfhaus' },
        { id: '16', name: 'Ottakring' },
        { id: '17', name: 'Hernals' },
        { id: '18', name: 'Währing' },
        { id: '19', name: 'Döbling' },
        { id: '20', name: 'Brigittenau' },
        { id: '21', name: 'Floridsdorf' },
        { id: '22', name: 'Donaustadt' },
        { id: '23', name: 'Liesing' }
    ];

    let district = $state('1');

    if (browser) {
        district = page.url.searchParams.get('bezirk') || '1';
        // svelte-ignore state_referenced_locally
        let districtInt = parseInt(district);

        if (isNaN(districtInt) || districtInt < 1 || districtInt > 23) {
            districtInt = 1;
            goto(`${page.url.pathname}?bezirk=${districtInt.toString()}`, { replaceState: true });
        }
    }

    let electionState = $state({
        name: '',
        mandateCount: 0,
        threshold: 0,
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

        // Mandate count logic
        if ([1, 4, 5, 6, 7, 8, 9, 13, 18].includes(districtInt)) {
            electionState.mandateCount = 40;
        } else if (districtInt === 17) {
            electionState.mandateCount = 42;
        } else if (districtInt === 19) {
            electionState.mandateCount = 50;
        } else if (districtInt === 15) {
            electionState.mandateCount = 52;
        } else if (districtInt === 20) {
            electionState.mandateCount = 56;
        } else if ([2, 3, 10, 11, 12, 14, 16, 21, 22, 23].includes(districtInt)) {
            electionState.mandateCount = 60;
        }
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