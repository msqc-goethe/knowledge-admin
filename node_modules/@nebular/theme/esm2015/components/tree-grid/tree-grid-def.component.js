import { Directive, Input, IterableDiffers, TemplateRef } from '@angular/core';
import { NbCdkCellDef, NbCdkFooterCellDef, NbCdkFooterRowDef, NbCdkHeaderCellDef, NbCdkHeaderRowDef, NbCdkRowDef, } from '../cdk/table/type-mappings';
import { NbCellDefDirective, NbFooterCellDefDirective, NbHeaderCellDefDirective } from '../cdk/table/cell';
import { NbFooterRowDefDirective, NbHeaderRowDefDirective, NbRowDefDirective } from '../cdk/table/row';
import { NbColumnsService } from './tree-grid-columns.service';
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
export class NbTreeGridRowDefDirective extends NbRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridRowDef]',
                providers: [{ provide: NbCdkRowDef, useExisting: NbTreeGridRowDefDirective }],
            },] }
];
NbTreeGridRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridRowDefColumns',] }]
};
export class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridHeaderRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridHeaderRowDef]',
                providers: [{ provide: NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective }],
            },] }
];
NbTreeGridHeaderRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridHeaderRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridHeaderRowDef',] }]
};
export class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridFooterRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridFooterRowDef]',
                providers: [{ provide: NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective }],
            },] }
];
NbTreeGridFooterRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridFooterRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridFooterRowDef',] }]
};
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class NbTreeGridCellDefDirective extends NbCellDefDirective {
}
NbTreeGridCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridCellDef]',
                providers: [{ provide: NbCdkCellDef, useExisting: NbTreeGridCellDefDirective }],
            },] }
];
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
}
NbTreeGridHeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridHeaderCellDef]',
                providers: [{ provide: NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective }],
            },] }
];
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
}
NbTreeGridFooterCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridFooterCellDef]',
                providers: [{ provide: NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective }],
            },] }
];
//# sourceMappingURL=tree-grid-def.component.js.map