<script>
    import '../app.css';

    import logo from '../lib/assets/logo.svg';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    let { children } = $props();

    const version = __APP_VERSION__;

    let isOpen = $state(false);

    let path = $derived(base + $page.url.pathname);
    let slug = $derived($page.url.pathname.split('/').filter(Boolean).pop());
    let isElectionPage = $derived(slug && slug !== 'mandatsrechner' && slug !== '');

    const modules = import.meta.glob('$lib/elections/*.js', { eager: true });
    const elections = Object.entries(modules)
        .map(([path, module]) => {
            // @ts-ignore
            const name = module.name ?? "Unnamed Route";
            // @ts-ignore
            const date = module.date ?? "Unknown Date";
            const filename = path.split('/').pop();
            
            return {
                id: filename?.replace('.js', '') ?? '',
                label: name,
                date: date ? new Date(date[0]) : new Date(0)
            };
        })
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .concat({ id: "spielwiese", label: "Spielwiese", date: new Date(0) });

    function handleSelect(id) {
        isOpen = false;
        goto(`${base}/${id}`);
    }

    // Close dropdown when clicking outside
    function closeClickOutside(e) {
        if (isOpen && !e.target.closest('.custom-select')) isOpen = false;
    }
</script>

<svelte:window onclick={closeClickOutside}/>

<header>
    <a href="{base}/">
        <img src={logo} alt="Mandatsrechner-Logo">
        <p>Mandatsrechner</p>
    </a>

    <div class="custom-select">
        <button
            class="select-trigger"
            onclick={(e) => {
                e.stopPropagation();
                isOpen = !isOpen;
            }}
            class:has-flag={isElectionPage}
        >
            {#if isElectionPage}
                <img src="{base}/flags/{slug}.jpg" alt="" class="flag-img">
            {/if}

            <span class="label-text">
                {elections.find(e => `${base}/${e.id}` === path)?.label || 'Wahl auswählen'}
            </span>
            <span class="chevron">{isOpen ? '▲' : '▼'}</span>
        </button>

        {#if isOpen}
            <ul class="options-list">
                <li>
                    <button onclick={() => { isOpen = false; goto(`${base}/`); }}>
                        Wahl auswählen
                    </button>
                </li>
                {#each elections as election}
                    <li>
                        <button
                            onclick={() => handleSelect(election.id)}
                            class:active={path.endsWith(election.id)}
                        >
                            <img src="{base}/flags/{election.id}.jpg" alt="" class="flag-img">
                            {election.label}
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</header>

<main>
    {@render children()}
</main>

<footer class="version-display">
    <p>Ver. {version}</p>
</footer>