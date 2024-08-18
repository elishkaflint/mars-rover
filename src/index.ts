import { Controller } from './controller';
import { FileReader } from './adapters/fileReader';
import { ConsoleWriter } from './adapters/consoleWriter';

const controller: Controller = new Controller(
    new FileReader('src/resources/input.txt'),
    new ConsoleWriter()
);

controller.run();