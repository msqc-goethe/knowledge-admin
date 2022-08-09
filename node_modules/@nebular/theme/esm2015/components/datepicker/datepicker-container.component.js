/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ViewChild } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from '../cdk/overlay/overlay-container';
export class NbDatepickerContainerComponent extends NbPositionedContainerComponent {
    attach(portal) {
        return this.overlayContainer.attachComponentPortal(portal);
    }
}
NbDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-datepicker-container',
                template: `
    <nb-overlay-container></nb-overlay-container>
  `
            },] }
];
NbDatepickerContainerComponent.propDecorators = {
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent, { static: true },] }]
};
//# sourceMappingURL=datepicker-container.component.js.map