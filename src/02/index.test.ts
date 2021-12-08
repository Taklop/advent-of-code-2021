import {
    processInstruction,
    processInput,
    SubmarinePosition,
    Instruction,
    Direction,
    processInputUpdated,
} from './index';

describe('can process instruction', () => {
    it('can move forward', () => {
        const inputPosition: SubmarinePosition = {
            horizontal: 0,
            depth: 0,
        };

        const inputInstruction: Instruction = {
            direction: Direction.FORWARD,
            magnitude: 1,
        };

        const expectedPosition: SubmarinePosition = {
            horizontal: 1,
            depth: 0,
        };

        const actualPosition: SubmarinePosition = processInstruction(
            inputInstruction,
            inputPosition,
        );

        expect(actualPosition).toEqual(expectedPosition);
    });
    it('can move down', () => {
        const inputPosition: SubmarinePosition = {
            horizontal: 0,
            depth: 0,
        };

        const inputInstruction: Instruction = {
            direction: Direction.DOWN,
            magnitude: 1,
        };

        const expectedPosition: SubmarinePosition = {
            horizontal: 0,
            depth: 1,
        };

        const actualPosition: SubmarinePosition = processInstruction(
            inputInstruction,
            inputPosition,
        );

        expect(actualPosition).toEqual(expectedPosition);
    });
    it('can move up', () => {
        const inputPosition: SubmarinePosition = {
            horizontal: 0,
            depth: 1,
        };

        const inputInstruction: Instruction = {
            direction: Direction.UP,
            magnitude: 1,
        };

        const expectedPosition: SubmarinePosition = {
            horizontal: 0,
            depth: 0,
        };

        const actualPosition: SubmarinePosition = processInstruction(
            inputInstruction,
            inputPosition,
        );

        expect(actualPosition).toEqual(expectedPosition);
    });
});

describe('can process input', () => {
    it('can process multiple instructions', () => {
        const input = [
            'forward 5',
            'down 5',
            'forward 8',
            'up 3',
            'down 8',
            'forward 2',
        ];

        const expectedDepth = 10;
        const expectedHorizontalPosition = 15;

        const { depth, horizontal } = processInput(input);

        expect(depth).toEqual(expectedDepth);
        expect(horizontal).toEqual(expectedHorizontalPosition);
    });
});
describe('can process input when the correct instructions are used', () => {
    it('can process multiple instructions', () => {
        const input = [
            'forward 5',
            'down 5',
            'forward 8',
            'up 3',
            'down 8',
            'forward 2',
        ];

        const expectedDepth = 60;
        const expectedHorizontalPosition = 15;
        const expectedAim = 10;

        const { depth, horizontal, aim } = processInputUpdated(input);

        expect(depth).toEqual(expectedDepth);
        expect(horizontal).toEqual(expectedHorizontalPosition);
        expect(aim).toEqual(expectedAim);
    });
});
