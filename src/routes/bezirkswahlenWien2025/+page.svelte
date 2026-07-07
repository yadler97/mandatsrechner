<svelte:head>
    <title>Mandatsrechner - {electionState.name}</title>
    <meta property="og:title" content="Mandatsrechner - {electionState.name}">
    <meta name="twitter:title" content="Mandatsrechner - {electionState.name}">
    <meta property="og:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenWien2025.png">
    <meta name="twitter:image" content="https://yadler97.github.io/mandatsrechner/previews/bezirkswahlenWien2025.png">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, countryCode, name } from '../../lib/elections/bezirkswahlenWien2025';
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

        if (isNaN(districtInt) || districtInt < 1 || districtInt > 23) {
            districtInt = 1;
            goto(`${page.url.pathname}?bezirk=${districtInt.toString()}`, { replaceState: true });
        }
    }

    let electionState = $state({
        name: '',
        mandateCount: 0,
        threshold: 0,
        apportionmentMethod: ApportionmentMethods.DHONDT,
        data: data[0],
        mandateData: mandateData[0],
        majorityData: majorityData[0],
        countryCode: countryCode,
        date: date,
        baseMandateRule: false,
        note: ''
    });

    let previousData = $state(structuredClone(data[0]));

    const updateDistrict = (selectedDistrict) => {
        district = selectedDistrict;
        const districtInt = parseInt(district);

        const fresh = structuredClone(data[districtInt - 1]);
        previousData.labels = fresh.labels;
        previousData.datasets = fresh.datasets;

        electionState.name = `${name} (${district}.)`;
        electionState.data = data[districtInt - 1];
        electionState.mandateData = mandateData[districtInt - 1];
        electionState.majorityData = majorityData[1]; // Assuming index mapping
        electionState.majorityData = majorityData[districtInt - 1];

        // Mandate count logic
        if ([1, 4, 5, 6, 7, 8, 9, 13, 18].includes(districtInt)) {
            electionState.mandateCount = 40;
        } else if (districtInt === 17) {
            electionState.mandateCount = 42;
        } else if (districtInt === 19) {
            electionState.mandateCount = 50;
        } else if (districtInt === 15) {
            electionState.mandateCount = 52;
        } else if (districtInt === 20) {
            electionState.mandateCount = 56;
        } else if ([2, 3, 10, 11, 12, 14, 16, 21, 22, 23].includes(districtInt)) {
            electionState.mandateCount = 60;
        }
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
</script>

<select bind:value={district} onchange={() => gotoDistrict(district)} class="district_select">
    <option value="1">1., Innere Stadt</option>
    <option value="2">2., Leopoldstadt</option>
    <option value="3">3., Landstraße</option>
    <option value="4">4., Wieden</option>
    <option value="5">5., Margareten</option>
    <option value="6">6., Mariahilf</option>
    <option value="7">7., Neubau</option>
    <option value="8">8., Josefstadt</option>
    <option value="9">9., Alsergrund</option>
    <option value="10">10., Favoriten</option>
    <option value="11">11., Simmering</option>
    <option value="12">12., Meidling</option>
    <option value="13">13., Hietzing</option>
    <option value="14">14., Penzing</option>
    <option value="15">15., Rudolfsheim-Fünfhaus</option>
    <option value="16">16., Ottakring</option>
    <option value="17">17., Hernals</option>
    <option value="18">18., Währing</option>
    <option value="19">19., Döbling</option>
    <option value="20">20., Brigittenau</option>
    <option value="21">21., Floridsdorf</option>
    <option value="22">22., Donaustadt</option>
    <option value="23">23., Liesing</option>
</select>

<ElectionCharts />