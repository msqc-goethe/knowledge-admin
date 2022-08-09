import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as ɵngcc0 from '@angular/core';
export declare class EditCellDefault {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    onStopEditing(): boolean;
    onClick(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<EditCellDefault, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<EditCellDefault, "ng-component", never, { "inputClass": "inputClass"; "cell": "cell"; }, { "edited": "edited"; }, never, never>;
}

//# sourceMappingURL=edit-cell-default.d.ts.map