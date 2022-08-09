import { Attribute, ChangeDetectorRef, ElementRef, Inject, IterableDiffers, NgModule, Component, Optional, SkipSelf, } from '@angular/core';
import { _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, CdkTable, CdkTableModule, } from '@angular/cdk/table';
import { _DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import { NbBidiModule } from '../bidi/bidi.module';
import { NbDirectionality } from '../bidi/bidi-service';
import { NbPlatform } from '../platform/platform-service';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import { NB_STICKY_POSITIONING_LISTENER } from '../../cdk/table/type-mappings';
import { NbCellDefDirective, NbCellDirective, NbColumnDefDirective, NbFooterCellDefDirective, NbFooterCellDirective, NbHeaderCellDefDirective, NbHeaderCellDirective, } from './cell';
import { NbCellOutletDirective, NbDataRowOutletDirective, NbFooterRowOutletDirective, NbHeaderRowOutletDirective, NbFooterRowComponent, NbFooterRowDefDirective, NbHeaderRowComponent, NbHeaderRowDefDirective, NbRowComponent, NbRowDefDirective, NbNoDataRowOutletDirective, } from './row';
export const NB_TABLE_TEMPLATE = `
  <ng-container nbHeaderRowOutlet></ng-container>
  <ng-container nbRowOutlet></ng-container>
  <ng-container nbNoDataRowOutlet></ng-container>
  <ng-container nbFooterRowOutlet></ng-container>
`;
export const NB_VIEW_REPEATER_STRATEGY = _VIEW_REPEATER_STRATEGY;
export const NB_COALESCED_STYLE_SCHEDULER = _COALESCED_STYLE_SCHEDULER;
export const NB_TABLE_PROVIDERS = [
    { provide: NB_VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
    { provide: NB_COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
];
// tslint:disable-next-line:component-class-suffix
export class NbTable extends CdkTable {
    constructor(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
    }
}
NbTable.decorators = [
    { type: Component, args: [{
                selector: 'nb-table-not-implemented',
                template: ``,
                providers: NB_TABLE_PROVIDERS
            },] }
];
NbTable.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NbDirectionality },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPlatform },
    { type: undefined, decorators: [{ type: Inject, args: [_VIEW_REPEATER_STRATEGY,] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: Inject, args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: NbViewportRulerAdapter },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [NB_STICKY_POSITIONING_LISTENER,] }] }
];
const COMPONENTS = [
    NbTable,
    // Template defs
    NbHeaderCellDefDirective,
    NbHeaderRowDefDirective,
    NbColumnDefDirective,
    NbCellDefDirective,
    NbRowDefDirective,
    NbFooterCellDefDirective,
    NbFooterRowDefDirective,
    // Outlets
    NbDataRowOutletDirective,
    NbHeaderRowOutletDirective,
    NbFooterRowOutletDirective,
    NbNoDataRowOutletDirective,
    NbCellOutletDirective,
    // Cell directives
    NbHeaderCellDirective,
    NbCellDirective,
    NbFooterCellDirective,
    // Row directives
    NbHeaderRowComponent,
    NbRowComponent,
    NbFooterRowComponent,
];
export class NbTableModule extends CdkTableModule {
}
NbTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbBidiModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=table.module.js.map