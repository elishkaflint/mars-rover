import { Grid } from '../grid';
import { Rover } from '../rover';
import { assertExpected } from './utils';

describe('Rover unit tests', () => {
    const grid = new Grid(3, 3);

    describe('Moves forwards', () => {
        test('When facing north', () => {
            const rover = new Rover(1, 1, 'N', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
        test('When facing east', () => {
            const rover = new Rover(1, 1, 'E', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing south', () => {
            const rover = new Rover(1, 1, 'S', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
        test('When facing west', () => {
            const rover = new Rover(1, 1, 'W', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: false,
                x: 0,
                y: 1,
                orientation: 'W',
            });
        });
    });

    describe('Turns left', () => {
        test('When facing north', () => {
            const rover = new Rover(1, 1, 'N', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('When facing east', () => {
            const rover = new Rover(1, 1, 'E', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
        test('When facing south', () => {
            const rover = new Rover(1, 1, 'S', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing west', () => {
            const rover = new Rover(1, 1, 'W', grid);

            rover.turnLeft();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
    });

    describe('Turns right', () => {
        test('When facing north', () => {
            const rover = new Rover(1, 1, 'N', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing east', () => {
            const rover = new Rover(1, 1, 'E', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
        test('When facing south', () => {
            const rover = new Rover(1, 1, 'S', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('When facing west', () => {
            const rover = new Rover(1, 1, 'W', grid);

            rover.turnRight();

            assertExpected(rover, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
    });

    describe('Gets lost', () => {
        test('When facing north', () => {
            const rover: Rover = new Rover(1, 2, 'N', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
        test('When facing east', () => {
            const rover: Rover = new Rover(2, 1, 'E', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing south', () => {
            const rover: Rover = new Rover(1, 0, 'S', grid);

            rover.moveForward();

            assertExpected(rover, {
                isLost: true,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
        test('When facing west', () => {
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

    describe("Get position", () => {
        test('When not lost', () => {
            const rover: Rover = new Rover(0, 1, 'W', grid);

            const position = rover.getPosition();

            expect(position).toBe("(0, 1, W)")
        })
        test('When lost', () => {
            const rover: Rover = new Rover(0, 0, 'W', grid);
            rover.moveForward()

            const position = rover.getPosition();

            expect(position).toBe("(0, 0, W) LOST")
        })
    })
});
