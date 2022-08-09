import { Directive, Input } from '@angular/core';
import { NbCdkColumnDef } from '../cdk/table/type-mappings';
import { NB_SORT_HEADER_COLUMN_DEF, NbColumnDefDirective } from '../cdk/table/cell';
/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
export class NbTreeGridColumnDefDirective extends NbColumnDefDirective {
    constructor() {
        super(...arguments);
        this.hideOnValue = null;
        this.showOnValue = null;
    }
    /**
     * Column name
     */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    get hideOn() {
        return this.hideOnValue;
    }
    set hideOn(value) {
        this.hideOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    get showOn() {
        return this.showOnValue;
    }
    set showOn(value) {
        this.showOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    ngOnChanges() {
        if (this.hideOn != null && this.showOn != null) {
            throw new Error(`hideOn and showOn are mutually exclusive and can't be used simultaneously.`);
        }
    }
    shouldHide(width) {
        return !this.shouldShow(width);
    }
    shouldShow(width) {
        if (this.hideOn == null && this.showOn == null) {
            return true;
        }
        if (this.hideOn != null) {
            return width > this.hideOn;
        }
        return width >= this.showOn;
    }
}
NbTreeGridColumnDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridColumnDef]',
                providers: [
                    { provide: NbCdkColumnDef, useExisting: NbTreeGridColumnDefDirective },
                    { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbTreeGridColumnDefDirective },
                ],
            },] }
];
NbTreeGridColumnDefDirective.propDecorators = {
    name: [{ type: Input, args: ['nbTreeGridColumnDef',] }],
    hideOn: [{ type: Input }],
    showOn: [{ type: Input }]
};
//# sourceMappingURL=tree-grid-column-def.directive.js.map