import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as ɵngcc0 from '@angular/core';
export declare class EditCellComponent {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    getEditorType(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<EditCellComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<EditCellComponent, "table-cell-edit-mode", never, { "inputClass": "inputClass"; "cell": "cell"; }, { "edited": "edited"; }, never, never>;
}

//# sourceMappingURL=edit-cell.component.d.ts.map