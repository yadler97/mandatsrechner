<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
    setContext('mandateCount', 183)
    setContext('threshold', 4)
</script>

<ElectionCharts />