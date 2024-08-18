import { Writer } from '../writer';

export class ConsoleWriter implements Writer {
    writeResult(result: string): void {
        console.log(result);
    }
}
