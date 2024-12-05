<script>
    import { data, mandateData, majorityData } from './data';
	import ElectionCharts from '../../ElectionCharts.svelte';
    import { setContext } from 'svelte'

    setContext('data', data)
    setContext('mandateData', mandateData)
    setContext('majorityData', majorityData)
    setContext('mandateCount', 36)
    setContext('threshold', 4)
    setContext('apportionmentMethod', 'D\'Hondt')
    setContext('electionDate', '19. Jänner 2025')
</script>

<ElectionCharts />