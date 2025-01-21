<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data))
    setContext('mandateData', writable(mandateData))
    setContext('majorityData', writable(majorityData))
    setContext('mandateCount', writable(36))
    setContext('threshold', 5)
    setContext('apportionmentMethod', 'D\'Hondt')
    setContext('electionDate', '13. Oktober 2024')
</script>

<ElectionCharts />