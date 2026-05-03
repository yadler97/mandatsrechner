export const ApportionmentMethods = {
    DHONDT: "D'Hondt",
    SAINTE_LAGUE: "Sainte-Laguë",
    HARE_NIEMEYER: "Hare-Niemeyer"
};

interface ApportionmentStep {
    seat: number;
    winnerIdx: number;
    quotients: number[];
}

export function dhondt(vote_shares: number[], mandate_count: number) {
    let mandates = new Array(vote_shares.length).fill(0);
    let current_divisors = new Array(vote_shares.length).fill(1);
    let current_vote_count = [...vote_shares];
    let history: ApportionmentStep[] = [];

    for (let i = 0; i < mandate_count; i++) {
        let maxVal = Math.max(...current_vote_count);
        let idx = current_vote_count.indexOf(maxVal);

        history.push({
            seat: i + 1,
            winnerIdx: idx,
            quotients: [...current_vote_count]
        });

        mandates[idx]++;
        current_divisors[idx]++;
        current_vote_count[idx] = vote_shares[idx] / current_divisors[idx];
    }

    return { mandates, history };
}

export function saintelague(vote_shares: number[], mandate_count: number) {
    let mandates = new Array(vote_shares.length).fill(0);
    let current_divisors = new Array(vote_shares.length).fill(0.5);
    let current_vote_count = vote_shares.map(v => v / 0.5);
    let history: ApportionmentStep[] = [];

    for (let i = 0; i < mandate_count; i++) {
        let maxVal = Math.max(...current_vote_count);
        let idx = current_vote_count.indexOf(maxVal);

        history.push({
            seat: i + 1,
            winnerIdx: idx,
            quotients: [...current_vote_count]
        });

        mandates[idx]++;
        current_divisors[idx] += 1;
        current_vote_count[idx] = vote_shares[idx] / current_divisors[idx];
    }

    return { mandates, history };
}

export function hareniemeyer(vote_shares: number[], mandate_count: number) {
    const totalVotes = vote_shares.reduce((sum, share) => sum + share, 0);
    const hareQuotient = totalVotes / mandate_count;

    const exactQuotas = vote_shares.map(share => share / hareQuotient);
    const initialMandates = exactQuotas.map(q => Math.floor(q));
    const remainders = exactQuotas.map((q, i) => q - initialMandates[i]);

    let history: ApportionmentStep[] = [];

    history.push({
        seat: 0,
        winnerIdx: -1,
        quotients: exactQuotas
    });

    let mandates = [...initialMandates];
    let allocatedCount = mandates.reduce((a, b) => a + b, 0);
    const remainingToDistribute = mandate_count - allocatedCount;

    // Distribute by Largest Remainder
    const remainderIndices = remainders
        .map((rem, idx) => ({ rem, idx }))
        .sort((a, b) => b.rem - a.rem);

    for (let i = 0; i < remainingToDistribute; i++) {
        const winnerIdx = remainderIndices[i].idx;
        mandates[winnerIdx]++;

        // Add a row for each remainder-based seat
        history.push({
            seat: allocatedCount + i + 1,
            winnerIdx: winnerIdx,
            quotients: [...remainders]
        });

        remainders[winnerIdx] = 0;
    }

    return { mandates, history };
}