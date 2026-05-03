import { describe, expect, it } from 'vitest';
import { dhondt, hareniemeyer, saintelague } from './apportionmentMethods';

describe('dhondt', () => {
	it('should correctly calculate mandates', () => {
		let result = dhondt([50, 30, 20], 5);
		expect(result.mandates).toEqual([3, 1, 1]);

		result = dhondt([35, 25, 15, 10, 5], 5);
		expect(result.mandates).toEqual([2, 2, 1, 0, 0]);

		result = dhondt([57, 17, 26], 10);
		expect(result.mandates).toEqual([6, 1, 3]);
	});
});

describe('saintelague', () => {
	it('should correctly calculate mandates', () => {
		let result = saintelague([50, 30, 20], 5);
		expect(result.mandates).toEqual([3, 1, 1]);

		result = saintelague([35, 25, 15, 10, 5], 5);
		expect(result.mandates).toEqual([2, 1, 1, 1, 0]);

		result = saintelague([57, 17, 26], 10);
		expect(result.mandates).toEqual([5, 2, 3]);
	});
});

describe('hareniemeyer', () => {
	it('should correctly calculate mandates', () => {
		let result = hareniemeyer([50, 30, 20], 5);
		expect(result.mandates).toEqual([3, 1, 1]);

		result = hareniemeyer([35, 25, 15, 10, 5], 5);
		expect(result.mandates).toEqual([2, 1, 1, 1, 0]);

		result = hareniemeyer([57, 17, 26], 10);
		expect(result.mandates).toEqual([6, 2, 2]);
	});
})