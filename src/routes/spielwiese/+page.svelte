<svelte:head>
   <title>Mandatsrechner - Spielwiese</title>
   <meta property="og:title" content="Mandatsrechner - Spielwiese">
   <meta name="twitter:title" content="Mandatsrechner - Spielwiese">
</svelte:head>

<script>
    import { data, mandateData, majorityData } from './data';
    import { setContext } from 'svelte';
	import ElectionChartsPlayground from '../../ElectionChartsPlayground.svelte';
    import { writable } from 'svelte/store';

    setContext('data', writable(data))
    setContext('mandateData', writable(mandateData))
    setContext('majorityData', writable(majorityData))
</script>

<ElectionChartsPlayground />