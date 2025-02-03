<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from '../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
	import { writable } from 'svelte/store';

    setContext('data', writable(data))
    setContext('mandateData', writable(mandateData))
    setContext('majorityData', writable(majorityData))
    setContext('mandateCount', writable(121))
    setContext('threshold', 5)
    setContext('apportionmentMethod', 'Sainte-Laguë')
    setContext('electionDate', '2. März 2025')
</script>

<ElectionCharts />