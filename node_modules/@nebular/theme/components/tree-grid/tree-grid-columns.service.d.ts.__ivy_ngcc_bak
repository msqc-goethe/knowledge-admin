import { IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
export declare class NbColumnsService {
    private differs;
    private allColumns;
    private visibleColumns;
    private changesDiffer;
    private columnHide$;
    private columnShow$;
    constructor(differs: IterableDiffers);
    setColumns(columns: Iterable<string>): void;
    getVisibleColumns(): string[];
    hideColumn(column: string): void;
    showColumn(column: string): void;
    onColumnsChange(): Observable<void>;
    private findInsertIndex;
}
