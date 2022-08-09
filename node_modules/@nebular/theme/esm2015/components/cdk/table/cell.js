/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
 */
import { Directive, ElementRef, InjectionToken, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class NbCellDefDirective extends CdkCellDef {
}
NbCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }],
            },] }
];
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class NbHeaderCellDefDirective extends CdkHeaderCellDef {
}
NbHeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }],
            },] }
];
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class NbFooterCellDefDirective extends CdkFooterCellDef {
}
NbFooterCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }],
            },] }
];
export const NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
export class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(value) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(value);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
NbColumnDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbColumnDef]',
                providers: [
                    { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
                    { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
                ],
            },] }
];
NbColumnDefDirective.propDecorators = {
    name: [{ type: Input, args: ['nbColumnDef',] }],
    sticky: [{ type: Input }],
    stickyEnd: [{ type: Input }]
};
/** Header cell template container that adds the right classes and role. */
export class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbHeaderCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-header-cell, th[nbHeaderCell]',
                host: {
                    'class': 'nb-header-cell',
                    'role': 'columnheader',
                },
            },] }
];
NbHeaderCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];
/** Footer cell template container that adds the right classes and role. */
export class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbFooterCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-footer-cell, td[nbFooterCell]',
                host: {
                    'class': 'nb-footer-cell',
                    'role': 'gridcell',
                },
            },] }
];
NbFooterCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];
/** Cell template container that adds the right classes and role. */
export class NbCellDirective extends CdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-cell, td[nbCell]',
                host: {
                    'class': 'nb-cell',
                    'role': 'gridcell',
                },
            },] }
];
NbCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];
//# sourceMappingURL=cell.js.map