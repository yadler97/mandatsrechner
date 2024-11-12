<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
    setContext('mandateCount', 183)
    setContext('threshold', 4)
    setContext('apportionmentMethod', 'D\'Hondt')
    setContext('electionDate', '29. September 2024')
</script>

<ElectionCharts />