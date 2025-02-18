<svelte:head>
   <title>Mandatsrechner - Spielwiese</title>
   <meta property="og:title" content="Mandatsrechner - Spielwiese">
   <meta name="twitter:title" content="Mandatsrechner - Spielwiese">
</svelte:head>

<script>
    import { data, mandateData, majorityData } from './data';
    import { setContext } from 'svelte';
	import ElectionChartsPlayground from '../../ElectionChartsPlayground.svelte';

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
</script>

<ElectionChartsPlayground />