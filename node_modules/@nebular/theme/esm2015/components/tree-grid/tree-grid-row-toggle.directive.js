/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostListener } from '@angular/core';
import { NbTreeGridCellDirective } from './tree-grid-cell.component';
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
export class NbTreeGridRowToggleDirective {
    constructor(cell) {
        this.cell = cell;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
}
NbTreeGridRowToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridRowToggle]',
            },] }
];
NbTreeGridRowToggleDirective.ctorParameters = () => [
    { type: NbTreeGridCellDirective }
];
NbTreeGridRowToggleDirective.propDecorators = {
    toggleRow: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=tree-grid-row-toggle.directive.js.map