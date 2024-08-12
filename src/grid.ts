export class Grid {
    private readonly _rows: number;
    private readonly _columns: number;

    constructor(x: number, y: number) {
        this._rows = x;
        this._columns = y;
    }

    get rows(): number {
        return this._rows;
    }

    get columns(): number {
        return this._columns;
    }
}
