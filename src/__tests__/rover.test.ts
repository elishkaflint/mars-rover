import { Grid } from '../grid';
import { Rover } from '../rover';
import { assertExpected } from './utils';

describe('Rover', () => {
    describe('Given 1 x 1 grid', () => {
        const grid: Grid = new Grid(1, 1);

        describe('When facing north and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const rover: Rover = new Rover(0, 0, 'N', grid);

                rover.moveForward();

                assertExpected(rover, {
                    isLost: true,
                    x: 0,
                    y: 0,
                    orientation: 'N',
                });
            });
        });

        describe('When facing east and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const rover: Rover = new Rover(0, 0, 'E', grid);

                rover.moveForward();

                assertExpected(rover, {
                    isLost: true,
                    x: 0,
                    y: 0,
                    orientation: 'E',
                });
            });
        });

        describe('When facing south and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const rover: Rover = new Rover(0, 0, 'S', grid);

                rover.moveForward();

                assertExpected(rover, {
                    isLost: true,
                    x: 0,
                    y: 0,
                    orientation: 'S',
                });
            });
        });

        describe('When facing west and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const rover: Rover = new Rover(0, 0, 'W', grid);

                rover.moveForward();
                assertExpected(rover, {
                    isLost: true,
                    x: 0,
                    y: 0,
                    orientation: 'W',
                });
            });
        });
    });
});
