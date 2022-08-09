import { ModuleWithProviders, TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ComponentType, ConnectedOverlayPositionChange, ConnectedPosition, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayPositionBuilder, OverlayRef, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay';
import { NbScrollStrategyOptions } from '../adapter/block-scroll-strategy-adapter';
export declare class NbPortalDirective extends CdkPortal {
}
export declare class NbPortalOutletDirective extends CdkPortalOutlet {
}
export declare class NbComponentPortal<T = any> extends ComponentPortal<T> {
}
export declare class NbOverlay extends Overlay {
    scrollStrategies: NbScrollStrategyOptions;
}
export declare class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}
export declare class NbTemplatePortal<T = any> extends TemplatePortal<T> {
    constructor(template: TemplateRef<T>, viewContainerRef?: ViewContainerRef, context?: T);
}
export declare class NbOverlayContainer extends OverlayContainer {
}
export declare class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
export declare class NbPortalInjector extends PortalInjector {
}
export declare type NbPortal<T = any> = Portal<T>;
export declare type NbOverlayRef = OverlayRef;
export declare type NbComponentType<T = any> = ComponentType<T>;
export declare type NbPositionStrategy = PositionStrategy;
export declare type NbConnectedPosition = ConnectedPosition;
export declare type NbConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
export declare type NbConnectionPositionPair = ConnectionPositionPair;
export declare type NbOverlayConfig = OverlayConfig;
export declare type NbScrollStrategy = ScrollStrategy;
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
export declare class NbCdkMappingModule {
    static forRoot(): ModuleWithProviders<NbCdkMappingModule>;
}
