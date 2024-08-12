import {Input} from "../input";
import {Controller} from "../controller";

describe('Controller', () => {
    test('Executes scenario 2 correctly', () => {
        const input: Input = {
            position: ['0', '2', 'N'],
            grid: ['4', '8'],
            directions: ['F', 'F', 'L', 'F', 'R', 'F', 'F']
        }
        const controller: Controller = new Controller(input);

        const result: string = controller.execute();

        expect(result).toBe("(0, 4, W) LOST")
    })
})
