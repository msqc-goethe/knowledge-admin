/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input } from '@angular/core';
import { NbPositionedContainerComponent } from '../cdk/overlay/overlay-container';
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
export class NbContextMenuComponent extends NbPositionedContainerComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.context = { items: [] };
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-context-menu',
                template: `
    <nb-menu class="context-menu" [items]="context.items" [tag]="context.tag"></nb-menu>
  `
            },] }
];
NbContextMenuComponent.propDecorators = {
    items: [{ type: Input }],
    tag: [{ type: Input }],
    context: [{ type: Input }]
};
//# sourceMappingURL=context-menu.component.js.map