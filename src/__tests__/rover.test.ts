import { Grid } from '../grid';
import { Rover } from '../rover';
import { assertExpected } from './utils';

describe('Rover unit tests', () => {

    describe('When facing north', () => {
        test('Moves forwards', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'N', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
        test('Turns left', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'N', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('Turns right', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'N', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('Gets lost', () => {
            const grid: Grid = new Grid(3, 3);
            const rover: Rover = new Rover(1, 2, 'N', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
    });

    describe('When facing east', () => {
        test('Moves forwards', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'E', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
        test('Turns left', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'E', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
        test('Turns right', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'E', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
        test('Gets lost', () => {
            const grid: Grid = new Grid(3, 3);
            const rover: Rover = new Rover(2, 1, 'E', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
    });

    describe('When facing south', () => {
        test('Moves forwards', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'S', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
        test('Turns left', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'S', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('Turns right', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'S', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('Gets lost', () => {
            const grid: Grid = new Grid(3, 3);
            const rover: Rover = new Rover(1, 0, 'S', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
    });

    describe('When facing west', () => {
        test('Moves forwards', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'W', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 0,
                y: 1,
                orientation: 'W',
            });
        });
        test('Turns left', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'W', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
        test('Turns right', () => {
            const grid = new Grid(3, 3);
            const rover = new Rover(1, 1, 'W', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
        test('Gets lost', () => {
            const grid: Grid = new Grid(3, 3);
            const rover: Rover = new Rover(0, 1, 'W', grid);

            rover.moveForward();
            assertExpected(rover, {
                isLost: true,
                x: 0,
                y: 1,
                orientation: 'W',
            });
        });
    });
});
