import { Grid } from '../grid';
import { Rover } from '../rover';
import { assertExpected } from './utils';

describe('Rover', () => {
    describe('Given a 1 x 1 grid', () => {

        describe('When facing north and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const grid: Grid = new Grid(1, 1);
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
                const grid: Grid = new Grid(1, 1);
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
                const grid: Grid = new Grid(1, 1);
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
                const grid: Grid = new Grid(1, 1);
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

    describe('Given a 3 x 3 grid', () => {

        describe('When rover starts in middle pointing north', () => {
            describe('Moves forwards', () => {
                it('Then rover is in correct position', () => {
                    const grid = new Grid(3, 3);
                    const rover = new Rover(1, 1, 'N', grid);

                    rover.moveForward();

                    assertExpected(rover, {
                        isLost: false,
                        x: 1,
                        y: 2,
                        orientation: 'N',
                    });
                });
            });
        });

        describe('When rover starts in middle pointing east', () => {
            describe('Moves forwards', () => {
                it('Then rover is in correct position', () => {
                    const grid = new Grid(3, 3);
                    const rover = new Rover(1, 1, 'E', grid);

                    rover.moveForward();

                    assertExpected(rover, {
                        isLost: false,
                        x: 2,
                        y: 1,
                        orientation: 'E',
                    });
                });
            });
        });

        describe('When rover starts in middle pointing south', () => {
            describe('Moves forwards', () => {
                it('Then rover is in correct position', () => {
                    const grid = new Grid(3, 3);
                    const rover = new Rover(1, 1, 'S', grid);

                    rover.moveForward();

                    assertExpected(rover, {
                        isLost: false,
                        x: 1,
                        y: 0,
                        orientation: 'S',
                    });
                });
            });
        });

        describe('When rover starts in middle pointing west', () => {
            describe('Moves forwards', () => {
                it('Then rover is in correct position', () => {
                    const grid = new Grid(3, 3);
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
        });
    });
});
