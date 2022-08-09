/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import { skip, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbTooltipComponent } from './tooltip.component';
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` property:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 * Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 */
export class NbTooltipDirective {
    constructor(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.destroy$ = new Subject();
        this.tooltipComponent = NbTooltipComponent;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        this.position = NbPosition.TOP;
        this._adjustment = NbAdjustment.CLOCKWISE;
        this._tooltipClass = '';
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.HINT;
        /**
         * Determines tooltip overlay offset (in pixels).
         **/
        this.offset = 8;
        this.nbTooltipShowStateChange = new EventEmitter();
        this.overlayConfig = { panelClass: this.tooltipClass };
    }
    /**
     * Container position will change automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatic adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     */
    get adjustment() {
        return this._adjustment;
    }
    set adjustment(value) {
        this._adjustment = value;
    }
    get tooltipClass() {
        return this._tooltipClass;
    }
    set tooltipClass(value) {
        if (value !== this.tooltipClass) {
            this._tooltipClass = value;
            this.overlayConfig = { panelClass: this.tooltipClass };
        }
    }
    /**
     * Accepts icon name or icon config object
     * @param {string | NbIconConfig} icon name or config object
     */
    set icon(icon) {
        this.context = Object.assign(this.context, { icon });
    }
    /**
     *
     * @param {string} status
     */
    set status(status) {
        this.context = Object.assign(this.context, { status });
    }
    get isShown() {
        return !!(this.dynamicOverlay && this.dynamicOverlay.isAttached);
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(this.tooltipComponent)
            .offset(this.offset);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.dynamicOverlay.isShown
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe((isShown) => this.nbTooltipShowStateChange.emit({ isShown }));
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context)
            .overlayConfig(this.overlayConfig);
    }
}
NbTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTooltip]',
                exportAs: 'nbTooltip',
                providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
            },] }
];
NbTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbDynamicOverlayHandler }
];
NbTooltipDirective.propDecorators = {
    content: [{ type: Input, args: ['nbTooltip',] }],
    position: [{ type: Input, args: ['nbTooltipPlacement',] }],
    adjustment: [{ type: Input, args: ['nbTooltipAdjustment',] }],
    tooltipClass: [{ type: Input, args: ['nbTooltipClass',] }],
    icon: [{ type: Input, args: ['nbTooltipIcon',] }],
    status: [{ type: Input, args: ['nbTooltipStatus',] }],
    trigger: [{ type: Input, args: ['nbTooltipTrigger',] }],
    offset: [{ type: Input, args: ['nbTooltipOffset',] }],
    nbTooltipShowStateChange: [{ type: Output }]
};
//# sourceMappingURL=tooltip.directive.js.map