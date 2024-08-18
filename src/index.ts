import { Controller } from './controller';
import { FileReader } from './fileReader';
import { ConsoleWriter } from './consoleWriter';

const controller: Controller = new Controller(
    new FileReader('src/resources/input.txt'),
    new ConsoleWriter()
);

controller.run();