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
            const dateStr = module.date ?? "Unknown Date";

            const route = path
                .replace('/src/routes/', '')
                .replace('/data.js', '');

            const imagePath = `flags/${route}.jpg`;

            return { route: route || 'home', name, dateStr, imagePath };
        })
    ).then((results) => {
        const today = new Date().setHours(0, 0, 0, 0);

        const upcomingTemp = [];
        const pastTemp = [];

        results.forEach(({ route, name, dateStr, imagePath  }) => {
            const dateObj = new Date(dateStr);
            const date = dateObj.setHours(0, 0, 0, 0);
  
            if (!isNaN(date)) {
                const formattedDate = dateObj.toLocaleDateString("de-AT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });
  
                if (date >= today) {
                    upcomingTemp.push({ route, name, dateStr: formattedDate, date, imagePath });
                } else {
                    pastTemp.push({ route, name, dateStr: formattedDate, date, imagePath });
                }
            }
        });

        upcomingTemp.sort((a, b) => a.date - b.date);
        pastTemp.sort((a, b) => b.date - a.date);

        upcomingRoutes = [...upcomingTemp]; 
        pastRoutes = [...pastTemp];
    });
</script>

<h1>Anstehende Wahlen</h1>
<div class="scroll-container">
    {#each upcomingRoutes as { route, name, dateStr, imagePath }}
        <a href="{base}/{route}" class="card-link">
            <div class="card">
                <img src={imagePath} alt="Flag" class="card-image" />
                <div class="card-content">
                    <h3>{name}</h3>
                    <p>{dateStr}</p>
                </div>
            </div>
        </a>
    {/each}
</div>

<h1>Vergangene Wahlen</h1>
<div class="scroll-container">
    {#each pastRoutes as { route, name, dateStr, imagePath }}
        <a href="{base}/{route}" class="card-link">
            <div class="card">
                <img src={imagePath} alt="Flag" class="card-image" />
                <div class="card-content">
                    <h3>{name}</h3>
                    <p>{dateStr}</p>
                </div>
            </div>
        </a>
    {/each}
</div>
