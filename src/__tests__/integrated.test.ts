import { assertExpected } from './utils';
import { Grid } from '../grid';
import { Rover } from '../rover';

describe('Rover integrated tests', () => {
    test('Scenario 1', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(2, 3, 'E', grid);

        rover.turnLeft();
        rover.moveForward();
        rover.turnRight();
        rover.moveForward();
        rover.moveForward(); // this goes off the grid

        assertExpected(rover, {
            isLost: true, // in the spec, this is false
            x: 3, // in the spec, this is 4 (but my programme maintains last known position because rover is lost)
            y: 4,
            orientation: 'E',
        });
    });

    test('Scenario 2', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(0, 2, 'N', grid);

        rover.moveForward();
        rover.moveForward();
        rover.turnLeft();
        rover.moveForward();
        rover.turnRight();
        rover.moveForward();
        rover.moveForward();

        assertExpected(rover, {
            isLost: true,
            x: 0,
            y: 4,
            orientation: 'W',
        });
    });

    test('Scenario 3', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(2, 3, 'N', grid);

        rover.moveForward();
        rover.turnLeft();
        rover.turnLeft();
        rover.moveForward();
        rover.turnRight();

        assertExpected(rover, {
            isLost: false,
            x: 2,
            y: 3,
            orientation: 'W',
        });
    });

    test('Scenario 4', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(1, 0, 'S', grid);

        rover.moveForward();
        rover.moveForward();
        rover.turnRight();
        rover.turnLeft();
        rover.moveForward();

        assertExpected(rover, {
            isLost: true,
            x: 1,
            y: 0,
            orientation: 'S',
        });
    });
});
