import { calculateIndexBitCounts, processInput, Rate } from './index';

describe('can calculate the bit counts for all indexes', () => {
    it('can calculate bit frequency for 3 inputs at 3 digits each', () => {
        const input = ['011', '010', '001'];
        const expectedOutput = [
            [3, 0],
            [1, 2],
            [1, 2],
        ];

        const result = calculateIndexBitCounts(input);

        expect(result).toEqual(expectedOutput);
    });
});

describe('can calculate the bit counts for all indexes', () => {
    it('can calculate the power', () => {
        const input = [
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010',
        ];

        const expectedOutput = 198;

        const gammaResult = processInput(input, Rate.GAMMA);
        const epsilonResult = processInput(input, Rate.EPSILON);

        expect(gammaResult * epsilonResult).toEqual(expectedOutput);
    });
});
