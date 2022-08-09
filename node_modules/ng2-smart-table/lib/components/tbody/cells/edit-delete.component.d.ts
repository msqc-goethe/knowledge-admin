import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import * as ɵngcc0 from '@angular/core';
export declare class TbodyEditDeleteComponent implements OnChanges {
    grid: Grid;
    row: Row;
    source: DataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    isActionEdit: boolean;
    isActionDelete: boolean;
    editRowButtonContent: string;
    deleteRowButtonContent: string;
    onEdit(event: any): void;
    onDelete(event: any): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TbodyEditDeleteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TbodyEditDeleteComponent, "ng2-st-tbody-edit-delete", never, { "grid": "grid"; "row": "row"; "source": "source"; "deleteConfirm": "deleteConfirm"; "editConfirm": "editConfirm"; }, { "edit": "edit"; "delete": "delete"; "editRowSelect": "editRowSelect"; }, never, never>;
}

//# sourceMappingURL=edit-delete.component.d.ts.map