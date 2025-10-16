<svelte:head>
   <title>Mandatsrechner - {name}</title>
   <meta property="og:title" content="Mandatsrechner - {name}">
   <meta name="twitter:title" content="Mandatsrechner - {name}">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    let country = $page.url.searchParams.get('country') || 'at';

    const countries = ["at", "de"];

    if (!countries.includes(country)) {
        country = 'at';
        goto(`${$page.url.pathname}?country=${country}`, { replaceState: true });
    }

    let mandateCount = writable(0);
    let threshold = writable(0);
    let apportionmentMethod = writable();
    let dataObj = writable();
    let mandateDataObj = writable();
    let majorityDataObj = writable();

    setContext('mandateCount', mandateCount);
    setContext('threshold', threshold);
    setContext('apportionmentMethod', apportionmentMethod);
    setContext('data', dataObj);
    setContext('mandateData', mandateDataObj);
    setContext('majorityData', majorityDataObj);

    const updateCountry = (selectedCountry) => {
        country = selectedCountry;

        // Set the parameters based on the country
        if (country == 'at') {
            $mandateCount = 20;
            $threshold = 4;
            $apportionmentMethod = ApportionmentMethods.DHONDT;
            $dataObj = data[0];
            $mandateDataObj = mandateData[0];
            $majorityDataObj =  majorityData[0];
        } else if (country == 'de') {
            $mandateCount = 96;
            $threshold = 0;
            $apportionmentMethod = ApportionmentMethods.SAINTE_LAGUE;
            $dataObj = data[1];
            $mandateDataObj = mandateData[1];
            $majorityDataObj =  majorityData[1];
        }
    };

    updateCountry(country);

    const gotoCountry = (selectedCountry) => {
        goto(`?country=${selectedCountry}`, { replaceState: true });
        updateCountry(selectedCountry);
    }

    setContext('electionDate', date);
    setContext('baseMandateRule', false);
</script>

<select bind:value={country} on:change={() => gotoCountry(country)} class="district_select">
    <option value="at">Österreich</option>
    <option value="de">Deutschland</option>
</select>

<ElectionCharts />