<script>
    import ElectionCharts from '../../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    export let data;

    const dataStore = writable(data.data);
    const mandateDataStore = writable(data.mandateData);
    const majorityDataStore = writable(data.majorityData);
    const mandateCountStore = writable(data.mandateCount);
    const thresholdStore = writable(data.threshold);
    const methodStore = writable(data.apportionmentMethod);
    const dateStore = writable(data.date);
    const baseMandateStore = writable(data.baseMandateRule || false);
    const noteStore = writable(data.note || '');

    setContext('data', dataStore);
    setContext('mandateData', mandateDataStore);
    setContext('majorityData', majorityDataStore);
    setContext('mandateCount', mandateCountStore);
    setContext('threshold', thresholdStore);
    setContext('apportionmentMethod', methodStore);
    setContext('electionDate', dateStore);
    setContext('baseMandateRule', baseMandateStore);
    setContext('note', noteStore);

    $: {
        dataStore.set(data.data);
        mandateDataStore.set(data.mandateData);
        majorityDataStore.set(data.majorityData);
        mandateCountStore.set(data.mandateCount);
        thresholdStore.set(data.threshold);
        methodStore.set(data.apportionmentMethod);
        dateStore.set(data.date);
        baseMandateStore.set(data.baseMandateRule || false);
        noteStore.set(data.note || '');
    }
</script>

<svelte:head>
   <title>Mandatsrechner - {data.name}</title>
    <meta property="og:title" content="Mandatsrechner - {data.name}">
   <meta name="twitter:title" content="Mandatsrechner - {data.name}">
</svelte:head>

<ElectionCharts />