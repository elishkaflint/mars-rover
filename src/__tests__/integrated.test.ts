describe('Integrated tests', () => {
    it('Scenario 1', () => {
        const grid = new Grid(8, 4);
        const rover = new Rover(grid, 2, 3, 'E');

        rover.turnLeft();
        rover.moveForward();
        rover.turnRight();
        rover.moveForward();
        rover.moveForward();

        expect(rover.isLost).toBe(true);
        expect(rover.x).toBe(3);
        expect(rover.y).toBe(4);
        expect(rover.orientation).toBe('E');
    });
});