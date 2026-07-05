<script>
	import { BarChart } from 'layerchart';

    let data = $state(
        [
            {
                "year": 2019,
                "apples": 3840,
                "bananas": 1920,
                "cherries": 960,
                "grapes": 400
            },
            {
                "year": 2018,
                "apples": 1600,
                "bananas": 1440,
                "cherries": 960,
                "grapes": 400
            },
            {
                "year": 2017,
                "apples": 820,
                "bananas": 1000,
                "cherries": 640,
                "grapes": 400
            },
            {
                "year": 2016,
                "apples": 820,
                "bananas": 560,
                "cherries": 720,
                "grapes": 400
            }
        ]
    );

    function randomizeData() {
        // Option 1: Direct mutation
        data[0].apples = Math.floor(Math.random() * 5000);
        
        // Option 2: Full reassignment to trigger reactivity
        data = data.map(item => ({
            ...item,
            bananas: Math.floor(Math.random() * 2000)
        }));
    }
</script>

<button onclick={randomizeData}>
    Update Chart Data
</button>

<BarChart
	{data}
	x="year"
	series={[
		{
            key: 'apples',
            color: '#FF0000',
            label: 'Green Apples'
        },
		{
			key: 'bananas',
			color: 'var(--color-bananas)',
			label: 'Yellow Bananas'
		},
		{
			key: 'cherries',
			color: 'var(--color-cherries)',
			label: 'Sweet Cherries'
		},
		{
			key: 'grapes',
			color: 'var(--color-grapes)',
			label: 'Purple Grapes'
		}
	]}
	seriesLayout="group"
	props={{
		xAxis: { format: 'none' },
		yAxis: { format: 'metric' },
		tooltip: {
			header: { format: 'none' }
		}
	}}
	legend
	height={300}
/>