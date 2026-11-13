import { describe, it, expect, vi } from 'vitest';
import { formatDate, generateElectionStructs, getMajority, getTwoThirdsMajority } from './helper';

describe('formatDate', () => {
    it('should return "Kein Datum" if input is an empty array', () => {
        expect(formatDate([])).toBe('Kein Datum');
    });

    it('should format a single date correctly in de-AT locale', () => {
        const input = ['2025-04-27'];
        expect(formatDate(input)).toBe('27. April 2025');
    });

    it('should format a date range correctly', () => {
        const input = ['2025-04-27', '2025-04-29'];
        expect(formatDate(input)).toBe('27. April 2025 - 29. April 2025');
    });
});

describe('getMajority', () => {
    it('should calculate simple majority for even numbers', () => {
        // Half of 10 is 5; majority is 6
        expect(getMajority(10)).toBe(6);
        expect(getMajority(100)).toBe(51);
    });

    it('should calculate simple majority for odd numbers', () => {
        // Half of 9 is 4.5; majority is 5
        expect(getMajority(9)).toBe(5);
        expect(getMajority(183)).toBe(92);
    });
});

describe('getTwoThirdsMajority', () => {
    it('should calculate two-thirds majority correctly', () => {
        // 90 seats: exactly 60
        expect(getTwoThirdsMajority(90)).toBe(60);
        
        // 100 seats: 66.66... -> 67
        expect(getTwoThirdsMajority(100)).toBe(67);
        
        // 88 seats: 58.66... -> 59
        expect(getTwoThirdsMajority(88)).toBe(59);
    });

    it('should handle small seat counts', () => {
        expect(getTwoThirdsMajority(3)).toBe(2);
        expect(getTwoThirdsMajority(1)).toBe(1);
    });
});

vi.mock('./partyColours', () => ({
	PartyColours: {
		C1: {
			A: 'rgb(230, 25, 75)',
			B: 'rgb(60, 180, 75)',
			C: 'rgb(255, 225, 25)',
			D: 'rgb(67, 99, 216)',
		},
		C2: {
			E: 'rgb(245, 130, 49)',
			F: 'rgb(145, 30, 180)',
		},
	},
}));

