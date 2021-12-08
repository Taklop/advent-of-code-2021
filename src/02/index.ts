import { readFileSync } from 'fs';
import * as path from 'path';

export const start = (): void => {
    const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(
        '\n',
    );

    const { horizontal, depth } = processInput(input);
    console.log(
        `The submarine is at ${horizontal} units horizontally and ${depth} units deep`,
    );

    console.log(`If we multiply those values, we get ${horizontal * depth} \n`);

    // PART 2 //
    console.log('When we use the correct instructions (🙈) we get:');
    const {
        horizontal: horizontalUpdated,
        depth: depthUpdated,
        aim,
    } = processInputUpdated(input);

    console.log(
        `The submarine is at ${horizontalUpdated} units horizontally and ${depthUpdated} units deep. It's aim is ${aim}`,
    );

    console.log(
        `If we multiply those values, we get ${
            horizontalUpdated * depthUpdated
        }`,
    );
};

export const processInput = (input: string[]): SubmarinePosition =>
    input
        .map(getInstructionFromLine)

        .reduce((acc, instruction) => processInstruction(instruction, acc), {
            depth: 0,
            horizontal: 0,
        });

export const processInstruction = (
    { direction, magnitude }: Instruction,
    submarinePosition: SubmarinePosition,
): SubmarinePosition => {
    switch (direction) {
        case Direction.FORWARD:
            return {
                ...submarinePosition,
                horizontal: submarinePosition.horizontal + magnitude,
            };
        case Direction.UP:
            return {
                ...submarinePosition,
                depth: submarinePosition.depth - magnitude,
            };
        case Direction.DOWN:
            return {
                ...submarinePosition,
                depth: submarinePosition.depth + magnitude,
            };
    }
};

const getInstructionFromLine = (line: string): Instruction => {
    const [direction, magnitude] = line.split(' ');

    if (isValidDirection(direction)) {
        return {
            direction,
            magnitude: Number(magnitude),
        };
    }

    throw new Error('no proper direction or whatever');
};

const isValidDirection = (direction: string): direction is Direction =>
    direction.toUpperCase() in Direction;

export type Instruction = {
    direction: Direction;
    magnitude: number;
};

export enum Direction {
    FORWARD = 'forward',
    DOWN = 'down',
    UP = 'up',
}

export type SubmarinePosition = {
    horizontal: number;
    depth: number;
};

// PART TWO //

export type SubmarinePositionUpdated = {
    horizontal: number;
    depth: number;
    aim: number;
};

export const processInstructionUpdated = (
    { direction, magnitude }: Instruction,
    submarinePosition: SubmarinePositionUpdated,
): SubmarinePositionUpdated => {
    switch (direction) {
        case Direction.FORWARD:
            return {
                ...submarinePosition,
                horizontal: submarinePosition.horizontal + magnitude,
                depth:
                    submarinePosition.depth + magnitude * submarinePosition.aim,
            };
        case Direction.UP:
            return {
                ...submarinePosition,
                aim: submarinePosition.aim - magnitude,
            };
        case Direction.DOWN:
            return {
                ...submarinePosition,
                aim: submarinePosition.aim + magnitude,
            };
    }
};

export const processInputUpdated = (
    input: string[],
): SubmarinePositionUpdated =>
    input
        .map(getInstructionFromLine)
        .reduce(
            (acc, instruction) => processInstructionUpdated(instruction, acc),
            {
                depth: 0,
                horizontal: 0,
                aim: 0,
            },
        );
