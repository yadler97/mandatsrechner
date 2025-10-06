<svelte:head>
    <title>Mandatsrechner</title>
    <meta property="og:title" content="Mandatsrechner">
    <meta name="twitter:title" content="Mandatsrechner">
</svelte:head>

<h1>Willkommen zum großen Mandatsrechner!</h1>

<script>
    const dataModules = import.meta.glob('/src/routes/**/data.js');
    import { base } from '$app/paths';

    let upcomingRoutes = [];
    let pastRoutes = [];

    Promise.all(
        Object.entries(dataModules).map(async ([path, resolver]) => {
            const module = await resolver();

            // @ts-ignore
            const name = module.name ?? "Unnamed Route";
            // @ts-ignore
            const electionDate = module.date ?? "Unknown Date";

            const route = path
                .replace('/src/routes/', '')
                .replace('/data.js', '');

            const imagePath = `flags/${route}.jpg`;

            return { route: route || 'home', name, electionDate, imagePath };
        })
    ).then((results) => {
        const today = new Date().setHours(0, 0, 0, 0);

        const upcomingTemp = [];
        const pastTemp = [];

        results.forEach(({ route, name, electionDate, imagePath  }) => {
            let date;
            if (electionDate.length == 1) {
                const dateObj = new Date(electionDate[0]);
                date = dateObj.setHours(0, 0, 0, 0);
                electionDate = dateObj.toLocaleDateString("de-AT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });
            } else {
                const startDateObj = new Date(electionDate[0]);
                const endDateObj = new Date(electionDate[1]);
                date = endDateObj.setHours(0, 0, 0, 0);
                electionDate = `${startDateObj.toLocaleDateString("de-AT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })} - ${endDateObj.toLocaleDateString("de-AT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}`;
            }
  
            if (!isNaN(date)) {
                if (date >= today) {
                    upcomingTemp.push({ route, name, electionDate, date, imagePath });
                } else {
                    pastTemp.push({ route, name, electionDate, date, imagePath });
                }
            }
        });

        upcomingTemp.sort((a, b) => a.date - b.date);
        pastTemp.sort((a, b) => b.date - a.date);

        upcomingRoutes = [...upcomingTemp]; 
        pastRoutes = [...pastTemp];
    });
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
