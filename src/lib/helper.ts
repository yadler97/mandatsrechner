export function formatDate(rawDates: string[]) {
    if (rawDates.length > 0) {
        return rawDates
            .map(d => new Date(d).toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }))
            .join(" - ");
    }

    return "Kein Datum";
}

export function getMajority(mandateCount: number) {
    return Math.floor((mandateCount / 2) + 1);
}

export function getTwoThirdsMajority(mandateCount: number) {
    return Math.ceil((mandateCount / 3 * 2));
}