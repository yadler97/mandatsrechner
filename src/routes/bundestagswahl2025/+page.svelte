<svelte:head>
   <title>Mandatsrechner - {name}</title>
   <meta property="og:title" content="Mandatsrechner - {name}">
   <meta name="twitter:title" content="Mandatsrechner - {name}">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data));
    setContext('mandateData', writable(mandateData));
    setContext('majorityData', writable(majorityData));
    setContext('mandateCount', writable(630));
    setContext('threshold', 5);
    setContext('apportionmentMethod', 'Sainte-Laguë');
    setContext('electionDate', date);
    setContext('baseMandateRule', 3);
</script>

<ElectionCharts />