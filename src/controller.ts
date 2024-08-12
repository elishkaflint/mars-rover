import { Grid } from './grid';
import { Rover } from './rover';
import { Input } from './input';

export class Controller {
    private input: Input;

    constructor(input: Input) {
        this.input = input;
    }

    execute(): string {
        const result: string[] = [];

        const grid: Grid = new Grid(Number(this.input.grid[0]), Number(this.input.grid[1]));

        this.input.robots.forEach((robot) => {
            const rover: Rover = new Rover(
                Number(robot.position[0]),
                Number(robot.position[1]),
                robot.position[2],
                grid
            );

            robot.directions.forEach((instruction) => {
                switch (instruction) {
                    case 'L':
                        rover.turnLeft();
                        break;
                    case 'R':
                        rover.turnRight();
                        break;
                    case 'F':
                        rover.moveForward();
                        break;
                    default:
                        console.log('Instruction not valid: ' + instruction);
                }
            });
            result.push(rover.getPosition());
        });

        return result.join('\n');
    }
}
