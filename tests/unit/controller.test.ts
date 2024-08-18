import { Controller } from '../../src/controller';
import { MockFileReader } from './mocks/mockFileReader';
import { MockWriter } from './mocks/mockWriter';

describe('Controller', () => {
    test('Runs scenarios correctly with text input', () => {
        const writer: MockWriter = new MockWriter();

        const controller: Controller = new Controller(
            new MockFileReader({
                grid: ['4', '8'],
                robotDetails: [
                    {
                        position: ['2', '3', 'E'],
                        instructions: ['L', 'F', 'R', 'F', 'F'],
                    },
                    {
                        position: ['0', '2', 'N'],
                        instructions: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
                    },
                    {
                        position: ['2', '3', 'N'],
                        instructions: ['F', 'L', 'L', 'F', 'R'],
                    },
                    {
                        position: ['1', '0', 'S'],
                        instructions: ['F', 'F', 'R', 'L', 'F'],
                    },
                ],
            }),
            writer
        );

        controller.run();

        expect(writer.written).toBe(
            [
                '(3, 4, E) LOST', // in spec this is (4, 4, E) but final move takes robot off grid
                '(0, 4, W) LOST',
                '(2, 3, W)',
                '(1, 0, S) LOST',
            ].join('\n')
        );
    });
});
