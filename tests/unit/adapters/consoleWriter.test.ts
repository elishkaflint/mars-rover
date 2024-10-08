import { ConsoleWriter } from '../../../src/adapters/consoleWriter';

describe('Console writer', () => {
    test('Writes to the console', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const consoleWriter: ConsoleWriter = new ConsoleWriter();

        consoleWriter.writeResult('foo');

        expect(consoleSpy).toHaveBeenCalledWith('foo');
    });
});
