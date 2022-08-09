import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import * as ɵngcc0 from '@angular/core';
export declare class TbodyCreateCancelComponent implements OnChanges {
    grid: Grid;
    row: Row;
    editConfirm: EventEmitter<any>;
    cancelButtonContent: string;
    saveButtonContent: string;
    onSave(event: any): void;
    onCancelEdit(event: any): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TbodyCreateCancelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TbodyCreateCancelComponent, "ng2-st-tbody-create-cancel", never, { "grid": "grid"; "row": "row"; "editConfirm": "editConfirm"; }, {}, never, never>;
}

//# sourceMappingURL=create-cancel.component.d.ts.map