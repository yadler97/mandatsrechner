<script>
    import '../app.css'

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';

    function onChange(e) {
        const id = e.target.value;
        goto(`/${id}`);
    }
</script>
<header>
    <img src={logo} alt="Mandatsrechner-Logo">
    <p>Mandatsrechner</p>

    <select on:change={onChange}>
        <option value="">Anstehende Wahl auswählen</option>
        <option value="europawahl2024">Europawahl 2024</option>
        <option value="nationalratswahl2024" disabled>Nationalratswahl 2024</option>
        <option value="landtagswahlVorarlberg2024" disabled>Landtagswahl Vorarlberg 2024</option>
        <option value="landtagswahlSteiermark2024" disabled>Landtagswahl Steiermark 2024</option>
    </select>
</header>
<slot></slot>