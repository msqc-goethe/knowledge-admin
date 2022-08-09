import { ChangeDetectorRef, ElementRef, IterableDiffers, Provider } from '@angular/core';
import { _CoalescedStyleScheduler, CdkTable, CdkTableModule, RenderRow, RowContext, StickyPositioningListener } from '@angular/cdk/table';
import { _ViewRepeater } from '@angular/cdk/collections';
import { NbDirectionality } from '../bidi/bidi-service';
import { NbPlatform } from '../platform/platform-service';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
export declare const NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbNoDataRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>\n";
export declare const NB_VIEW_REPEATER_STRATEGY: import("@angular/core").InjectionToken<_ViewRepeater<unknown, unknown, import("@angular/cdk/collections")._ViewRepeaterItemContext<unknown>>>;
export declare const NB_COALESCED_STYLE_SCHEDULER: import("@angular/core").InjectionToken<_CoalescedStyleScheduler>;
export declare const NB_TABLE_PROVIDERS: Provider[];
export declare class NbTable<T> extends CdkTable<T> {
    protected readonly _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>;
    protected readonly _coalescedStyleScheduler: _CoalescedStyleScheduler;
    protected readonly _stickyPositioningListener: StickyPositioningListener;
    constructor(differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>, _coalescedStyleScheduler: _CoalescedStyleScheduler, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: StickyPositioningListener);
}
export declare class NbTableModule extends CdkTableModule {
}
