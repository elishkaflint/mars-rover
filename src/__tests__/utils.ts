import { Rover } from '../rover';

export function assertExpected(
    rover: Rover,
    expected: {
        isLost: boolean;
        x: number;
        y: number;
        orientation: string;
    }
) {
    expect(rover.isLost).toBe(expected.isLost);
    expect(rover.x).toBe(expected.x);
    expect(rover.y).toBe(expected.y);
    expect(rover.orientation).toBe(expected.orientation);
}
