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

    // svelte-ignore state_referenced_locally
    let previousData = $state(structuredClone(data.data));

    // svelte-ignore state_referenced_locally
    let electionState = $state(data);

    $effect.pre(() => {
        const params = new URLSearchParams(window.location.search);
        const v = params.get('v');
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

    $effect(() => {
        const fresh = structuredClone(data.data);
        previousData.labels = fresh.labels;
        previousData.datasets = fresh.datasets;

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
    setContext('previousData', previousData);
</script>

<ElectionCharts />