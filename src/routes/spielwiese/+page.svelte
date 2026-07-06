<svelte:head>
    <title>Mandatsrechner - Spielwiese</title>
    <meta property="og:title" content="Mandatsrechner - Spielwiese">
    <meta name="twitter:title" content="Mandatsrechner - Spielwiese">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/spielwiese.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/spielwiese.png">
</svelte:head>

<script>
    import ElectionChartsPlayground from '../../ElectionChartsPlayground.svelte';
    import { data, mandateData, majorityData } from './data';
    import { setContext } from 'svelte';

    // svelte-ignore state_referenced_locally
    let electionState = $state({
        data: data,
        mandateData: mandateData,
        majorityData: majorityData
    });

    setContext('electionState', electionState);
</script>

<ElectionChartsPlayground />