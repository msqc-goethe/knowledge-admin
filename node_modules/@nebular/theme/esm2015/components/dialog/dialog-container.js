/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NbPortalOutletDirective } from '../cdk/overlay/mapping';
import { NbFocusTrapFactoryService } from '../cdk/a11y/focus-trap';
import { NbDialogConfig } from './dialog-config';
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
export class NbDialogContainerComponent {
    constructor(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    ngOnInit() {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    }
    ngOnDestroy() {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    }
    attachComponentPortal(portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    }
}
NbDialogContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-dialog-container',
                template: '<ng-template nbPortalOutlet></ng-template>'
            },] }
];
NbDialogContainerComponent.ctorParameters = () => [
    { type: NbDialogConfig },
    { type: ElementRef },
    { type: NbFocusTrapFactoryService }
];
NbDialogContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective, { static: true },] }]
};
//# sourceMappingURL=dialog-container.js.map