describe('generateElectionStructs', () => {
	const basicInput = {
		partyOrder: ['A', 'B', 'C'],
		mandateOrder: ['A', 'B', 'C'],
		parties: {
			A: { votes: 40, mandates: 10, inGovernment: true },
			B: { votes: 35, mandates: 8, inGovernment: false },
			C: { votes: 25, mandates: 6, inGovernment: false },
		},
	};

	it('should generate basic voteData, mandateData, and majorityData structures', () => {
		const { voteData, mandateData, majorityData } = generateElectionStructs(basicInput, 'C1');

		// 1. voteData
		expect(voteData.labels).toEqual(['A', 'B', 'C']);
		expect(voteData.datasets).toEqual([
			{
				label: 'A',
				index: 0,
				data: [40, 0, 0],
				backgroundColor: 'rgb(230, 25, 75)',
				isExemptFromThreshold: undefined,
				reservedSeats: undefined,
			},
			{
				label: 'B',
				index: 1,
				data: [0, 35, 0],
				backgroundColor: 'rgb(60, 180, 75)',
				isExemptFromThreshold: undefined,
				reservedSeats: undefined,
			},
			{
				label: 'C',
				index: 2,
				data: [0, 0, 25],
				backgroundColor: 'rgb(255, 225, 25)',
				isExemptFromThreshold: undefined,
				reservedSeats: undefined,
			},
		]);

		// 2. mandateData
		expect(mandateData.labels).toEqual(['A', 'B', 'C']);
		expect(mandateData.datasets).toEqual([
			{
				label: 'Mandate',
				data: [10, 8, 6],
				backgroundColor: ['rgb(230, 25, 75)', 'rgb(60, 180, 75)', 'rgb(255, 225, 25)'],
			},
		]);

		// 3. majorityData
		expect(majorityData.labels).toEqual(['Mandate']);
		expect(majorityData.datasets).toEqual([
			{ label: 'A', data: [10], backgroundColor: 'rgb(230, 25, 75)', hidden: false },
			{ label: 'B', data: [8], backgroundColor: 'rgb(60, 180, 75)', hidden: true },
			{ label: 'C', data: [6], backgroundColor: 'rgb(255, 225, 25)', hidden: true },
		]);
	});

	it('should order datasets by mandateOrder while aligning data indices to partyOrder', () => {
		const orderedInput = {
			partyOrder: ['A', 'B', 'C'],
			mandateOrder: ['C', 'B', 'A'],
			parties: {
				A: { votes: 45, mandates: 12, inGovernment: true },
				B: { votes: 30, mandates: 8, inGovernment: false },
				C: { votes: 15, mandates: 4, inGovernment: true },
			},
		};

		const { voteData, mandateData, majorityData } = generateElectionStructs(orderedInput, 'C1');

		// Labels stay in partyOrder for votes, mandateOrder for mandates
		expect(voteData.labels).toEqual(['A', 'B', 'C']);
		expect(mandateData.labels).toEqual(['C', 'B', 'A']);

		// Datasets follow mandateOrder, but index and data position point to partyOrder
		expect(voteData.datasets.map((d) => d.label)).toEqual(['C', 'B', 'A']);
		expect(voteData.datasets[0]).toMatchObject({ label: 'C', index: 2, data: [0, 0, 15] });
		expect(voteData.datasets[1]).toMatchObject({ label: 'B', index: 1, data: [0, 30, 0] });
		expect(voteData.datasets[2]).toMatchObject({ label: 'A', index: 0, data: [45, 0, 0] });

		expect(majorityData.datasets.map((d) => d.label)).toEqual(['C', 'B', 'A']);
	});

	it('should include parties with 0 votes in voteData, but excludes parties with undefined votes', () => {
		const mixedVotesInput = {
			partyOrder: ['A', 'B', 'C'],
			mandateOrder: ['A', 'B', 'C'],
			parties: {
				A: { votes: 50, mandates: 10, inGovernment: true },
				B: { votes: 0, mandates: 0, inGovernment: false },
				C: { mandates: 2, reservedSeats: 2, inGovernment: false }, // votes undefined
			},
		};

		const { voteData, mandateData, majorityData } = generateElectionStructs(mixedVotesInput, 'C1');

		expect(voteData.datasets.map((d) => d.label)).toEqual(['A', 'B']);
		expect(voteData.datasets[1].data).toEqual([0, 0, 0]);

		// Still included in mandateData & majorityData
		expect(mandateData.labels).toEqual(['A', 'B', 'C']);
		expect(mandateData.datasets[0].data).toEqual([10, 0, 2]);
		expect(majorityData.datasets.map((d) => d.label)).toEqual(['A', 'B', 'C']);
	});

	it('should support merged vote bars via custom label property (e.g., E + F -> E/F)', () => {
		const unionInput = {
			partyOrder: ['E/F'],
			mandateOrder: ['E', 'F'],
			parties: {
				E: { label: 'E/F', votes: 22.5, mandates: 23, inGovernment: false },
				F: { label: 'E/F', votes: 6.3, mandates: 6, inGovernment: false },
			},
		};

		const { voteData, mandateData } = generateElectionStructs(unionInput, 'C2');

		expect(voteData.datasets).toHaveLength(2);
		expect(voteData.datasets[0]).toMatchObject({ label: 'E', index: 0, data: [22.5] });
		expect(voteData.datasets[1]).toMatchObject({ label: 'F', index: 0, data: [6.3] });
		expect(mandateData.datasets[0].data).toEqual([23, 6]);
	});

	it('should resolve colours via colourKey (party key or direct colour) and falls back to default grey', () => {
		const colourInput = {
			partyOrder: ['P1', 'P2', 'P3', 'P4'],
			mandateOrder: ['P1', 'P2', 'P3', 'P4'],
			parties: {
				P1: { votes: 10, mandates: 1, colourKey: 'A' },
				P2: { votes: 10, mandates: 1, colourKey: '#123456' },
				P3: { votes: 10, mandates: 1, colourKey: 'rgb(12, 34, 56)' },
				P4: { votes: 10, mandates: 1 }, // Unknown party -> fallback
			},
		};

		const { voteData, mandateData } = generateElectionStructs(colourInput, 'C1');

		expect(voteData.datasets.map((d) => d.backgroundColor)).toEqual([
			'rgb(230, 25, 75)',
			'#123456',
			'rgb(12, 34, 56)',
			'rgb(170, 170, 170)',
		]);
		expect(mandateData.datasets[0].backgroundColor).toEqual([
			'rgb(230, 25, 75)',
			'#123456',
			'rgb(12, 34, 56)',
			'rgb(170, 170, 170)',
		]);
	});

	it('should fall back to historicalMandates or 0 in mandateData when mandates is undefined', () => {
		const historicalInput = {
			partyOrder: ['A', 'B'],
			mandateOrder: ['A', 'B'],
			parties: {
				A: { votes: 40, historicalMandates: 15 },
				B: { votes: 30 },
			},
		};

		const { mandateData } = generateElectionStructs(historicalInput, 'C1');

		expect(mandateData.datasets[0].data).toEqual([15, 0]);
	});

	it('should set hidden to false in majorityData when inGovernment is undefined', () => {
		const undefinedGovInput = {
			partyOrder: ['E', 'F'],
			mandateOrder: ['E', 'F'],
			parties: {
				E: { votes: 30, mandates: 18 },
				F: { votes: 20, mandates: 12 },
			},
		};

		const { majorityData } = generateElectionStructs(undefinedGovInput, 'C2');

		expect(majorityData.datasets[0].hidden).toBe(false);
		expect(majorityData.datasets[1].hidden).toBe(false);
	});

	it('should preserve optional metadata flags (isExemptFromThreshold, reservedSeats)', () => {
		const metaInput = {
			partyOrder: ['E'],
			mandateOrder: ['E'],
			parties: {
				E: {
					votes: 0.1,
					mandates: 1,
					isExemptFromThreshold: true,
					reservedSeats: 1,
					inGovernment: false,
				},
			},
		};

		const { voteData } = generateElectionStructs(metaInput, 'C2');

		expect(voteData.datasets[0]).toMatchObject({
			isExemptFromThreshold: true,
			reservedSeats: 1,
		});
	});
});