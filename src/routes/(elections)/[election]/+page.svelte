<svelte:head>
    <title>Mandatsrechner - {data.name}</title>
    <meta property="og:title" content="Mandatsrechner - {data.name}">
    <meta name="twitter:title" content="Mandatsrechner - {data.name}">
    <meta property="og:image" content={imageUrl}>
    <meta name="twitter:image" content={imageUrl}>
</svelte:head>

<script>
    import { page } from '$app/stores';
    import ElectionCharts from '../../../ElectionCharts.svelte';
    import { setContext } from 'svelte';

    /** @type {{data: any}} */
    let { data } = $props();
    let electionId = $derived($page.params.election); 
    let imageUrl = $derived(`https://yadler97.github.io/mandatsrechner/previews/${electionId}.png`);

    let electionState = $state({
        name: data.name,
        data: data.data,
        mandateData: data.mandateData,
        majorityData: data.majorityData,
        mandateCount: data.mandateCount,
        threshold: data.threshold,
        apportionmentMethod: data.apportionmentMethod,
        date: data.date,
        countryCode: data.countryCode,
        baseMandateRule: data.baseMandateRule || false,
        note: data.note || ''
    });

    // 2. Automatically sync state if the data prop changes
    $effect(() => {
        electionState.name = data.name;
        electionState.data = data.data;
        electionState.mandateData = data.mandateData;
        electionState.majorityData = data.majorityData;
        electionState.mandateCount = data.mandateCount;
        electionState.threshold = data.threshold;
        electionState.apportionmentMethod = data.apportionmentMethod;
        electionState.date = data.date;
        electionState.countryCode = data.countryCode;
        electionState.baseMandateRule = data.baseMandateRule || false;
        electionState.note = data.note || '';
    });

    setContext('electionState', electionState);
</script>

<ElectionCharts />