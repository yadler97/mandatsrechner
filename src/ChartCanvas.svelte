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
        } else {
            chart.data = data;
            chart.options = options;
            chart.update();
        }
    });

    $effect(() => {
        return () => {
            chart?.destroy();
            chart = null;
        };
    });
</script>

<canvas bind:this={canvas} {id}></canvas>