export class Grid {
    private readonly _rows: number;
    private readonly _columns: number;

    constructor(rows: number, columns: number) {
        this._rows = rows;
        this._columns = columns;
    }

    get rows(): number {
        return this._rows;
    }

    get columns(): number {
        return this._columns;
    }
}
