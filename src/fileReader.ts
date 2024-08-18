import { Reader } from './reader';
import { buildRobotDetails, Input, RobotDetails } from './input';
import fs from 'fs';

export class FileReader implements Reader {

    private fileName: string;

    constructor(file: string) {
        this.fileName = file;
    }

    readInput(): Input {
        const data = fs.readFileSync(this.fileName, 'utf-8')
        const lines = data.split("\n")

        const firstLine = lines.shift();

        let grid: string[] = []
        if (firstLine) {
            grid = firstLine.split(" ")
        }

        const robotDetails: RobotDetails[] = lines.map(line => {

            let position: string[] = []
            let instructions: string[] = []

            const match = line.match(/\(([^)]+)\)/);

            if (match) {
                const matchLength = match[0].length;
                const remainingString = line.substring(matchLength + 1);
                position = match[1].split(", ");
                instructions = remainingString.split("");
            }

            return buildRobotDetails(position, instructions);
        })

        return { grid, robotDetails }
    }
}