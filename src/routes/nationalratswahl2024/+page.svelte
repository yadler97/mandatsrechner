<svelte:head>
   <title>Mandatsrechner - {name}</title>
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data));
    setContext('mandateData', writable(mandateData));
    setContext('majorityData', writable(majorityData));
    setContext('mandateCount', writable(183));
    setContext('threshold', 4);
    setContext('apportionmentMethod', 'D\'Hondt');
    setContext('electionDate', date);
    setContext('baseMandateRule', false);
</script>

<ElectionCharts />