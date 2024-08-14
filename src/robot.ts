import { Grid } from './grid';
import { Compass } from './compass';

export class Robot {
    private _isLost: boolean;
    private _x: number;
    private _y: number;
    private _orientation: string;
    private _grid: Grid;

    constructor(x: number, y: number, orientation: string, grid: Grid) {
        this._isLost = false;
        this._x = x;
        this._y = y;
        this._orientation = orientation;
        this._grid = grid;
    }

    get isLost(): boolean {
        return this._isLost;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get orientation(): string {
        return this._orientation;
    }

    moveForward(): void {

        if (this._isLost) {
            return;
        }

        if (this._orientation === 'N' && this._y + 1 <= this._grid.rows - 1) {
            this._y++;
            return
        } else if (this._orientation === 'E' && this._x + 1 <= this._grid.columns - 1) {
            this._x++;
            return
        } else if (this._orientation === 'S' && this._y - 1 >= 0) {
            this._y--;
            return
        } else if (this._orientation === 'W' && this._x - 1 >= 0) {
            this._x--;
            return
        } else {
            this._isLost = true;
            return
        }
    }

    turnLeft(): void {
        if (this._isLost) {
            return;
        }

        this._orientation = Compass.turnLeft(this._orientation);
    }

    turnRight(): void {
        if (this._isLost) {
            return;
        }

        this._orientation = Compass.turnRight(this._orientation);
    }

    getPosition(): string {
        return `(${this._x}, ${this._y}, ${this._orientation})${this._isLost ? ' LOST' : ''}`;
    }
}
