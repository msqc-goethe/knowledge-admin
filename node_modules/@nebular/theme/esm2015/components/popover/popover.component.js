/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, TemplateRef, Type, ViewChild, } from '@angular/core';
import { NbComponentPortal, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent, NbPositionedContainerComponent, } from '../cdk/overlay/overlay-container';
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
export class NbPopoverComponent extends NbPositionedContainerComponent {
    renderContent() {
        this.detachContent();
        this.attachContent();
    }
    detachContent() {
        this.overlayContainer.detach();
    }
    attachContent() {
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else if (this.content instanceof Type) {
            this.attachComponent();
        }
        else {
            this.attachString();
        }
    }
    attachTemplate() {
        this.overlayContainer
            .attachTemplatePortal(new NbTemplatePortal(this.content, null, { $implicit: this.context }));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    }
    attachString() {
        this.overlayContainer.attachStringContent(this.content);
    }
}
NbPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-popover',
                template: `
    <span class="arrow"></span>
    <nb-overlay-container></nb-overlay-container>
  `,
                styles: [":host .arrow{position:absolute;width:0;height:0}\n"]
            },] }
];
NbPopoverComponent.propDecorators = {
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent,] }],
    content: [{ type: Input }],
    context: [{ type: Input }],
    cfr: [{ type: Input }]
};
//# sourceMappingURL=popover.component.js.map