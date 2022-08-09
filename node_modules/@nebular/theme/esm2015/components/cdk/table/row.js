import { Component, Directive, Input } from '@angular/core';
import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet, } from '@angular/cdk/table';
export class NbDataRowOutletDirective extends DataRowOutlet {
}
NbDataRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbRowOutlet]',
                providers: [{ provide: DataRowOutlet, useExisting: NbDataRowOutletDirective }],
            },] }
];
export class NbHeaderRowOutletDirective extends HeaderRowOutlet {
}
NbHeaderRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderRowOutlet]',
                providers: [{ provide: HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective }],
            },] }
];
export class NbFooterRowOutletDirective extends FooterRowOutlet {
}
NbFooterRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterRowOutlet]',
                providers: [{ provide: FooterRowOutlet, useExisting: NbFooterRowOutletDirective }],
            },] }
];
export class NbNoDataRowOutletDirective extends NoDataRowOutlet {
}
NbNoDataRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbNoDataRowOutlet]',
                providers: [{ provide: NoDataRowOutlet, useExisting: NbNoDataRowOutletDirective }],
            },] }
];
export class NbCellOutletDirective extends CdkCellOutlet {
}
NbCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbCellOutlet]',
                providers: [{ provide: CdkCellOutlet, useExisting: NbCellOutletDirective }],
            },] }
];
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export class NbHeaderRowDefDirective extends CdkHeaderRowDef {
}
NbHeaderRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective }],
            },] }
];
NbHeaderRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbHeaderRowDef',] }],
    sticky: [{ type: Input, args: ['nbHeaderRowDefSticky',] }]
};
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export class NbFooterRowDefDirective extends CdkFooterRowDef {
}
NbFooterRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterRowDef]',
                providers: [{ provide: CdkFooterRowDef, useExisting: NbFooterRowDefDirective }],
            },] }
];
NbFooterRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbFooterRowDef',] }],
    sticky: [{ type: Input, args: ['nbFooterRowDefSticky',] }]
};
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export class NbRowDefDirective extends CdkRowDef {
}
NbRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: NbRowDefDirective }],
            },] }
];
NbRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbRowDefColumns',] }],
    when: [{ type: Input, args: ['nbRowDefWhen',] }]
};
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export class NbHeaderRowComponent extends CdkHeaderRow {
}
NbHeaderRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-header-row, tr[nbHeaderRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-header-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkHeaderRow, useExisting: NbHeaderRowComponent }]
            },] }
];
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export class NbFooterRowComponent extends CdkFooterRow {
}
NbFooterRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-footer-row, tr[nbFooterRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-footer-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkFooterRow, useExisting: NbFooterRowComponent }]
            },] }
];
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export class NbRowComponent extends CdkRow {
}
NbRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-row, tr[nbRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkRow, useExisting: NbRowComponent }]
            },] }
];
//# sourceMappingURL=row.js.map