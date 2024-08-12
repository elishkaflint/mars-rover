export class Compass {
    private static DIRECTIONS = ['N', 'E', 'S', 'W'];

    static turnLeft(currentOrientation: string): string {
        const currentIndex = this.DIRECTIONS.indexOf(currentOrientation);
        const nextIndex = (currentIndex - 1 + this.DIRECTIONS.length) % this.DIRECTIONS.length;
        return this.DIRECTIONS[nextIndex];
    }

    static turnRight(currentOrientation: string): string {
        const currentIndex = this.DIRECTIONS.indexOf(currentOrientation);
        const nextIndex = (currentIndex + 1) % this.DIRECTIONS.length;
        return this.DIRECTIONS[nextIndex];
    }
}
