import {Compass} from "../compass";

describe('Compass', () => {
    test('Turn left - north to west', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnLeft('N');
        expect(newOrientation).toBe('W');
    })
    test('Turn left - east to north', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnLeft('E');
        expect(newOrientation).toBe('N');
    })
    test('Turn left - south to east', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnLeft('S');
        expect(newOrientation).toBe('E');
    })
    test('Turn left - west to south', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnLeft('W');
        expect(newOrientation).toBe('S');
    })
    test('Turn right - north to east', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnRight('N');
        expect(newOrientation).toBe('E');
    })
    test('Turn right - east to south', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnRight('E');
        expect(newOrientation).toBe('S');
    })
    test('Turn right - south to west', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnRight('S');
        expect(newOrientation).toBe('W');
    })
    test('Turn right - west to north', () => {
        const navigator: Compass = new Compass();
        const newOrientation: string = navigator.turnRight('W');
        expect(newOrientation).toBe('N');
    })
})