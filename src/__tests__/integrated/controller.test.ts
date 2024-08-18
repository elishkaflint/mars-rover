import { Controller } from '../../controller';
import { FileReader } from '../../fileReader';
import { ConsoleWriter } from '../../consoleWriter';

describe('Controller', () => {
    test('Runs scenarios correctly with text input', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        const controller: Controller = new Controller(
            new FileReader('src/__tests__/integrated/input.txt'),
            new ConsoleWriter()
        );

        controller.run();

        expect(consoleSpy).toHaveBeenCalledWith(
            [
                '(3, 4, E) LOST', // in spec this is (4, 4, E) but final move takes robot off grid
                '(0, 4, W) LOST',
                '(2, 3, W)',
                '(1, 0, S) LOST',
            ].join('\n')
        );
    });
});
