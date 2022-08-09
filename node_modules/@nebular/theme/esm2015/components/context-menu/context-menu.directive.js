/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, ElementRef, HostBinding, Input, } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbContextMenuComponent } from './context-menu.component';
import { NbMenuService } from '../menu/menu.service';
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * Also make sure `NbMenuModule` is imported to your `app.module`.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * Context menu has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, context-menu/context-menu-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, context-menu/context-menu-noop.component)
 *
 * @stacked-example(Manual Control, context-menu/context-menu-right-click.component)
 * */
export class NbContextMenuDirective {
    constructor(hostRef, menuService, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.menuService = menuService;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.contextMenuHost = true;
        this._position = NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        this._contextMenuClass = '';
        this.overlayConfig = { panelClass: this.contextMenuClass };
        this.overlayContext = { items: this.items, tag: this.tag, position: this.position };
        this.destroy$ = new Subject();
        this._items = [];
    }
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    get position() {
        return this._position;
    }
    set position(value) {
        if (value !== this.position) {
            this._position = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    get tag() {
        return this._tag;
    }
    set tag(value) {
        if (value !== this.tag) {
            this._tag = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    get items() {
        return this._items;
    }
    set items(items) {
        this.validateItems(items);
        this._items = items;
        this.updateOverlayContext();
    }
    ;
    get contextMenuClass() {
        return this._contextMenuClass;
    }
    set contextMenuClass(value) {
        if (value !== this.contextMenuClass) {
            this._contextMenuClass = value;
            this.overlayConfig = { panelClass: this.contextMenuClass };
        }
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbContextMenuComponent);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.subscribeOnItemClick();
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
            .context(this.overlayContext)
            .overlayConfig(this.overlayConfig);
    }
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    validateItems(items) {
        if (!items || !items.length) {
            throw Error(`List of menu items expected, but given: ${items}`);
        }
    }
    subscribeOnItemClick() {
        this.menuService.onItemClick()
            .pipe(filter(({ tag }) => tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.hide());
    }
    updateOverlayContext() {
        this.overlayContext = { items: this.items, position: this.position, tag: this.tag };
    }
}
NbContextMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbContextMenu]',
                providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
            },] }
];
NbContextMenuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbMenuService },
    { type: NbDynamicOverlayHandler }
];
NbContextMenuDirective.propDecorators = {
    contextMenuHost: [{ type: HostBinding, args: ['class.context-menu-host',] }],
    position: [{ type: Input, args: ['nbContextMenuPlacement',] }],
    adjustment: [{ type: Input, args: ['nbContextMenuAdjustment',] }],
    tag: [{ type: Input, args: ['nbContextMenuTag',] }],
    items: [{ type: Input, args: ['nbContextMenu',] }],
    trigger: [{ type: Input, args: ['nbContextMenuTrigger',] }],
    contextMenuClass: [{ type: Input, args: ['nbContextMenuClass',] }]
};
//# sourceMappingURL=context-menu.directive.js.map