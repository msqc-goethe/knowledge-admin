import { ComponentFactoryResolver, Injectable, NgZone } from '@angular/core';
import { filter, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { Subject, BehaviorSubject, merge } from 'rxjs';
import { createContainer, NbOverlayService, patch } from '../overlay-service';
import { NbOverlayContainer } from '../mapping';
export class NbDynamicOverlay {
    constructor(overlay, componentFactoryResolver, zone, overlayContainer) {
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.zone = zone;
        this.overlayContainer = overlayContainer;
        this.context = {};
        this.overlayConfig = {};
        this.positionStrategyChange$ = new Subject();
        this.isShown$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
        this.overlayDestroy$ = new Subject();
    }
    get isAttached() {
        return this.ref && this.ref.hasAttached();
    }
    get isShown() {
        return this.isShown$.pipe(distinctUntilChanged());
    }
    create(componentType, content, context, positionStrategy, overlayConfig = {}) {
        this.setContentAndContext(content, context);
        this.setComponent(componentType);
        this.setPositionStrategy(positionStrategy);
        this.setOverlayConfig(overlayConfig);
        return this;
    }
    setContent(content) {
        this.content = content;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContext(context) {
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContentAndContext(content, context) {
        this.content = content;
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setComponent(componentType) {
        this.componentType = componentType;
        // in case the component is shown we recreate it and show it back
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    setPositionStrategy(positionStrategy) {
        this.positionStrategyChange$.next();
        this.positionStrategy = positionStrategy;
        this.positionStrategy.positionChange
            .pipe(filter(() => !!this.container), takeUntil(merge(this.positionStrategyChange$, this.destroy$)))
            .subscribe((position) => {
            this.lastAppliedPosition = position;
            patch(this.container, { position });
        });
        if (this.ref) {
            this.ref.updatePositionStrategy(this.positionStrategy);
        }
    }
    setOverlayConfig(overlayConfig) {
        this.overlayConfig = overlayConfig;
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    show() {
        if (!this.ref) {
            this.createOverlay();
        }
        this.renderContainer();
        if (!this.hasOverlayInContainer()) {
            // Dispose overlay ref as it refers to the old overlay container and create new by calling `show`
            this.disposeOverlayRef();
            return this.show();
        }
        this.isShown$.next(true);
    }
    hide() {
        if (!this.ref) {
            return;
        }
        this.ref.detach();
        this.container = null;
        this.isShown$.next(false);
    }
    toggle() {
        if (this.isAttached) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    dispose() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.disposeOverlayRef();
        this.isShown$.complete();
        this.positionStrategyChange$.complete();
        this.overlayDestroy$.complete();
    }
    getContainer() {
        return this.container;
    }
    createOverlay() {
        this.ref = this.overlay.create(Object.assign({ positionStrategy: this.positionStrategy, scrollStrategy: this.overlay.scrollStrategies.reposition() }, this.overlayConfig));
        this.updatePositionWhenStable(this.ref);
    }
    renderContainer() {
        const containerContext = this.createContainerContext();
        if (!this.container) {
            this.container = createContainer(this.ref, this.componentType, containerContext, this.componentFactoryResolver);
        }
        this.container.instance.renderContent();
    }
    updateContext() {
        const containerContext = this.createContainerContext();
        Object.assign(this.container.instance, containerContext);
        this.container.instance.renderContent();
        this.container.changeDetectorRef.detectChanges();
    }
    createContainerContext() {
        return {
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
            position: this.lastAppliedPosition,
        };
    }
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    updatePositionWhenStable(overlay) {
        const overlayDestroy$ = this.overlayDestroy$.pipe(filter((destroyedOverlay) => destroyedOverlay === overlay));
        this.zone.onStable
            .pipe(takeUntil(merge(this.destroy$, overlayDestroy$)))
            .subscribe(() => this.updatePosition());
    }
    updatePosition() {
        if (this.ref) {
            this.ref.updatePosition();
        }
    }
    hasOverlayInContainer() {
        return this.overlayContainer.getContainerElement().contains(this.ref.hostElement);
    }
    disposeOverlayRef() {
        if (this.ref) {
            this.ref.dispose();
            this.overlayDestroy$.next(this.ref);
            this.ref = null;
            this.container = null;
        }
    }
}
NbDynamicOverlay.decorators = [
    { type: Injectable }
];
NbDynamicOverlay.ctorParameters = () => [
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: NbOverlayContainer }
];
//# sourceMappingURL=dynamic-overlay.js.map