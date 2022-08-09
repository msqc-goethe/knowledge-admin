import { ComponentFactoryResolver, ComponentRef, TemplateRef, Type } from '@angular/core';
import { NbComponentType, NbOverlay, NbOverlayConfig, NbOverlayRef } from './mapping';
import { NbScrollStrategyOptions } from '../adapter/block-scroll-strategy-adapter';
import { NbLayoutDirectionService } from '../../../services/direction.service';
import * as ɵngcc0 from '@angular/core';
export declare type NbOverlayContent = Type<any> | TemplateRef<any> | string;
export declare function patch<T>(container: ComponentRef<T>, containerContext: Object): ComponentRef<T>;
export declare function createContainer<T>(ref: NbOverlayRef, container: NbComponentType<T>, context: Object, componentFactoryResolver?: ComponentFactoryResolver): ComponentRef<T>;
export declare class NbOverlayService {
    protected overlay: NbOverlay;
    protected layoutDirection: NbLayoutDirectionService;
    constructor(overlay: NbOverlay, layoutDirection: NbLayoutDirectionService);
    get scrollStrategies(): NbScrollStrategyOptions;
    create(config?: NbOverlayConfig): NbOverlayRef;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbOverlayService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbOverlayService>;
}

//# sourceMappingURL=overlay-service.d.ts.map