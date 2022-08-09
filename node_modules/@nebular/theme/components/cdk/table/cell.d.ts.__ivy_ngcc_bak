import { ElementRef, InjectionToken } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class NbCellDefDirective extends CdkCellDef {
}
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class NbHeaderCellDefDirective extends CdkHeaderCellDef {
}
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class NbFooterCellDefDirective extends CdkFooterCellDef {
}
export declare const NB_SORT_HEADER_COLUMN_DEF: InjectionToken<unknown>;
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
export declare class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name(): string;
    set name(value: string);
    /** Whether this column should be sticky positioned at the start of the row */
    sticky: boolean;
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd(): boolean;
    set stickyEnd(value: boolean);
}
/** Header cell template container that adds the right classes and role. */
export declare class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
}
/** Footer cell template container that adds the right classes and role. */
export declare class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef);
}
/** Cell template container that adds the right classes and role. */
export declare class NbCellDirective extends CdkCell {
    constructor(columnDef: NbColumnDefDirective, elementRef: ElementRef<HTMLElement>);
}
