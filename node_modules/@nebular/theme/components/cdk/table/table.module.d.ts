import { ChangeDetectorRef, ElementRef, IterableDiffers, Provider } from '@angular/core';
import { _CoalescedStyleScheduler, CdkTable, CdkTableModule, RenderRow, RowContext, StickyPositioningListener } from '@angular/cdk/table';
import { _ViewRepeater } from '@angular/cdk/collections';
import { NbDirectionality } from '../bidi/bidi-service';
import { NbPlatform } from '../platform/platform-service';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './cell';
import * as ɵngcc2 from './row';
import * as ɵngcc3 from '../bidi/bidi.module';
export declare const NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbNoDataRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>\n";
export declare const NB_VIEW_REPEATER_STRATEGY: import("@angular/core").InjectionToken<_ViewRepeater<unknown, unknown, import("@angular/cdk/collections")._ViewRepeaterItemContext<unknown>>>;
export declare const NB_COALESCED_STYLE_SCHEDULER: import("@angular/core").InjectionToken<_CoalescedStyleScheduler>;
export declare const NB_TABLE_PROVIDERS: Provider[];
export declare class NbTable<T> extends CdkTable<T> {
    protected readonly _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>;
    protected readonly _coalescedStyleScheduler: _CoalescedStyleScheduler;
    protected readonly _stickyPositioningListener: StickyPositioningListener;
    constructor(differs: IterableDiffers, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, role: string, dir: NbDirectionality, document: any, platform: NbPlatform, _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>, _coalescedStyleScheduler: _CoalescedStyleScheduler, _viewportRuler: NbViewportRulerAdapter, _stickyPositioningListener: StickyPositioningListener);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTable<any>, [null, null, null, { attribute: "role"; }, null, null, null, null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbTable<any>, "nb-table-not-implemented", never, {}, {}, never, never>;
}
export declare class NbTableModule extends CdkTableModule {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbTableModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<NbTableModule, [typeof NbTable, typeof ɵngcc1.NbHeaderCellDefDirective, typeof ɵngcc2.NbHeaderRowDefDirective, typeof ɵngcc1.NbColumnDefDirective, typeof ɵngcc1.NbCellDefDirective, typeof ɵngcc2.NbRowDefDirective, typeof ɵngcc1.NbFooterCellDefDirective, typeof ɵngcc2.NbFooterRowDefDirective, typeof ɵngcc2.NbDataRowOutletDirective, typeof ɵngcc2.NbHeaderRowOutletDirective, typeof ɵngcc2.NbFooterRowOutletDirective, typeof ɵngcc2.NbNoDataRowOutletDirective, typeof ɵngcc2.NbCellOutletDirective, typeof ɵngcc1.NbHeaderCellDirective, typeof ɵngcc1.NbCellDirective, typeof ɵngcc1.NbFooterCellDirective, typeof ɵngcc2.NbHeaderRowComponent, typeof ɵngcc2.NbRowComponent, typeof ɵngcc2.NbFooterRowComponent], [typeof ɵngcc3.NbBidiModule], [typeof NbTable, typeof ɵngcc1.NbHeaderCellDefDirective, typeof ɵngcc2.NbHeaderRowDefDirective, typeof ɵngcc1.NbColumnDefDirective, typeof ɵngcc1.NbCellDefDirective, typeof ɵngcc2.NbRowDefDirective, typeof ɵngcc1.NbFooterCellDefDirective, typeof ɵngcc2.NbFooterRowDefDirective, typeof ɵngcc2.NbDataRowOutletDirective, typeof ɵngcc2.NbHeaderRowOutletDirective, typeof ɵngcc2.NbFooterRowOutletDirective, typeof ɵngcc2.NbNoDataRowOutletDirective, typeof ɵngcc2.NbCellOutletDirective, typeof ɵngcc1.NbHeaderCellDirective, typeof ɵngcc1.NbCellDirective, typeof ɵngcc1.NbFooterCellDirective, typeof ɵngcc2.NbHeaderRowComponent, typeof ɵngcc2.NbRowComponent, typeof ɵngcc2.NbFooterRowComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<NbTableModule>;
}

//# sourceMappingURL=table.module.d.ts.map