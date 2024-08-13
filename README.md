# Mars Rover

Mars Rover is a program that takes in commands and moves one or more robots around
Mars.

## Pre-Requisites

- npm

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

## Coming Soon

- Interfaces and adapters for reading the input (e.g. from a file or API) and publishing the output (e.g. to the console 
or a queue)
- Instructions for running the programme from the command line
- A more performant approach around when a robot gets lost (currently, the programme continues to iterate through subsequent 
instructions rather than breaking out immediately)
- Input validation (e.g. if a valid instruction or orientation is not provided)