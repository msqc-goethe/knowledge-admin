import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultEditor implements Editor {
    cell: Cell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DefaultEditor, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DefaultEditor, "ng-component", never, { "cell": "cell"; "inputClass": "inputClass"; }, { "onStopEditing": "onStopEditing"; "onEdited": "onEdited"; "onClick": "onClick"; }, never, never>;
}
export interface Editor {
    cell: Cell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
}

//# sourceMappingURL=default-editor.d.ts.map