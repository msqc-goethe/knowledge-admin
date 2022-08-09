import { Injectable, SimpleChange } from '@angular/core';
import { NbTrigger, NbTriggerStrategyBuilderService } from '../overlay-trigger';
import { NbAdjustment, NbPosition, NbPositionBuilderService, } from '../overlay-position';
import { NbDynamicOverlay } from './dynamic-overlay';
export class NbDynamicOverlayChange extends SimpleChange {
    constructor(previousValue, currentValue, firstChange = false) {
        super(previousValue, currentValue, firstChange);
    }
    isChanged() {
        return this.currentValue !== this.previousValue;
    }
}
export class NbDynamicOverlayHandler {
    constructor(positionBuilder, triggerStrategyBuilder, dynamicOverlayService) {
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.dynamicOverlayService = dynamicOverlayService;
        this._context = {};
        this._trigger = NbTrigger.NOOP;
        this._position = NbPosition.TOP;
        this._adjustment = NbAdjustment.NOOP;
        this._offset = 15;
        this._overlayConfig = {};
        this.changes = {};
    }
    host(host) {
        this.changes.host = new NbDynamicOverlayChange(this._host, host);
        this._host = host;
        return this;
    }
    trigger(trigger) {
        this.changes.trigger = new NbDynamicOverlayChange(this._trigger, trigger);
        this._trigger = trigger;
        return this;
    }
    position(position) {
        this.changes.position = new NbDynamicOverlayChange(this._position, position);
        this._position = position;
        return this;
    }
    adjustment(adjustment) {
        this.changes.adjustment = new NbDynamicOverlayChange(this._adjustment, adjustment);
        this._adjustment = adjustment;
        return this;
    }
    componentType(componentType) {
        this.changes.componentType = new NbDynamicOverlayChange(this._componentType, componentType);
        this._componentType = componentType;
        return this;
    }
    content(content) {
        this.changes.content = new NbDynamicOverlayChange(this._content, content);
        this._content = content;
        return this;
    }
    context(context) {
        this.changes.context = new NbDynamicOverlayChange(this._context, context);
        this._context = context;
        return this;
    }
    offset(offset) {
        this.changes.offset = new NbDynamicOverlayChange(this._offset, offset);
        this._offset = offset;
        return this;
    }
    overlayConfig(overlayConfig) {
        this.changes.overlayConfig = new NbDynamicOverlayChange(this._overlayConfig, overlayConfig);
        this._overlayConfig = overlayConfig;
        return this;
    }
    build() {
        if (!this._componentType || !this._host) {
            throw Error(`NbDynamicOverlayHandler: at least 'componentType' and 'host' should be
      passed before building a dynamic overlay.`);
        }
        this.dynamicOverlay = this.dynamicOverlayService.create(this._componentType, this._content, this._context, this.createPositionStrategy(), this._overlayConfig);
        this.connect();
        this.clearChanges();
        return this.dynamicOverlay;
    }
    rebuild() {
        /**
         * we should not throw here
         * as we use rebuilt in lifecycle hooks
         * which it could be called before the build
         * so we just ignore this call
         */
        if (!this.dynamicOverlay) {
            return;
        }
        if (this.isPositionStrategyUpdateRequired()) {
            this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy());
        }
        if (this.isTriggerStrategyUpdateRequired()) {
            this.connect();
        }
        if (this.isContainerRerenderRequired()) {
            this.dynamicOverlay.setContentAndContext(this._content, this._context);
        }
        if (this.isComponentTypeUpdateRequired()) {
            this.dynamicOverlay.setComponent(this._componentType);
        }
        if (this.isOverlayConfigUpdateRequired()) {
            this.dynamicOverlay.setOverlayConfig(this._overlayConfig);
        }
        this.clearChanges();
        return this.dynamicOverlay;
    }
    connect() {
        if (!this.dynamicOverlay) {
            throw new Error(`NbDynamicOverlayHandler: cannot connect to DynamicOverlay
      as it is not created yet. Call build() first`);
        }
        this.disconnect();
        this.subscribeOnTriggers(this.dynamicOverlay);
    }
    disconnect() {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    destroy() {
        this.disconnect();
        this.clearChanges();
        if (this.dynamicOverlay) {
            this.dynamicOverlay.dispose();
        }
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this._host)
            .position(this._position)
            .adjustment(this._adjustment)
            .offset(this._offset);
    }
    subscribeOnTriggers(dynamicOverlay) {
        this.triggerStrategy = this.triggerStrategyBuilder
            .trigger(this._trigger)
            .host(this._host.nativeElement)
            .container(() => dynamicOverlay.getContainer())
            .build();
        this.triggerStrategy.show$.subscribe(() => dynamicOverlay.show());
        this.triggerStrategy.hide$.subscribe(() => dynamicOverlay.hide());
    }
    isContainerRerenderRequired() {
        return this.isContentUpdated()
            || this.isContextUpdated()
            || this.isPositionStrategyUpdateRequired();
    }
    isPositionStrategyUpdateRequired() {
        return this.isAdjustmentUpdated() || this.isPositionUpdated() || this.isOffsetUpdated() || this.isHostUpdated();
    }
    isTriggerStrategyUpdateRequired() {
        return this.isTriggerUpdated() || this.isHostUpdated();
    }
    isComponentTypeUpdateRequired() {
        return this.isComponentTypeUpdated();
    }
    isOverlayConfigUpdateRequired() {
        return this.isOverlayConfigUpdated();
    }
    isComponentTypeUpdated() {
        return this.changes.componentType && this.changes.componentType.isChanged();
    }
    isContentUpdated() {
        return this.changes.content && this.changes.content.isChanged();
    }
    isContextUpdated() {
        return this.changes.context && this.changes.context.isChanged();
    }
    isAdjustmentUpdated() {
        return this.changes.adjustment && this.changes.adjustment.isChanged();
    }
    isPositionUpdated() {
        return this.changes.position && this.changes.position.isChanged();
    }
    isHostUpdated() {
        return this.changes.host && this.changes.host.isChanged();
    }
    isTriggerUpdated() {
        return this.changes.trigger && this.changes.trigger.isChanged();
    }
    isOffsetUpdated() {
        return this.changes.offset && this.changes.offset.isChanged();
    }
    isOverlayConfigUpdated() {
        return this.changes.overlayConfig && this.changes.overlayConfig.isChanged();
    }
    clearChanges() {
        this.changes = {};
    }
}
NbDynamicOverlayHandler.decorators = [
    { type: Injectable }
];
NbDynamicOverlayHandler.ctorParameters = () => [
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbDynamicOverlay }
];
//# sourceMappingURL=dynamic-overlay-handler.js.map