<svelte:head>
    <title>Mandatsrechner - {data.name}</title>
    <meta property="og:title" content="Mandatsrechner - {data.name}">
    <meta name="twitter:title" content="Mandatsrechner - {data.name}">
</svelte:head>

<script>
    import ElectionCharts from '../../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    export let data;

    const nameStore = writable(data.name);
    const dataStore = writable(data.data);
    const mandateDataStore = writable(data.mandateData);
    const majorityDataStore = writable(data.majorityData);
    const mandateCountStore = writable(data.mandateCount);
    const thresholdStore = writable(data.threshold);
    const methodStore = writable(data.apportionmentMethod);
    const dateStore = writable(data.date);
    const countryCodeStore = writable(data.countryCode);
    const baseMandateStore = writable(data.baseMandateRule || false);
    const noteStore = writable(data.note || '');

    setContext('name', nameStore);
    setContext('data', dataStore);
    setContext('mandateData', mandateDataStore);
    setContext('majorityData', majorityDataStore);
    setContext('mandateCount', mandateCountStore);
    setContext('threshold', thresholdStore);
    setContext('apportionmentMethod', methodStore);
    setContext('electionDate', dateStore);
    setContext('countryCode', countryCodeStore);
    setContext('baseMandateRule', baseMandateStore);
    setContext('note', noteStore);

    $: {
        nameStore.set(data.name);
        dataStore.set(data.data);
        mandateDataStore.set(data.mandateData);
        majorityDataStore.set(data.majorityData);
        mandateCountStore.set(data.mandateCount);
        thresholdStore.set(data.threshold);
        methodStore.set(data.apportionmentMethod);
        dateStore.set(data.date);
        countryCodeStore.set(data.countryCode);
        baseMandateStore.set(data.baseMandateRule || false);
        noteStore.set(data.note || '');
    }
</script>

<ElectionCharts />