<script>
    import '../app.css'

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    let path = base + $page.route.id

    function onChange(e) {
        const id = e.target.value;
        goto(`${id}`);
    }
</script>
<header>
    <img src={logo} alt="Mandatsrechner-Logo">
    <p>Mandatsrechner</p>

    <select on:change={onChange} bind:value={path}>
        <option value="{base}/">Anstehende Wahl auswählen</option>
        <option value="{base}/europawahl2024">Europawahl 2024</option>
        <option value="{base}/nationalratswahl2024">Nationalratswahl 2024</option>
        <option value="{base}/landtagswahlVorarlberg2024">Landtagswahl Vorarlberg 2024</option>
        <option value="{base}/landtagswahlSteiermark2024">Landtagswahl Steiermark 2024</option>
        <option value="{base}/landtagswahlBurgenland2025">Landtagswahl Burgenland 2025</option>
        <option value="{base}/bundestagswahl2025">Bundestagswahl 2025</option>
        <option value="{base}/landtagswahlWien2025" disabled>Landtagswahl Wien 2025</option>
        <option value="{base}/bezirkswahlenWien2025" disabled>Bezirkswahlen Wien 2025</option>

        <option value="{base}/spielwiese">Spielwiese</option>
    </select>
</header>
<slot></slot>