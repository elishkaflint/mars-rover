import { Grid } from '../../grid';
import { Robot } from '../../robot';

describe('Robot unit tests', () => {
    const grid = new Grid(3, 3);

    describe('Moves forwards', () => {
        test('When facing north', () => {
            const robot = new Robot(1, 1, 'N', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
        test('When facing east', () => {
            const robot = new Robot(1, 1, 'E', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: false,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing south', () => {
            const robot = new Robot(1, 1, 'S', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
        test('When facing west', () => {
            const robot = new Robot(1, 1, 'W', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: false,
                x: 0,
                y: 1,
                orientation: 'W',
            });
        });
    });

    describe('Turns left', () => {
        test('When facing north', () => {
            const robot = new Robot(1, 1, 'N', grid);

            robot.turnLeft();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('When facing east', () => {
            const robot = new Robot(1, 1, 'E', grid);

            robot.turnLeft();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
        test('When facing south', () => {
            const robot = new Robot(1, 1, 'S', grid);

            robot.turnLeft();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing west', () => {
            const robot = new Robot(1, 1, 'W', grid);

            robot.turnLeft();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
    });

    describe('Turns right', () => {
        test('When facing north', () => {
            const robot = new Robot(1, 1, 'N', grid);

            robot.turnRight();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing east', () => {
            const robot = new Robot(1, 1, 'E', grid);

            robot.turnRight();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'S',
            });
        });
        test('When facing south', () => {
            const robot = new Robot(1, 1, 'S', grid);

            robot.turnRight();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'W',
            });
        });
        test('When facing west', () => {
            const robot = new Robot(1, 1, 'W', grid);

            robot.turnRight();

            assertExpected(robot, {
                isLost: false,
                x: 1,
                y: 1,
                orientation: 'N',
            });
        });
    });

    describe('Gets lost', () => {
        test('When facing north', () => {
            const robot: Robot = new Robot(1, 2, 'N', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: true,
                x: 1,
                y: 2,
                orientation: 'N',
            });
        });
        test('When facing east', () => {
            const robot: Robot = new Robot(2, 1, 'E', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: true,
                x: 2,
                y: 1,
                orientation: 'E',
            });
        });
        test('When facing south', () => {
            const robot: Robot = new Robot(1, 0, 'S', grid);

            robot.moveForward();

            assertExpected(robot, {
                isLost: true,
                x: 1,
                y: 0,
                orientation: 'S',
            });
        });
        test('When facing west', () => {
            const robot: Robot = new Robot(0, 1, 'W', grid);

            robot.moveForward();
            assertExpected(robot, {
                isLost: true,
                x: 0,
                y: 1,
                orientation: 'W',
            });
        });
    });

    describe('Get position', () => {
        test('When not lost', () => {
            const robot: Robot = new Robot(0, 1, 'W', grid);

            const position = robot.getPosition();

            expect(position).toBe('(0, 1, W)');
        });
        test('When lost', () => {
            const robot: Robot = new Robot(0, 0, 'W', grid);
            robot.moveForward();

            const position = robot.getPosition();

            expect(position).toBe('(0, 0, W) LOST');
        });
    });
});

export function assertExpected(
    robot: Robot,
    expected: {
        isLost: boolean;
        x: number;
        y: number;
        orientation: string;
    }
) {
    expect(robot.isLost).toBe(expected.isLost);
    expect(robot.x).toBe(expected.x);
    expect(robot.y).toBe(expected.y);
    expect(robot.orientation).toBe(expected.orientation);
}
