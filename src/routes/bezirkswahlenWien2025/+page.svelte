<svelte:head>
   <title>Mandatsrechner - {name}</title>
   <meta property="og:title" content="Mandatsrechner - {name}">
   <meta name="twitter:title" content="Mandatsrechner - {name}">
</svelte:head>

<script>
    import { data, mandateData, majorityData, date, name } from './data';
	import ElectionCharts from './../../ElectionCharts.svelte';
    import { setContext } from 'svelte'
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
    import { ApportionmentMethods } from '$lib/apportionmentMethods';

    let district = $page.url.searchParams.get('bezirk') || '1';
    let districtInt = parseInt(district);

    if (isNaN(districtInt) || districtInt < 1 || districtInt > 23) {
        districtInt = 1;
        goto(`${$page.url.pathname}?bezirk=${districtInt.toString()}`, { replaceState: true });
    }

    let mandateCount = writable(0);
    let dataObj = writable();
    let mandateDataObj = writable();
    let majorityDataObj = writable();

    setContext('mandateCount', mandateCount);
    setContext('data', dataObj);
    setContext('mandateData', mandateDataObj);
    setContext('majorityData', majorityDataObj);

    const updateDistrict = (selectedDistrict) => {
        district = selectedDistrict;

        // Update context based on the selected district
        districtInt = parseInt(district);
        $dataObj = data[districtInt - 1];
        $mandateDataObj = mandateData[districtInt - 1];
        $majorityDataObj =  majorityData[districtInt - 1];

        // Set the mandate count based on the district
        if (districtInt == 1 || districtInt == 4 || districtInt == 5 || districtInt == 6 || districtInt == 7 || districtInt == 8 || districtInt == 9 || districtInt == 13 || districtInt == 18) {
            $mandateCount = 40;
        } else if (districtInt == 17) {
            $mandateCount = 42;
        } else if (districtInt == 19) {
            $mandateCount = 50;
        } else if (districtInt == 15) {
            $mandateCount = 52;
        } else if (districtInt == 20) {
            $mandateCount = 56;
        } else if (districtInt == 2 || districtInt == 3 || districtInt == 10 || districtInt == 11 || districtInt == 12 || districtInt == 14 || districtInt == 16 || districtInt == 21 || districtInt == 22 || districtInt == 23) {
            $mandateCount = 60;
        }
    };

    updateDistrict(district);

    const gotoDistrict = (selectedDistrict) => {
        goto(`?bezirk=${selectedDistrict}`, { replaceState: true });
        updateDistrict(selectedDistrict);
    }

    setContext('threshold', writable(0));
    setContext('apportionmentMethod', writable(ApportionmentMethods.DHONDT));
    setContext('electionDate', date);
    setContext('baseMandateRule', false);
</script>

<select bind:value={district} on:change={() => gotoDistrict(district)} class="district_select">
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