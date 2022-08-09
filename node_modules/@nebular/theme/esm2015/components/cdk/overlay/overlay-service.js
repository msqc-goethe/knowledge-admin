import { Injectable } from '@angular/core';
import { NbComponentPortal, NbOverlay, } from './mapping';
import { NbLayoutDirectionService } from '../../../services/direction.service';
export function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
export function createContainer(ref, container, context, componentFactoryResolver) {
    const containerRef = ref.attach(new NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
export class NbOverlayService {
    constructor(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    get scrollStrategies() {
        return this.overlay.scrollStrategies;
    }
    create(config) {
        const overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange()
            .subscribe(dir => overlayRef.setDirection(dir));
        return overlayRef;
    }
}
NbOverlayService.decorators = [
    { type: Injectable }
];
NbOverlayService.ctorParameters = () => [
    { type: NbOverlay },
    { type: NbLayoutDirectionService }
];
//# sourceMappingURL=overlay-service.js.map