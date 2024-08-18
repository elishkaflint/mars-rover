import { FileReader } from '../../fileReader';
import { Input } from '../../input';

test('File Reader', () => {

    const fileReader: FileReader = new FileReader("src/__tests__/unit/input.txt");

    const actual: Input = fileReader.readInput();

    expect(actual).toStrictEqual({
        grid: ['4', '8'],
        robotDetails: [
            {
                position: ['2', '3', 'E'],
                instructions: ['L', 'F', 'R', 'F', 'F'],
            },
            {
                position: ['0', '2', 'N'],
                instructions: ['F', 'F', 'L', 'F', 'R', 'F', 'F'],
            }
        ]
    })

})