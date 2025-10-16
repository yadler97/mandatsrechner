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
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    setContext('data', writable(data));
    setContext('mandateData', writable(mandateData));
    setContext('majorityData', writable(majorityData));
    setContext('mandateCount', writable(88));
    setContext('threshold', writable(5));
    setContext('apportionmentMethod', writable(ApportionmentMethods.HARE_NIEMEYER));
    setContext('electionDate', date);
    setContext('baseMandateRule', false);
    setContext('note', 'Aufgrund von Überhang- und Ausgleichsmandaten kann es zu einer höheren Gesamtmandatszahl kommen.');
</script>

<ElectionCharts />