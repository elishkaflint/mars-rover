import {Grid} from "../grid";
import {Rover} from "../rover";

describe('Rover', () => {
    describe('Given 1 x 1 grid', () => {
        describe('When facing north and moves forwards', () => {
            it('Becomes lost and returns last position', () => {
                const grid: Grid = new Grid(1,1);
                const rover: Rover = new Rover(0, 0, 'N', grid);

                rover.moveForward();

                expect(rover.isLost).toBe(true);
                expect(rover.x).toBe(0);
                expect(rover.y).toBe(0);
                expect(rover.orientation).toBe('N');
            })
        })
    })
})