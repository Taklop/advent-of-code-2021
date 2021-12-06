import { readFileSync } from 'fs';
import * as path from 'path';

export const start = (): void => {
    const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

    console.log(
        `There are ${countIncreases(
            input.split('\n').map(Number),
        )} numbers that increase`,
    );
};

export const countIncreases = (arr: number[]): number => {
    return arr.reduce((acc, curr, index) => {
        if (index === 0) {
            return 0;
        }

        return acc + (curr > arr[index - 1] ? 1 : 0);
    }, 0);
};
