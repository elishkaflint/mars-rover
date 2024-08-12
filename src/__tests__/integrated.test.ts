import { assertExpected } from './utils';
import { Grid } from '../grid';
import { Rover } from '../rover';

describe('Integrated tests', () => {
    it('Scenario 1', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(2, 3, 'E', grid);

        rover.turnLeft();
        rover.moveForward();
        rover.turnRight();
        rover.moveForward();
        rover.moveForward();

        assertExpected(rover, {
            isLost: true,
            x: 3,
            y: 4,
            orientation: 'E',
        });
    });
});
