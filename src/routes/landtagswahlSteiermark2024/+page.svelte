<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
    setContext('mandateCount', 48)
    setContext('threshold', 0)
    setContext('apportionmentMethod', 'D\'Hondt')
    setContext('electionDate', '24. November 2024')
</script>

<ElectionCharts />