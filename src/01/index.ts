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

const countIncreases = (arr: number[]): number => {
    return arr.reduce((acc, curr) => {
        return acc + (curr > 0 ? 1 : 0);
    }, 0);
};
