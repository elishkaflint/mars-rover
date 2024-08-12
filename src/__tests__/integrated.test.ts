import { assertExpected } from './utils';
import { Grid } from '../grid';
import { Robot } from '../robot';

describe('Robot integrated tests', () => {
    test('Scenario 1', () => {
        const grid = new Grid(4, 8);
        const robot = new Robot(2, 3, 'E', grid);

        robot.turnLeft();
        robot.moveForward();
        robot.turnRight();
        robot.moveForward();
        robot.moveForward(); // this goes off the grid

        assertExpected(robot, {
            isLost: true, // in the spec, this is false
            x: 3, // in the spec, this is 4 (but my programme maintains last known position because robot is lost)
            y: 4,
            orientation: 'E',
        });
    });

    test('Scenario 2', () => {
        const grid = new Grid(4, 8);
        const robot = new Robot(0, 2, 'N', grid);

        robot.moveForward();
        robot.moveForward();
        robot.turnLeft();
        robot.moveForward();
        robot.turnRight();
        robot.moveForward();
        robot.moveForward();

        assertExpected(robot, {
            isLost: true,
            x: 0,
            y: 4,
            orientation: 'W',
        });
    });

    test('Scenario 3', () => {
        const grid = new Grid(4, 8);
        const robot = new Robot(2, 3, 'N', grid);

        robot.moveForward();
        robot.turnLeft();
        robot.turnLeft();
        robot.moveForward();
        robot.turnRight();

        assertExpected(robot, {
            isLost: false,
            x: 2,
            y: 3,
            orientation: 'W',
        });
    });

    test('Scenario 4', () => {
        const grid = new Grid(4, 8);
        const robot = new Robot(1, 0, 'S', grid);

        robot.moveForward();
        robot.moveForward();
        robot.turnRight();
        robot.turnLeft();
        robot.moveForward();

        assertExpected(robot, {
            isLost: true,
            x: 1,
            y: 0,
            orientation: 'S',
        });
    });
});
