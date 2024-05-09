<script>
    import '../app.css'

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';

    import { base } from '$app/paths';

    function onChange(e) {
        const id = e.target.value;
        goto(`${id}`);
    }
</script>
<header>
    <img src={logo} alt="Mandatsrechner-Logo">
    <p>Mandatsrechner</p>

    <select on:change={onChange}>
        <option value="{base}/">Anstehende Wahl auswählen</option>
        <option value="{base}/europawahl2024">Europawahl 2024</option>
        <option value="{base}/nationalratswahl2024" disabled>Nationalratswahl 2024</option>
        <option value="{base}/landtagswahlVorarlberg2024" disabled>Landtagswahl Vorarlberg 2024</option>
        <option value="{base}/landtagswahlSteiermark2024" disabled>Landtagswahl Steiermark 2024</option>
    </select>
</header>
<slot></slot>