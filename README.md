# Mars Rover

Mars Rover is a program that takes in commands and moves one or more robots around
Mars.

## Pre-Requisites

- node
- npm

## How to Run

### 1. Prepare your input

The application expects a file with the robot input to be in a file called `input.txt` in the `src/resources` directory.

The input takes the form:

```
4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF
(2, 3, N) FLLFR
(1, 0, S) FFRLF
```

The first line of the input ‘4 8’ specifies the size of the grid. The subsequent lines each
represent the initial state and commands for a single robot. (0, 2, N) specifies the initial state
of the form (x, y, orientation). FFLFRFF represents the sequence of movement commands
for the robot.

### 2. Build the application

```
npm run build
```

### 3. Run the application

```
npm run start
```

You should see the final position and orientation of the robots printed to the console.

For example, for the example input above, you should see:

```
(3, 4, E) LOST
(0, 4, W) LOST
(2, 3, W)
(1, 0, S) LOST

```

## Run Tests

```
npm test
```

## Approach

See commit history for a detail breakdown of steps taken. 

In summary:
- TDD robot functionality (move forward, turn left, turn right, get lost)
- Refactor compass functionality into its own class
- Create a MarsRover class which takes input and coordinates all the robots, covered by an integrated test which uses
the test input to confirm the e2e functionality works as expected (i.e. without any mocks)
- Create interfaces and adapters for reading the input and publishing the output
- Add instructions for running the programme from the command line

## Coming Soon

- A more performant approach around when a robot gets lost (currently, the programme continues to iterate through subsequent 
instructions rather than breaking out immediately)
- Input validation (e.g. if a valid instruction or orientation is not provided)
- Create a better type for the object that is passed to the writer (currently just a string)