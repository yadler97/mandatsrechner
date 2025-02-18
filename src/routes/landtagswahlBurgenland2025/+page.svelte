<svelte:head>
   <title>Mandatsrechner - {name}</title>
   <meta property="og:title" content="Mandatsrechner - {name}">
   <meta name="twitter:title" content="Mandatsrechner - {name}">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from './data';
	import ElectionCharts from '../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data));
    setContext('mandateData', writable(mandateData));
    setContext('majorityData', writable(majorityData));
    setContext('mandateCount', writable(36));
    setContext('threshold', 4);
    setContext('apportionmentMethod', 'D\'Hondt');
    setContext('electionDate', date);
    setContext('baseMandateRule', false);
    setContext('note', 'Aufgrund des mehrstufigen Ermittlungsverfahrens kann es zu geringfügigen Abweichungen zur tatsächlchen Mandatsverteilung kommen.');
</script>

<ElectionCharts />