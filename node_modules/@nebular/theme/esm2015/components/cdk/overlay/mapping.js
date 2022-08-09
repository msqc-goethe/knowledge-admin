import { Directive, Injectable, NgModule, } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, PortalInjector, PortalModule, TemplatePortal, } from '@angular/cdk/portal';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayContainer, OverlayModule, OverlayPositionBuilder, } from '@angular/cdk/overlay';
export class NbPortalDirective extends CdkPortal {
}
NbPortalDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbPortal]' },] }
];
export class NbPortalOutletDirective extends CdkPortalOutlet {
}
NbPortalOutletDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbPortalOutlet]' },] }
];
export class NbComponentPortal extends ComponentPortal {
}
export class NbOverlay extends Overlay {
}
NbOverlay.decorators = [
    { type: Injectable }
];
export class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}
NbOverlayPositionBuilder.decorators = [
    { type: Injectable }
];
export class NbTemplatePortal extends TemplatePortal {
    constructor(template, viewContainerRef, context) {
        super(template, viewContainerRef, context);
    }
}
export class NbOverlayContainer extends OverlayContainer {
}
NbOverlayContainer.decorators = [
    { type: Injectable }
];
export class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
export class NbPortalInjector extends PortalInjector {
}
const CDK_MODULES = [OverlayModule, PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
export class NbCdkMappingModule {
    static forRoot() {
        return {
            ngModule: NbCdkMappingModule,
            providers: [
                NbOverlay,
                NbOverlayPositionBuilder,
            ],
        };
    }
}
NbCdkMappingModule.decorators = [
    { type: NgModule, args: [{
                imports: [...CDK_MODULES],
                exports: [
                    ...CDK_MODULES,
                    NbPortalDirective,
                    NbPortalOutletDirective,
                ],
                declarations: [NbPortalDirective, NbPortalOutletDirective],
            },] }
];
//# sourceMappingURL=mapping.js.map