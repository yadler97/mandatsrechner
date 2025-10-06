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

    <select on:change={onChange} bind:value={path} aria-label="Wahl auswählen">
        <option value="{base}/">Wahl auswählen</option>
        <option value="{base}/europawahl2024">Europawahl 2024</option>
        <option value="{base}/landtagswahlSachsen2024">Landtagswahl Sachsen 2024</option>
        <option value="{base}/landtagswahlThueringen2024">Landtagswahl Thüringen 2024</option>
        <option value="{base}/landtagswahlBrandenburg2024">Landtagswahl Brandenburg 2024</option>
        <option value="{base}/nationalratswahl2024">Nationalratswahl 2024</option>
        <option value="{base}/landtagswahlVorarlberg2024">Landtagswahl Vorarlberg 2024</option>
        <option value="{base}/landtagswahlSteiermark2024">Landtagswahl Steiermark 2024</option>
        <option value="{base}/landtagswahlBurgenland2025">Landtagswahl Burgenland 2025</option>
        <option value="{base}/bundestagswahl2025">Bundestagswahl 2025</option>
        <option value="{base}/buergerschaftswahlHamburg2025">Bürgerschaftswahl Hamburg 2025</option>
        <option value="{base}/landtagswahlWien2025">Landtagswahl Wien 2025</option>
        <option value="{base}/bezirkswahlenWien2025">Bezirkswahlen Wien 2025</option>
        <option value="{base}/tweedeKamerverkiezingen2025">Tweede Kamerverkiezingen 2025</option>
        <option value="{base}/landtagswahlBadenWürttemberg2026">Landtagswahl Baden-Württemberg 2026</option>
        <option value="{base}/landtagswahlRheinlandPfalz2026">Landtagswahl Rheinland-Pfalz 2026</option>
        <option value="{base}/landtagswahlSachsenAnhalt2026">Landtagswahl Sachsen-Anhalt 2026</option>
        <option value="{base}/abgeordnetenhauswahlBerlin2026">Abgeordnetenhauswahl Berlin 2026</option>
        <option value="{base}/landtagswahlMecklenburgVorpommern2026">Landtagswahl Mecklenburg-Vorpommern 2026</option>

        <option value="{base}/spielwiese">Spielwiese</option>
    </select>
</header>

<slot></slot>