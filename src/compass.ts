export class Compass {

    private DIRECTIONS = ['N', 'E', 'S', 'W'];

    turnLeft(currentOrientation: string): string {
        const currentIndex = this.DIRECTIONS.indexOf(currentOrientation)
        const nextIndex = (currentIndex - 1 + this.DIRECTIONS.length) % this.DIRECTIONS.length
        return this.DIRECTIONS[nextIndex]
    }

    turnRight(currentOrientation: string): string {
        const currentIndex = this.DIRECTIONS.indexOf(currentOrientation)
        const nextIndex = (currentIndex + 1) % this.DIRECTIONS.length
        return this.DIRECTIONS[nextIndex]
    }

}