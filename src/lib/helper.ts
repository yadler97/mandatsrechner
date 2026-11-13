import { PartyColours } from "./partyColours";

export function formatDate(rawDates: string[]) {
    if (rawDates.length > 0) {
        return rawDates
            .map(d => new Date(d).toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }))
            .join(" - ");
    }

    return "Kein Datum";
}

export function getYear(rawDates: string[]) {
    if (!rawDates) return 'Previous';
    return new Date(rawDates[0]).getFullYear();
}

export function getMajority(mandateCount: number) {
    return Math.floor((mandateCount / 2) + 1);
}

export function getTwoThirdsMajority(mandateCount: number) {
    return Math.ceil((mandateCount / 3 * 2));
}

export function generateElectionStructs(input, countryCode?) {
	const { partyOrder, mandateOrder, parties } = input;

    const getColour = (partyName, partyData) => {
		const key = partyData?.colourKey ?? partyName;
		if (key.startsWith('rgb') || key.startsWith('#')) {
			return key;
		}
		return PartyColours[countryCode]?.[key] ?? 'rgb(170, 170, 170)';
	};

	// 1. Generate `voteData`
	const dataDatasets = mandateOrder
        .filter((partyName) => {
                const partyData = parties[partyName];
                return partyData && partyData.votes !== undefined;
            })
        .map((partyName) => {
            const partyData = parties[partyName];
            const targetLabel = partyData.label ?? partyName;
            const labelIndex = partyOrder.indexOf(targetLabel);
            const dataArray = new Array(partyOrder.length).fill(0);

            if (labelIndex !== -1) {
                dataArray[labelIndex] = partyData.votes;
            }

            return {
                label: partyName,
                index: labelIndex,
                data: dataArray,
                backgroundColor: getColour(partyName, partyData),
                isExemptFromThreshold: partyData.isExemptFromThreshold,
                reservedSeats: partyData.reservedSeats
            };
        });

	const voteData = {
		labels: partyOrder,
		datasets: dataDatasets,
	};

	// 2. Generate `mandateData`
    const mandateCounts = mandateOrder.map(partyName => {
		const partyData = parties[partyName] || {};
		return partyData.mandates ?? partyData.historicalMandates ?? 0;
	});
	const mandateColors = mandateOrder.map(partyName => getColour(partyName, parties[partyName]));

	const mandateData = {
		labels: mandateOrder,
		datasets: [
			{
				label: 'Mandate',
				data: mandateCounts,
				backgroundColor: mandateColors,
			},
		],
	};

	// 3. Generate `majorityData`
	const majorityDatasets = mandateOrder.map(partyName => {
		const partyData = parties[partyName];

        const isHidden = partyData.inGovernment === undefined 
			? false
			: !(partyData.inGovernment ?? false);

		return {
			label: partyName,
			data: [partyData.mandates],
			backgroundColor: getColour(partyName, partyData),
			hidden: isHidden,
		};
	});

	const majorityData = {
		labels: ['Mandate'],
		datasets: majorityDatasets,
	};

	return { voteData, mandateData, majorityData };
}