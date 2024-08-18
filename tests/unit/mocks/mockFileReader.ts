import { Reader } from '../../../src/reader';
import { Input } from '../../../src/input';

export class MockFileReader implements Reader {
    private input: Input;

    constructor(input: Input) {
        this.input = input;
    }

    readInput(): Input {
        return this.input;
    }
}