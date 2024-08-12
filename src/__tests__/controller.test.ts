import { Input } from '../input';
import { Controller } from '../controller';

describe('Controller', () => {
    test('Executes all scenarios correctly', () => {
        const input: Input = {
            grid: ['8', '4'],
            robots: [
                {
                    position: ['2', '3', 'E'],
                    directions: ['L', 'F', 'R', 'F', 'F'],
                },
                {
                    position: ['0', '2', 'N'],
                    directions: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
                },
                {
                    position: ['2', '3', 'N'],
                    directions: ['F', 'L', 'L', 'F', 'R'],
                },
                {
                    position: ['1', '0', 'S'],
                    directions: ['F', 'F', 'R', 'L', 'F']
                }
            ],
        };

        const controller: Controller = new Controller(input);

        const result: string = controller.execute();

        expect(result).toBe('(3, 4, E) LOST\n(0, 4, W) LOST\n(2, 3, W)\n(1, 0, S) LOST');
    });
});
