import { IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbColumnsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbColumnsService>;
}

//# sourceMappingURL=tree-grid-columns.service.d.ts.map