<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenBerlin2026.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenBerlin2026.png">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, lastDate, countryCode, name } from '../../lib/elections/bezirkswahlenBerlin2026';
    import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte';
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    let district = $state('1');

    if (browser) {
        district = page.url.searchParams.get('bezirk') || '1';
        // svelte-ignore state_referenced_locally
        let districtInt = parseInt(district);

        if (isNaN(districtInt) || districtInt < 1 || districtInt > 12) {
            districtInt = 1;
            goto(`${page.url.pathname}?bezirk=${districtInt.toString()}`, { replaceState: true });
        }
    }

    let electionState = $state({
        name: '',
        mandateCount: 0,
        threshold: 3,
        apportionmentMethod: ApportionmentMethods.DHONDT,
        data: data[0],
        mandateData: mandateData[0],
        majorityData: majorityData[0],
        countryCode: countryCode,
        date: date,
        lastDate: lastDate,
        baseMandateRule: false,
        note: ''
    });

    let previousData = $state(structuredClone(data[0]));
    let previousMandateData = $state(structuredClone(mandateData[0]));

    const updateDistrict = (selectedDistrict) => {
        district = selectedDistrict;
        const districtInt = parseInt(district);

        const fresh = structuredClone(data[districtInt - 1]);
        previousData.labels = fresh.labels;
        previousData.datasets = fresh.datasets;

        const freshMandates = structuredClone(mandateData[districtInt - 1]);
        previousMandateData.labels = freshMandates.labels;
        previousMandateData.datasets = freshMandates.datasets;

        electionState.name = `${name} (${district}.)`;
        electionState.data = data[districtInt - 1];
        electionState.mandateData = mandateData[districtInt - 1];
        electionState.majorityData = majorityData[1]; // Assuming index mapping
        electionState.majorityData = majorityData[districtInt - 1];
        electionState.mandateCount = 55;
    };

    $effect(() => {
        const v = page.url.searchParams.get('v');
        if (v) {
            const voteArray = v.split(',').map(Number);
            voteArray.forEach((votes, i) => {
                if (electionState.data.datasets[i]) {
                    const idx = electionState.data.datasets[i].index;
                    electionState.data.datasets[i].data[idx] = votes;
                }
            });
        }
    });

    // svelte-ignore state_referenced_locally
    updateDistrict(district);

    const gotoDistrict = (selectedDistrict) => {
        goto(`?bezirk=${selectedDistrict}`, { replaceState: true });
        updateDistrict(selectedDistrict);
    }

    setContext('electionState', electionState);
    setContext('previousData', previousData);
    setContext('previousMandateData', previousMandateData);
</script>

<select bind:value={district} onchange={() => gotoDistrict(district)} class="district_select">
    <option value="1">1., Mitte</option>
    <option value="2">2., Friedrichshain-Kreuzberg</option>
    <option value="3">3., Pankow</option>
    <option value="4">4., Charlottenburg-Wilmersdorf</option>
    <option value="5">5., Spandau</option>
    <option value="6">6., Steglitz-Zehlendorf</option>
    <option value="7">7., Tempelhof-Schöneberg</option>
    <option value="8">8., Neukölln</option>
    <option value="9">9., Treptow-Köpenick</option>
    <option value="10">10., Marzahn-Hellersdorf</option>
    <option value="11">11., Lichtenberg</option>
    <option value="12">12., Reinickendorf</option>
</select>

<ElectionCharts />