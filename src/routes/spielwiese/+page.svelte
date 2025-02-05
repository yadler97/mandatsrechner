<svelte:head>
   <title>Mandatsrechner - Spielwiese</title>
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