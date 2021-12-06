import {
    countIncreases,
    calculateWindows,
    countWindowIncreases,
} from './index';

describe('can count increases and decreases', () => {
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

describe('can count increases and decreases in a sliding window', () => {
    test('can produce the window sums', () => {
        const input = [200, 210, 220, 230, 240];
        // 200 + 210 + 220
        // 210 + 220 + 230
        // 220 + 230 + 240
        const expectedWindows = [630, 660, 690];

        expect(calculateWindows(input)).toEqual(expectedWindows);
    });

    test('can count window increases', () => {
        const input = [200, 210, 220, 230, 240];
        const expectedCount = 2;

        expect(countWindowIncreases(input)).toEqual(expectedCount);
    });

    test('can count window increases and decreases', () => {
        const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
        const expectedCount = 5;

        expect(countWindowIncreases(input)).toEqual(expectedCount);
    });
});
