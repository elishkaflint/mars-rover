import { Grid } from './grid';
import { Robot } from './robot';
import { Input } from './input';

export class Application {
    private input: Input;

    constructor(input: Input) {
        this.input = input;
    }

    run(): string {
        const result: string[] = [];

        const grid: Grid = new Grid(Number(this.input.grid[0]), Number(this.input.grid[1]));

        this.input.robotDetails.forEach((robotDetails) => {
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
