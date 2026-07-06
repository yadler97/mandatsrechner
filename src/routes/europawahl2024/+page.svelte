<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/europawahl2024.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/europawahl2024.png">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from '../../lib/elections/europawahl2024';
    import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    let country = $state('');

    if (browser) {
        country = page.url.searchParams.get('country') || 'at';

        const countries = ["at", "de"];

        // svelte-ignore state_referenced_locally
        if (!countries.includes(country)) {
            country = 'at';
            goto(`${page.url.pathname}?country=${country}`, { replaceState: true });
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
        countryCode: 'AT',
        date: date,
        baseMandateRule: false,
        note: ''
    });

    const updateCountry = (selectedCountry) => {
        country = selectedCountry;

        if (country === 'at') {
            electionState.name = `${name} (AT)`;
            electionState.mandateCount = 20;
            electionState.threshold = 4;
            electionState.apportionmentMethod = ApportionmentMethods.DHONDT;
            electionState.data = data[0];
            electionState.mandateData = mandateData[0];
            electionState.majorityData = majorityData[0];
            electionState.countryCode = "AT";
        } else if (country === 'de') {
            electionState.name = `${name} (DE)`;
            electionState.mandateCount = 96;
            electionState.threshold = 0;
            electionState.apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
            electionState.data = data[1];
            electionState.mandateData = mandateData[1];
            electionState.majorityData = majorityData[1];
            electionState.countryCode = "DE";
        }
    };

    // svelte-ignore state_referenced_locally
    updateCountry(country);

    const gotoCountry = (selectedCountry) => {
        goto(`?country=${selectedCountry}`, { replaceState: true });
        updateCountry(selectedCountry);
    }

    setContext('electionState', electionState);
</script>

<select bind:value={country} onchange={() => gotoCountry(country)} class="district_select">
    <option value="at">Österreich</option>
    <option value="de">Deutschland</option>
</select>

<ElectionCharts />