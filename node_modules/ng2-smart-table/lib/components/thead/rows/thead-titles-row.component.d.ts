import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { Column } from "../../../lib/data-set/column";
import * as ɵngcc0 from '@angular/core';
export declare class TheadTitlesRowComponent implements OnChanges {
    grid: Grid;
    isAllSelected: boolean;
    source: DataSource;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    ngOnChanges(): void;
    getVisibleColumns(columns: Array<Column>): Array<Column>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TheadTitlesRowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TheadTitlesRowComponent, "[ng2-st-thead-titles-row]", never, { "grid": "grid"; "isAllSelected": "isAllSelected"; "source": "source"; }, { "sort": "sort"; "selectAllRows": "selectAllRows"; }, never, never>;
}

//# sourceMappingURL=thead-titles-row.component.d.ts.map