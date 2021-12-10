import { readFileSync } from 'fs';
import * as path from 'path';

export const start = (): void => {
    const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
        '\n',
    );

    const gammaRate = processInput(input, Rate.GAMMA);
    const epsilonRate = processInput(input, Rate.EPSILON);

    console.log(
        `The gamma rate is ${gammaRate} and the epsilon rate is ${epsilonRate}`,
    );
    console.log(`The total power is ${gammaRate * epsilonRate}`);
};

export const processInput = (input: string[], rateType: Rate): number => {
    const indexBitCounts = calculateIndexBitCounts(input);

    return calculateRate(indexBitCounts, rateType);
};

export const calculateIndexBitCounts = (input: string[]): number[][] => {
    return input.reduce(
        (accumulator, current) => {
            return [...current].map((bitValue, index) => {
                return bitValue == '1'
                    ? (accumulator[index] = [
                          accumulator[index][0],
                          accumulator[index][1] + 1,
                      ])
                    : (accumulator[index] = [
                          accumulator[index][0] + 1,
                          accumulator[index][1],
                      ]);
            });
        },
        Array.from({ length: input.length }, () => [0, 0]),
    );
};

export const calculateRate = (
    indexBitCounts: number[][],
    rateType: Rate,
): number => {
    const binaryRate = indexBitCounts.map((bitCounts) =>
        rateType == Rate.GAMMA
            ? bitCounts[0] > bitCounts[1]
                ? '0'
                : '1'
            : bitCounts[0] < bitCounts[1]
            ? '0'
            : '1',
    );

    return parseInt(binaryRate.join(''), 2);
};

export enum Rate {
    GAMMA,
    EPSILON,
}
