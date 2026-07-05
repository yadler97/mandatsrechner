<script>
    import { Chart } from 'chart.js/auto';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import annotationPlugin from 'chartjs-plugin-annotation';

    Chart.register(ChartDataLabels, annotationPlugin);

    let { type, data, options, id = undefined } = $props();

    let canvas;
    let chart;

    $effect(() => {
        if (!canvas) return;

        if (!chart) {
            chart = new Chart(canvas, { type, data, options });
            return;
        }

        chart.data.labels = data.labels;

        // Merge into EXISTING dataset objects instead of replacing the array
        // wholesale. Chart.js identifies a dataset's animation/element state
        // by object reference — swapping in fresh objects every update makes
        // it treat each dataset as brand new (full rebuild, no interpolation).
        // Mutating in place keeps the reference stable so the default
        // grow/shrink animation actually runs between old and new values.
        const existing = chart.data.datasets;
        const incoming = data.datasets;

        incoming.forEach((ds, i) => {
            if (existing[i]) {
                Object.assign(existing[i], ds);
            } else {
                existing[i] = ds;
            }
        });
        existing.length = incoming.length; // drop any now-unused trailing datasets

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