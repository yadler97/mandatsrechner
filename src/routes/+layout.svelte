<script>
    import '../app.css'

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    let isOpen = false;
    let path = "";
    $: {
        path = base + $page.url.pathname;
    }

    const elections = [
        { id: "europawahl2024", label: "Europawahl 2024" },
        { id: "landtagswahlSachsen2024", label: "Landtagswahl Sachsen 2024" },
        { id: "landtagswahlThueringen2024", label: "Landtagswahl Thüringen 2024" },
        { id: "landtagswahlBrandenburg2024", label: "Landtagswahl Brandenburg 2024" },
        { id: "nationalratswahl2024", label: "Nationalratswahl 2024" },
        { id: "landtagswahlVorarlberg2024", label: "Landtagswahl Vorarlberg 2024" },
        { id: "landtagswahlSteiermark2024", label: "Landtagswahl Steiermark 2024" },
        { id: "landtagswahlBurgenland2025", label: "Landtagswahl Burgenland 2025" },
        { id: "bundestagswahl2025", label: "Bundestagswahl 2025" },
        { id: "buergerschaftswahlHamburg2025", label: "Bürgerschaftswahl Hamburg 2025" },
        { id: "landtagswahlWien2025", label: "Landtagswahl Wien 2025" },
        { id: "bezirkswahlenWien2025", label: "Bezirkswahlen Wien 2025" },
        { id: "tweedeKamerverkiezingen2025", label: "Tweede Kamerverkiezingen 2025" },
        { id: "landtagswahlBadenWuerttemberg2026", label: "Landtagswahl Baden-Württemberg 2026" },
        { id: "drzavnozborskeVolitveVSloveniji2026", label: "Državnozborske volitve v Sloveniji 2026" },
        { id: "landtagswahlRheinlandPfalz2026", label: "Landtagswahl Rheinland-Pfalz 2026" },
        { id: "folketingsvalgIDanmark2026", label: "Folketingsvalg i Danmark 2026" },
        { id: "gemeinderatswahlGraz2026", label: "Gemeinderatswahl Graz 2026" },
        { id: "landtagswahlSachsenAnhalt2026", label: "Landtagswahl Sachsen-Anhalt 2026" },
        { id: "abgeordnetenhauswahlBerlin2026", label: "Abgeordnetenhauswahl Berlin 2026" },
        { id: "landtagswahlMecklenburgVorpommern2026", label: "Landtagswahl Mecklenburg-Vorpommern 2026" },
        { id: "spielwiese", label: "Spielwiese" }
    ];

    function handleSelect(id) {
        isOpen = false;
        goto(`${base}/${id}`);
    }

    // Close dropdown when clicking outside
    function closeClickOutside(e) {
        if (isOpen && !e.target.closest('.custom-select')) isOpen = false;
    }
</script>

<svelte:window on:click={closeClickOutside}/>

<header>
    <a href="{base}/">
        <img src={logo} alt="Mandatsrechner-Logo">
        <p>Mandatsrechner</p>
    </a>

    <div class="custom-select">
        <button class="select-trigger" on:click|stopPropagation={() => isOpen = !isOpen} class:has-flag={$page.url.pathname !== '/'}>
            {#if $page.url.pathname !== '/'}
                <img src="{base}/flags/{$page.url.pathname.split('/').pop()}.jpg" alt="" class="flag-img">
            {/if}
            <span class="label-text">
                {elections.find(e => `${base}/${e.id}` === path)?.label || 'Wahl auswählen'}
            </span>
            <span class="chevron">{isOpen ? '▲' : '▼'}</span>
        </button>

        {#if isOpen}
            <ul class="options-list">
                <li>
                    <button on:click={() => { isOpen = false; goto(`${base}/`); }}>
                        Wahl auswählen
                    </button>
                </li>
                {#each elections as election}
                    <li>
                        <button on:click={() => handleSelect(election.id)} class:active={path.endsWith(election.id)}>
                            <img src="{base}/flags/{election.id}.jpg" alt="" class="flag-img">
                            {election.label}
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</header>

<slot></slot>