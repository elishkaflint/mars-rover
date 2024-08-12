export class Grid {
    private readonly _columns: number;
    private readonly _rows: number;

    constructor(columns: number, rows: number) {
        this._columns = columns;
        this._rows = rows;
    }

    get columns(): number {
        return this._columns;
    }

    get rows(): number {
        return this._rows;
    }
}