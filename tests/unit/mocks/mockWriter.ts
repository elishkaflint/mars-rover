import { Writer } from '../../../src/writer';

export class MockWriter implements Writer {
    private _written: string = '';

    writeResult(result: string): void {
        this._written = result;
    }

    get written(): string {
        return this._written;
    }
}