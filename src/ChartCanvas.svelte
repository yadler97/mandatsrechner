<script>
    import { Chart } from 'chart.js/auto';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';

    Chart.register(ChartDataLabels, annotationPlugin);

    let { type, data, options, name, id = undefined } = $props();

    let canvas;
    let chart;
    // svelte-ignore state_referenced_locally
    let currentName = name;

    $effect(() => {
        if (!canvas) return;

        if (!chart) {
            chart = new Chart(canvas, { type, data, options });
            return;
        }

        if (currentName != name) {
            chart.reset();
        }
        currentName = name;

        chart.data.labels = data.labels;

        const existing = chart.data.datasets;
        const incoming = data.datasets;

        incoming.forEach((ds, i) => {
            if (existing[i]) {
                Object.assign(existing[i], ds);
            } else {
                existing[i] = ds;
            }
        });
        existing.length = incoming.length;

        chart.options = options;
        chart.update();
    });

    $effect(() => {
        return () => {
            chart?.destroy();
            chart = null;
        };
    });
</script>

<canvas bind:this={canvas} {id}></canvas>