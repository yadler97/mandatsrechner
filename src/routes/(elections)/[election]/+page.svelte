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
    import { generateElectionStructs } from '$lib/helper';

    /** @type {{data: any}} */
    let { data } = $props();
    let electionId = $derived($page.params.election);
    let imageUrl = $derived(`https://yadler97.github.io/mandatsrechner/previews/${electionId}.png`);

    // Generate initial independent copies
    // svelte-ignore state_referenced_locally
    const initialPrevious = generateElectionStructs(data.data, data.countryCode);
    // svelte-ignore state_referenced_locally
    const initialCurrent = generateElectionStructs(data.data, data.countryCode);

    let previousData = $state(initialPrevious.voteData);
    let previousMandateData = $state(initialPrevious.mandateData);

    // svelte-ignore state_referenced_locally
    let electionState = $state({
    	...data,
    	voteData: initialCurrent.voteData,
    	mandateData: initialCurrent.mandateData,
    	majorityData: initialCurrent.majorityData,
    	baseMandateRule: data.baseMandateRule || false,
    	note: data.note || ''
    });

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
        // Re-run generator whenever the route's `data` prop changes
        const freshPrevious = generateElectionStructs(data.data, data.countryCode);
        previousData.labels = freshPrevious.voteData.labels;
        previousData.datasets = freshPrevious.voteData.datasets;
        previousMandateData.labels = freshPrevious.mandateData.labels;
        previousMandateData.datasets = freshPrevious.mandateData.datasets;

        const freshCurrent = generateElectionStructs(data.data, data.countryCode);
        electionState.name = data.name;
        electionState.voteData = freshCurrent.voteData;
        electionState.mandateData = freshCurrent.mandateData;
        electionState.majorityData = freshCurrent.majorityData;
        electionState.mandateCount = data.mandateCount;
        electionState.threshold = data.threshold;
        electionState.apportionmentMethod = data.apportionmentMethod;
        electionState.date = data.date;
        electionState.lastDate = data.lastDate;
        electionState.countryCode = data.countryCode;
        electionState.baseMandateRule = data.baseMandateRule || false;
        electionState.note = data.note || '';
    });

    setContext('electionState', electionState);
    setContext('previousData', previousData);
    setContext('previousMandateData', previousMandateData);
</script>

<ElectionCharts />