<svelte:head>
    <title>Mandatsrechner</title>
    <meta property="og:title" content="Mandatsrechner">
    <meta name="twitter:title" content="Mandatsrechner">
</svelte:head>

<h1>Willkommen zum großen Mandatsrechner!</h1>

<script>
    import { base } from '$app/paths';

    const dataModules = import.meta.glob('/src/lib/elections/*.js', { eager: true });
    const today = new Date().setHours(0, 0, 0, 0);

    const allElections = Object.entries(dataModules).map(([path, module]) => {
        const fileName = path.split('/').pop()?.replace('.js', '') ?? 'unknown';
        // @ts-ignore
        const name = module.name ?? "Unnamed Route";
        // @ts-ignore
        const date = module.date ?? "Unknown Date";
        
        let comparisonDate = 0;
        let electionDate = "";

        if (date.length === 1) {
            const dateObj = new Date(date[0]);
            comparisonDate = dateObj.setHours(0, 0, 0, 0);
            electionDate = dateObj.toLocaleDateString("de-AT", { 
                day: "numeric",
                month: "long",
                year: "numeric",
            });
        } else if (date.length === 2) {
            const start = new Date(date[0]);
            const end = new Date(date[1]);
            comparisonDate = end.setHours(0, 0, 0, 0);
            
            electionDate = `${start.toLocaleDateString("de-AT", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })} - ${end.toLocaleDateString("de-AT", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}`;
        }

        return {
            route: fileName,
            name,
            electionDate: electionDate,
            date: comparisonDate,
            imagePath: `${base}/flags/${fileName}.jpg`
        };
    }).filter(item => item.date !== 0);

    const upcomingRoutes = allElections
        .filter(e => e.date >= today)
        .sort((a, b) => a.date - b.date);

    const pastRoutes = allElections
        .filter(e => e.date < today)
        .sort((a, b) => b.date - a.date);
</script>

<h2>Anstehende Wahlen</h2>
<div class="scroll-container">
    {#if upcomingRoutes.length > 0}
        {#each upcomingRoutes as { route, name, electionDate, imagePath }}
            <a href="{base}/{route}" class="card-link">
                <div class="card">
                    <img src={imagePath} alt="Flag" class="card-image" />
                    <div class="card-content">
                        <h3>{name}</h3>
                        <p>{electionDate}</p>
                    </div>
                </div>
            </a>
        {/each}
    {:else}
        <p>keine</p>
    {/if}
</div>

<h2>Vergangene Wahlen</h2>
<div class="scroll-container">
    {#if pastRoutes.length > 0}
        {#each pastRoutes as { route, name, electionDate, imagePath }}
            <a href="{base}/{route}" class="card-link">
                <div class="card">
                    <img src={imagePath} alt="Flag" class="card-image" />
                    <div class="card-content">
                        <h3>{name}</h3>
                        <p>{electionDate}</p>
                    </div>
                </div>
            </a>
        {/each}
    {:else}
        <p>keine</p>
    {/if}
</div>
