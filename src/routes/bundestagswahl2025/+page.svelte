<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
    setContext('mandateCount', 630)
    setContext('threshold', 5)
    setContext('apportionmentMethod', 'Sainte-Laguë')
    setContext('electionDate', 'voraussichtlich 23. Februar 2025')
</script>

<ElectionCharts />