import { Compass } from '../../compass';

describe('Compass', () => {
    test('Turn left - north to west', () => {
        const newOrientation: string = Compass.turnLeft('N');
        expect(newOrientation).toBe('W');
    });
    test('Turn left - east to north', () => {
        const newOrientation: string = Compass.turnLeft('E');
        expect(newOrientation).toBe('N');
    });
    test('Turn left - south to east', () => {
        const newOrientation: string = Compass.turnLeft('S');
        expect(newOrientation).toBe('E');
    });
    test('Turn left - west to south', () => {
        const newOrientation: string = Compass.turnLeft('W');
        expect(newOrientation).toBe('S');
    });
    test('Turn right - north to east', () => {
        const newOrientation: string = Compass.turnRight('N');
        expect(newOrientation).toBe('E');
    });
    test('Turn right - east to south', () => {
        const newOrientation: string = Compass.turnRight('E');
        expect(newOrientation).toBe('S');
    });
    test('Turn right - south to west', () => {
        const newOrientation: string = Compass.turnRight('S');
        expect(newOrientation).toBe('W');
    });
    test('Turn right - west to north', () => {
        const newOrientation: string = Compass.turnRight('W');
        expect(newOrientation).toBe('N');
    });
});
