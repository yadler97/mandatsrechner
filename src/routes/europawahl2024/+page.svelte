<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/europawahl2024.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/europawahl2024.png">
</svelte:head>

<script>
    import { data as countryInputs, date, lastDate, name } from '../../lib/elections/europawahl2024';
    import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
	import { generateElectionStructs } from '$lib/helper';

    // Generate all structs dynamically from the district inputs array
    const allStructs = countryInputs.map(countryInput => generateElectionStructs(countryInput, countryInput.countryCode));
    const voteData = allStructs.map(s => s.voteData);
    const mandateData = allStructs.map(s => s.mandateData);
    const majorityData = allStructs.map(s => s.majorityData);

    let country = $state(countryInputs[0].countryCode.toLowerCase());

    if (browser) {
        country = page.url.searchParams.get('country') || countryInputs[0].countryCode.toLowerCase();

        const countries = countryInputs.map(countryInput => countryInput.countryCode.toLowerCase());

        // svelte-ignore state_referenced_locally
        if (!countries.includes(country)) {
            country = countries[0];
            goto(`${page.url.pathname}?country=${country}`, { replaceState: true });
        }
    }

    let electionState = $state({
        name: '',
        mandateCount: 0,
        threshold: 0,
        apportionmentMethod: countryInputs[0].apportionmentMethod,
        voteData: voteData[0],
        mandateData: mandateData[0],
        majorityData: majorityData[0],
        countryCode: countryInputs[0].countryCode,
        date: date,
        lastDate: lastDate,
        baseMandateRule: false,
        note: ''
    });

    let previousData = $state(structuredClone(voteData[0]));
    let previousMandateData = $state(structuredClone(mandateData[0]));

    const updateCountry = (selectedCountry) => {
        country = selectedCountry;

        const countryIndex = countryInputs.findIndex(
            countryInput => countryInput.countryCode.toLowerCase() === country
        );
        if (countryIndex === -1) return;

        const countryInput = countryInputs[countryIndex];
        const fresh = structuredClone(voteData[countryIndex]);
        const freshMandates = structuredClone(mandateData[countryIndex]);

        electionState.name = `${name} (${countryInput.countryCode})`;
        electionState.mandateCount = countryInput.mandateCount;
        electionState.threshold = countryInput.threshold;
        electionState.apportionmentMethod = countryInput.apportionmentMethod;
        electionState.voteData = voteData[countryIndex];
        electionState.mandateData = mandateData[countryIndex];
        electionState.majorityData = majorityData[countryIndex];
        electionState.countryCode = countryInput.countryCode;

        previousData.labels = fresh?.labels ?? [];
        previousData.datasets = fresh?.datasets ?? [];
        previousMandateData.labels = freshMandates?.labels ?? [];
        previousMandateData.datasets = freshMandates?.datasets ?? [];
    };

    // svelte-ignore state_referenced_locally
    updateCountry(country);

    $effect(() => {
        const v = page.url.searchParams.get('v');
        if (v) {
            const voteArray = v.split(',').map(Number);
            voteArray.forEach((votes, i) => {
                if (electionState.voteData.datasets[i]) {
                    const idx = electionState.voteData.datasets[i].index;
                    electionState.voteData.datasets[i].data[idx] = votes;
                }
            });
        }
    });

    const gotoCountry = (selectedCountry) => {
        goto(`?country=${selectedCountry}`, { replaceState: true });
        updateCountry(selectedCountry);
    }

    setContext('electionState', electionState);
    setContext('previousData', previousData);
    setContext('previousMandateData', previousMandateData);
</script>

<select bind:value={country} onchange={() => gotoCountry(country)} class="district_select">
    {#each countryInputs as countryInput}
        <option value={countryInput.countryCode.toLowerCase()}>{countryInput.countryName}</option>
    {/each}
</select>

<ElectionCharts />