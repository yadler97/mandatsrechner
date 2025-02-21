import { expect, test } from 'vitest';
import { dhondt } from './apportionmentMethods';

test('D\'Hondt', () => {
	let mandates = dhondt([50, 30, 20], 5);
	expect(mandates).toEqual([3, 1, 1]);

	mandates = dhondt([35, 25, 15, 10, 5], 5);
	expect(mandates).toEqual([2, 2, 1, 0, 0]);
});
