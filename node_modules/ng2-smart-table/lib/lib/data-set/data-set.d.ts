import { Row } from './row';
import { Column } from './column';
export declare class DataSet {
    protected columnSettings: Object;
    newRow: Row;
    protected data: Array<any>;
    protected columns: Array<Column>;
    protected rows: Array<Row>;
    protected selectedRow: Row;
    protected willSelect: string;
    constructor(data: Array<any>, columnSettings: Object);
    setData(data: Array<any>): void;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    getFirstRow(): Row;
    getLastRow(): Row;
    findRowByData(data: any): Row;
    deselectAll(): void;
    selectRow(row: Row): Row | undefined;
    multipleSelectRow(row: Row): Row;
    selectPreviousRow(): Row;
    selectFirstRow(): Row | undefined;
    selectLastRow(): Row | undefined;
    selectRowByIndex(index: number): Row | undefined;
    willSelectFirstRow(): void;
    willSelectLastRow(): void;
    select(selectedRowIndex?: number): Row | undefined;
    createNewRow(): void;
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings: any): void;
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows(): void;
}
