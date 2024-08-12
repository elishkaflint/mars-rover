import {Grid} from "./grid";

export class Rover {

    private _x: number;
    private _y: number;
    private _orientation: string;
    private _isLost: boolean
    private _grid: Grid

    constructor(x: number, y: number, orientation: string, grid: Grid) {
        this._x = x;
        this._y = y;
        this._orientation = orientation;
        this._grid = grid;
        this._isLost = false;
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

    get isLost(): boolean {
        return this._isLost;
    }

    moveForward(): void {
        this._isLost = true;
        return;
    }
}