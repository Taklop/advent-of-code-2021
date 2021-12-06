import { countIncreases } from './index';

describe('can count increases', () => {
    test('can count only increases', () => {
        const input = [1, 2, 3, 4];
        const expectedCount = 3;

        expect(countIncreases(input)).toEqual(expectedCount);
    });

    test('can count only decreases', () => {
        const input = [4, 3, 2, 1];
        const expectedCount = 0;

        expect(countIncreases(input)).toEqual(expectedCount);
    });

    test('can count increases and decreases', () => {
        const input = [1, 2, 3, 4, 3, 2, 1];
        const expectedCount = 3;

        expect(countIncreases(input)).toEqual(expectedCount);
    });
});
