import { Grid } from './grid';
import { Robot } from './robot';
import { Input } from './input';
import { Reader } from './reader';
import * as console from 'console';

export class Controller {
    private reader: Reader;

    constructor(reader: Reader) {
        this.reader = reader;
    }

    run(): string {
        const result: string[] = [];

        const input: Input = this.reader.readInput();

        const grid: Grid = new Grid(Number(input.grid[0]), Number(input.grid[1]));

        input.robotDetails.forEach((robotDetails) => {

            const robot: Robot = new Robot(
                Number(robotDetails.position[0]),
                Number(robotDetails.position[1]),
                robotDetails.position[2],
                grid
            );

            robotDetails.instructions.forEach((instruction) => {
                switch (instruction) {
                    case 'L':
                        robot.turnLeft();
                        break;
                    case 'R':
                        robot.turnRight();
                        break;
                    case 'F':
                        robot.moveForward();
                        break;
                    default:
                        console.log('Instruction not valid: ' + instruction);
                }
            });

            result.push(robot.getPosition());
        });

        return result.join('\n');
    }
}
