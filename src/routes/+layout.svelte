<script>
    import '../app.css'

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    let path
    $: {
        path = base + $page.route.id;
    }

    function onChange(e) {
        const id = e.target.value;
        goto(`${id}`);
    }
</script>
<header>
    <a href="{base}/">
        <img src={logo} alt="Mandatsrechner-Logo">
        <p>Mandatsrechner</p>
    </a>

    <select on:change={onChange} bind:value={path}>
        <option value="{base}/">Wahl auswählen</option>
        <option value="{base}/europawahl2024">Europawahl 2024</option>
        <option value="{base}/nationalratswahl2024">Nationalratswahl 2024</option>
        <option value="{base}/landtagswahlVorarlberg2024">Landtagswahl Vorarlberg 2024</option>
        <option value="{base}/landtagswahlSteiermark2024">Landtagswahl Steiermark 2024</option>
        <option value="{base}/landtagswahlBurgenland2025">Landtagswahl Burgenland 2025</option>
        <option value="{base}/bundestagswahl2025">Bundestagswahl 2025</option>
        <option value="{base}/buergerschaftswahlHamburg2025">Bürgerschaftswahl Hamburg 2025</option>
        <option value="{base}/landtagswahlWien2025">Landtagswahl Wien 2025</option>
        <option value="{base}/bezirkswahlenWien2025">Bezirkswahlen Wien 2025</option>

        <option value="{base}/spielwiese">Spielwiese</option>
    </select>
</header>
<slot></slot>