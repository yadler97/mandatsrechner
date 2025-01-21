<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data))
    setContext('mandateData', writable(mandateData))
    setContext('majorityData', writable(majorityData))
    setContext('mandateCount', writable(48))
    setContext('threshold', 0)
    setContext('apportionmentMethod', 'D\'Hondt')
    setContext('electionDate', '24. November 2024')
</script>

<ElectionCharts />