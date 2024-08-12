import { Robot } from '../robot';

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
