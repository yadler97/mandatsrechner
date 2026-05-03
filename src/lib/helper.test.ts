import { describe, it, expect } from 'vitest';
import { formatDate, getMajority, getTwoThirdsMajority } from './helper';

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