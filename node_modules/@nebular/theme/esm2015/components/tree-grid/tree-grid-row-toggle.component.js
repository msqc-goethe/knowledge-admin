/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostListener, Input } from '@angular/core';
import { NbTreeGridCellDirective } from './tree-grid-cell.component';
/**
 * NbTreeGridRowToggleComponent
 */
export class NbTreeGridRowToggleComponent {
    constructor(cell) {
        this.cell = cell;
    }
    set expanded(value) {
        this.expandedValue = value;
    }
    get expanded() {
        return this.expandedValue;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
}
NbTreeGridRowToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tree-grid-row-toggle',
                template: `
    <button class="row-toggle-button" [attr.aria-label]="expanded ? 'collapse' : 'expand'">
      <nb-icon [icon]="expanded ? 'chevron-down-outline' : 'chevron-right-outline'"
               pack="nebular-essentials"
               aria-hidden="true">
      </nb-icon>
    </button>
  `,
                styles: [`
    button {
      background: transparent;
      border: none;
      padding: 0;
    }
  `]
            },] }
];
NbTreeGridRowToggleComponent.ctorParameters = () => [
    { type: NbTreeGridCellDirective }
];
NbTreeGridRowToggleComponent.propDecorators = {
    expanded: [{ type: Input }],
    toggleRow: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=tree-grid-row-toggle.component.js.map