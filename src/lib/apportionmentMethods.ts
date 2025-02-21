export function dhondt(vote_shares, mandate_count) {
    let mandates: number[] = [];
    let current_divisors: number[] = [];
    let current_vote_count = [...vote_shares];

    for (let _i in vote_shares) {
        current_divisors.push(1);
        mandates.push(0);
    }

    for (let i = 0; i < mandate_count; i++) {
        let idx = current_vote_count.indexOf(Math.max(...current_vote_count));
        current_divisors[idx] = current_divisors[idx] + 1;
        mandates[idx] = mandates[idx] + 1;
        current_vote_count[idx] = vote_shares[idx] / current_divisors[idx];
    }

    return mandates;
}

export function saintelague(vote_shares, mandate_count) {
    let mandates: number[] = [];
    let current_divisors = new Array(vote_shares.length).fill(0.5);
    let current_vote_count = [...vote_shares];

    for (let i in vote_shares) {
        current_divisors.push(1);
        mandates.push(0);
    }

    for (let i = 0; i < mandate_count; i++) {
        let idx = current_vote_count.indexOf(Math.max(...current_vote_count));
        current_divisors[idx] = current_divisors[idx] + 1;
        mandates[idx] = mandates[idx] + 1;
        current_vote_count[idx] = vote_shares[idx] / current_divisors[idx];
    }

    return mandates;
}

export function hareniemeyer(vote_shares, mandate_count) {
    type MandateData = { initialMandates: number; remainder: number };
    let mandates: MandateData[] = [];
    const totalEligibleShares = vote_shares.reduce((sum, share) => sum + share, 0);

    const hareQuotient = totalEligibleShares / mandate_count;

    mandates = vote_shares.map(share => {
        const initialMandates = Math.floor(share / hareQuotient);
        const remainder = share % hareQuotient;
        return { initialMandates, remainder };
    });

    let allocatedMandates = mandates.reduce((sum, p) => sum + (p.initialMandates || 0), 0);
    const remainingMandates = mandate_count - allocatedMandates;

    const remainderSorted = mandates
        .map((p, index) => ({ index, remainder: p.remainder || 0 }))
        .sort((a, b) => b.remainder - a.remainder);

    for (let i = 0; i < remainingMandates; i++) {
        mandates[remainderSorted[i].index].initialMandates += 1;
    }

    return mandates.map(p => (p.initialMandates || 0));
}