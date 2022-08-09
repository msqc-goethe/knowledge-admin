import { EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import { Cell } from '../../lib/data-set/cell';
import * as ɵngcc0 from '@angular/core';
export declare class Ng2SmartTableTbodyComponent {
    grid: Grid;
    source: DataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    rowClassFunction: Function;
    save: EventEmitter<any>;
    cancel: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    custom: EventEmitter<any>;
    edited: EventEmitter<any>;
    userSelectRow: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    multipleSelectRow: EventEmitter<any>;
    rowHover: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    mode: string;
    editInputClass: string;
    isActionAdd: boolean;
    isActionEdit: boolean;
    isActionDelete: boolean;
    noDataMessage: boolean;
    get tableColumnsCount(): number;
    ngOnChanges(): void;
    getVisibleCells(cells: Array<Cell>): Array<Cell>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<Ng2SmartTableTbodyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<Ng2SmartTableTbodyComponent, "[ng2-st-tbody]", never, { "grid": "grid"; "source": "source"; "deleteConfirm": "deleteConfirm"; "editConfirm": "editConfirm"; "rowClassFunction": "rowClassFunction"; }, { "save": "save"; "cancel": "cancel"; "edit": "edit"; "delete": "delete"; "custom": "custom"; "edited": "edited"; "userSelectRow": "userSelectRow"; "editRowSelect": "editRowSelect"; "multipleSelectRow": "multipleSelectRow"; "rowHover": "rowHover"; }, never, never>;
}

//# sourceMappingURL=tbody.component.d.ts.map