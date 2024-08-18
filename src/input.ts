export type Input = {
    grid: string[];
    robotDetails: RobotDetails[];
};

export type RobotDetails = {
    position: string[];
    instructions: string[];
};

export const buildRobotDetails = (position: string[], instructions: string[]): RobotDetails => {
    return { position, instructions };
};
