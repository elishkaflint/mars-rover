import {Grid} from "./grid";
import {Rover} from "./rover";
import {Input} from "./input";

export class Controller {

    private input: Input

    constructor(input: Input) {
        this.input = input;
    }

    execute(): string {

        const grid: Grid = new Grid(Number(this.input.grid[1]), Number(this.input.grid[0]));
        const rover: Rover = new Rover(Number(this.input.position[0]), Number(this.input.position[1]), this.input.position[2], grid);

        this.input.directions.forEach(instruction => {

            switch(instruction) {
                case 'L':
                    rover.turnLeft();
                    break
                case 'R':
                    rover.turnRight();
                    break
                case 'F':
                    rover.moveForward();
                    break
                default:
                    console.log("Instruction not valid: " + instruction)
            }
        })
        return rover.getPosition();
    }
}