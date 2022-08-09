import { ChangeDetectorRef, Component, ComponentFactoryResolver, HostBinding, Injector, Input, ViewChild, ViewContainerRef, } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbPortalInjector, NbPortalOutletDirective } from './mapping';
export class NbPositionedContainerComponent {
    get top() {
        return this.position === NbPosition.TOP;
    }
    get topStart() {
        return this.position === NbPosition.TOP_START;
    }
    get topEnd() {
        return this.position === NbPosition.TOP_END;
    }
    get right() {
        return this.position === NbPosition.RIGHT || this.position === NbPosition.END;
    }
    get endTop() {
        return this.position === NbPosition.END_TOP;
    }
    get endBottom() {
        return this.position === NbPosition.END_BOTTOM;
    }
    get bottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get bottomStart() {
        return this.position === NbPosition.BOTTOM_START;
    }
    get bottomEnd() {
        return this.position === NbPosition.BOTTOM_END;
    }
    get left() {
        return this.position === NbPosition.LEFT || this.position === NbPosition.START;
    }
    get startTop() {
        return this.position === NbPosition.START_TOP;
    }
    get startBottom() {
        return this.position === NbPosition.START_BOTTOM;
    }
}
NbPositionedContainerComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
NbPositionedContainerComponent.propDecorators = {
    position: [{ type: Input }],
    top: [{ type: HostBinding, args: ['class.nb-overlay-top',] }],
    topStart: [{ type: HostBinding, args: ['class.nb-overlay-top-start',] }],
    topEnd: [{ type: HostBinding, args: ['class.nb-overlay-top-end',] }],
    right: [{ type: HostBinding, args: ['class.nb-overlay-right',] }],
    endTop: [{ type: HostBinding, args: ['class.nb-overlay-end-top',] }],
    endBottom: [{ type: HostBinding, args: ['class.nb-overlay-end-bottom',] }],
    bottom: [{ type: HostBinding, args: ['class.nb-overlay-bottom',] }],
    bottomStart: [{ type: HostBinding, args: ['class.nb-overlay-bottom-start',] }],
    bottomEnd: [{ type: HostBinding, args: ['class.nb-overlay-bottom-end',] }],
    left: [{ type: HostBinding, args: ['class.nb-overlay-left',] }],
    startTop: [{ type: HostBinding, args: ['class.nb-overlay-start-top',] }],
    startBottom: [{ type: HostBinding, args: ['class.nb-overlay-start-bottom',] }]
};
export class NbOverlayContainerComponent {
    constructor(vcr, injector, changeDetectorRef) {
        this.vcr = vcr;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.isAttached = false;
    }
    get isStringContent() {
        return !!this.content;
    }
    attachComponentPortal(portal, context) {
        portal.injector = this.createChildInjector(portal.componentFactoryResolver);
        const componentRef = this.portalOutlet.attachComponentPortal(portal);
        if (context) {
            Object.assign(componentRef.instance, context);
        }
        componentRef.changeDetectorRef.markForCheck();
        componentRef.changeDetectorRef.detectChanges();
        this.isAttached = true;
        return componentRef;
    }
    attachTemplatePortal(portal) {
        const templateRef = this.portalOutlet.attachTemplatePortal(portal);
        templateRef.detectChanges();
        this.isAttached = true;
        return templateRef;
    }
    attachStringContent(content) {
        this.content = content;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
        this.isAttached = true;
    }
    detach() {
        if (this.portalOutlet.hasAttached()) {
            this.portalOutlet.detach();
        }
        this.attachStringContent(null);
        this.isAttached = false;
    }
    createChildInjector(cfr) {
        return new NbPortalInjector(this.injector, new WeakMap([
            [ComponentFactoryResolver, cfr],
        ]));
    }
}
NbOverlayContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-overlay-container',
                template: `
    <div *ngIf="isStringContent" class="primitive-overlay">{{ content }}</div>
    <ng-template nbPortalOutlet></ng-template>
  `
            },] }
];
NbOverlayContainerComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Injector },
    { type: ChangeDetectorRef }
];
NbOverlayContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective, { static: true },] }]
};
//# sourceMappingURL=overlay-container.js.map