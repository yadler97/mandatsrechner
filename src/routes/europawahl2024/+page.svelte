<script>
    import { Bar, Pie } from 'svelte-chartjs';
    import { data, mandateData } from './data';
  
    import {
      Chart,
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
    } from 'chart.js/auto';
  
    Chart.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale
    );

    let mandates = [];

    $: {
        data.datasets[0].data = data.datasets[0].data
        mandates = dhondt(data.datasets[0].data, 20)
    }

    function dhondt(vote_shares, mandate_count) {
        let mandates = []
        let current_divisors = []
        let current_vote_count = [...vote_shares]

        for (let i in vote_shares) {
            current_divisors.push(1)
            mandates.push(0)
        }

        for (let i = 0; i < mandate_count; i++) {
            let idx = current_vote_count.indexOf(Math.max(...current_vote_count));
            current_divisors[idx] = current_divisors[idx] + 1
            mandates[idx] = mandates[idx] + 1
            current_vote_count[idx] = vote_shares[idx] / current_divisors[idx]
        }

        return mandates
    }

    let others

    $: mandateData.datasets[0].data = mandates
    $: others = 100 - data.datasets[0].data.reduce((a, b) => a + b, 0)
</script>

<h1>Stimmenanteile</h1>
<section class="vote_share_section">
    <div class="bar_container">
        <Bar {data} options={{ responsive: true }} />
    </div>
    
    <div class="input_fields_vote">
        {#each data.datasets[0].data as party, i}
            <div class="input_field_vote_party">
                <label for="input_party_{i}">{data.labels[i]}</label>
                <input id="input_party_{i}" type="number" bind:value={data.datasets[0].data[i]} min=0 max=100>
            </div>
        {/each}
        <div class="input_field_vote_party">
            <p>Sonstige:</p>
            <p>{others >= 0 ? others.toFixed(2) : 0}</p>
        </div>
        {#if others < 0}
	        <p>Achtung: Gesamtstimmen dürfen 100% nicht überschreiten!</p>
        {/if}
    </div>
</section>

<h1>Mandatsverteilung</h1>
<section class="mandate_section">
    <div class="pie_container">
        <Pie id="mandatesChart" data={mandateData} options={{ responsive: true, circumference: 180, rotation: -90 }} />
    </div>

    <div class="overview_mandates">
        {#each mandateData.datasets[0].data as party, i}
            <p>{data.labels[i]}: {party}</p>
        {/each}
    </div>
</section>
