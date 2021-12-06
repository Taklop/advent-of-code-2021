import { readFileSync } from 'fs';
import * as path from 'path';

const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .split('\n')
    .map(Number);

export const start = (): void => {
    console.log(`There are ${countIncreases(input)} numbers that increase`);

    console.log(
        `When using a sliding window of 3, there are ${countWindowIncreases(
            input,
        )} sums larger  than the previous sum!`,
    );
};

export const countIncreases = (inputDepths: number[]): number =>
    inputDepths.reduce((increaseCount, currentDepth, index) => {
        if (index === 0) {
            return increaseCount;
        }

        return increaseCount + (currentDepth > inputDepths[index - 1] ? 1 : 0);
    }, 0);

export const calculateWindows = (inputDepths: number[]): number[] =>
    inputDepths
        .map((currentDepth, index, inputDepths) => {
            if (index > inputDepths.length - 3) {
                return 0;
            }
            return (currentDepth +=
                inputDepths[index + 1] + inputDepths[index + 2]);
        })
        .slice(0, inputDepths.length - 2);

export const countWindowIncreases = (inputDepths: number[]): number =>
    countIncreases(calculateWindows(inputDepths));
