/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, Inject, PLATFORM_ID, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';
import { NbMenuInternalService, NbMenuService } from './menu.service';
import { convertToBoolProperty } from '../helpers';
import { NB_WINDOW } from '../../theme.options';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NbLayoutDirectionService } from '../../services/direction.service';
export var NbToggleStates;
(function (NbToggleStates) {
    NbToggleStates["Expanded"] = "expanded";
    NbToggleStates["Collapsed"] = "collapsed";
})(NbToggleStates || (NbToggleStates = {}));
export class NbMenuItemComponent {
    constructor(menuService, directionService) {
        this.menuService = menuService;
        this.directionService = directionService;
        this.menuItem = null;
        this.hoverItem = new EventEmitter();
        this.toggleSubMenu = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.destroy$ = new Subject();
    }
    ngDoCheck() {
        this.toggleState = this.menuItem.expanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
    }
    ngAfterViewInit() {
        this.menuService.onSubmenuToggle()
            .pipe(filter(({ item }) => item === this.menuItem), map(({ item }) => item.expanded), takeUntil(this.destroy$))
            .subscribe(isExpanded => this.toggleState = isExpanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onToggleSubMenu(item) {
        this.toggleSubMenu.emit(item);
    }
    onHoverItem(item) {
        this.hoverItem.emit(item);
    }
    onSelectItem(item) {
        this.selectItem.emit(item);
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    getExpandStateIcon() {
        if (this.menuItem.expanded) {
            return 'chevron-down-outline';
        }
        return this.directionService.isLtr()
            ? 'chevron-left-outline'
            : 'chevron-right-outline';
    }
}
NbMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[nbMenuItem]',
                template: "<span *ngIf=\"menuItem.group\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  {{ menuItem.title }}\n</span>\n<a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\"\n   [routerLink]=\"menuItem.link\"\n   [queryParams]=\"menuItem.queryParams\"\n   [fragment]=\"menuItem.fragment\"\n   [queryParamsHandling]=\"menuItem.queryParamsHandling\"\n   [preserveFragment]=\"menuItem.preserveFragment\"\n   [skipLocationChange]=\"menuItem.skipLocationChange\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\"\n   [attr.href]=\"menuItem.url\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onSelectItem(menuItem)\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"$event.preventDefault(); onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.children\"\n   (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   href=\"#\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n  <nb-icon class=\"expand-state\" [icon]=\"getExpandStateIcon()\" pack=\"nebular-essentials\"></nb-icon>\n</a>\n<ul *ngIf=\"menuItem.children\"\n    [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\"\n    [class.expanded]=\"menuItem.expanded\"\n    [@toggle]=\"toggleState\"\n    class=\"menu-items\">\n  <ng-container *ngFor=\"let item of menuItem.children\">\n    <li nbMenuItem *ngIf=\"!item.hidden\"\n        [menuItem]=\"item\"\n        [badge]=\"item.badge\"\n        [class.menu-group]=\"item.group\"\n        (hoverItem)=\"onHoverItem($event)\"\n        (toggleSubMenu)=\"onToggleSubMenu($event)\"\n        (selectItem)=\"onSelectItem($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        class=\"menu-item\">\n    </li>\n  </ng-container>\n</ul>\n\n<ng-template #badgeTemplate>\n  <nb-badge [text]=\"badge.text\" [dotMode]=\"badge.dotMode\" [status]=\"badge.status\">\n  </nb-badge>\n</ng-template>\n",
                animations: [
                    trigger('toggle', [
                        state(NbToggleStates.Collapsed, style({ height: '0', margin: '0' })),
                        state(NbToggleStates.Expanded, style({ height: '*' })),
                        transition(`${NbToggleStates.Collapsed} <=> ${NbToggleStates.Expanded}`, animate(300)),
                    ]),
                ]
            },] }
];
NbMenuItemComponent.ctorParameters = () => [
    { type: NbMenuService },
    { type: NbLayoutDirectionService }
];
NbMenuItemComponent.propDecorators = {
    menuItem: [{ type: Input }],
    badge: [{ type: Input }],
    hoverItem: [{ type: Output }],
    toggleSubMenu: [{ type: Output }],
    selectItem: [{ type: Output }],
    itemClick: [{ type: Output }]
};
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 * Menu badge
 * @stacked-example(Menu item badge, menu/menu-badge.component)
 *
 * @styles
 *
 * menu-background-color:
 * menu-text-color:
 * menu-text-font-family:
 * menu-text-font-size:
 * menu-text-font-weight:
 * menu-text-line-height:
 * menu-group-text-color:
 * menu-item-border-radius:
 * menu-item-padding:
 * menu-item-hover-background-color:
 * menu-item-hover-cursor:
 * menu-item-hover-text-color:
 * menu-item-icon-hover-color:
 * menu-item-active-background-color:
 * menu-item-active-text-color:
 * menu-item-icon-active-color:
 * menu-item-icon-color:
 * menu-item-icon-margin:
 * menu-item-icon-width:
 * menu-item-divider-color:
 * menu-item-divider-style:
 * menu-item-divider-width:
 * menu-submenu-background-color:
 * menu-submenu-text-color:
 * menu-submenu-margin:
 * menu-submenu-padding:
 * menu-submenu-item-border-color:
 * menu-submenu-item-border-style:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-hover-background-color:
 * menu-submenu-item-hover-border-color:
 * menu-submenu-item-hover-text-color:
 * menu-submenu-item-icon-hover-color:
 * menu-submenu-item-active-background-color:
 * menu-submenu-item-active-border-color:
 * menu-submenu-item-active-text-color:
 * menu-submenu-item-icon-active-color:
 * menu-submenu-item-active-hover-background-color:
 * menu-submenu-item-active-hover-border-color:
 * menu-submenu-item-active-hover-text-color:
 * menu-submenu-item-icon-active-hover-color:
 */
export class NbMenuComponent {
    constructor(window, platformId, menuInternalService, router) {
        this.window = window;
        this.platformId = platformId;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this._autoCollapse = false;
        this.destroy$ = new Subject();
    }
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    get autoCollapse() {
        return this._autoCollapse;
    }
    set autoCollapse(value) {
        this._autoCollapse = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService
            .onAddItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(data => this.onAddItem(data));
        this.menuInternalService
            .onNavigateHome()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.navigateHome());
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe((data) => {
            data.listener.next({ tag: this.tag, item: this.getSelectedItem(this.items) });
        });
        this.menuInternalService
            .onCollapseAll()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.collapseAll());
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse));
    }
    onAddItem(data) {
        this.items.push(...data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
    }
    onHoverItem(item) {
        this.menuInternalService.itemHover(item, this.tag);
    }
    onToggleSubMenu(item) {
        if (this.autoCollapse) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    }
    // TODO: is not fired on page reload
    onSelectItem(item) {
        this.menuInternalService.selectItem(item, this.items, this.autoCollapse, this.tag);
    }
    onItemClick(item) {
        this.menuInternalService.itemClick(item, this.tag);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigateHome() {
        const homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                const extras = {
                    queryParams: homeItem.queryParams,
                    queryParamsHandling: homeItem.queryParamsHandling,
                    fragment: homeItem.fragment,
                    preserveFragment: homeItem.preserveFragment,
                };
                this.router.navigate([homeItem.link], extras);
            }
            if (homeItem.url && isPlatformBrowser(this.platformId)) {
                this.window.location.href = homeItem.url;
            }
        }
    }
    collapseAll() {
        this.menuInternalService.collapseAll(this.items, this.tag);
    }
    getHomeItem(items) {
        for (const item of items) {
            if (item.home) {
                return item;
            }
            const homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
    }
    compareTag(tag) {
        return !tag || tag === this.tag;
    }
    getSelectedItem(items) {
        let selected = null;
        items.forEach((item) => {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = this.getSelectedItem(item.children);
            }
        });
        return selected;
    }
}
NbMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-menu',
                template: `
    <ul class="menu-items">
      <ng-container *ngFor="let item of items">
        <li nbMenuItem *ngIf="!item.hidden"
            [menuItem]="item"
            [badge]="item.badge"
            [class.menu-group]="item.group"
            (hoverItem)="onHoverItem($event)"
            (toggleSubMenu)="onToggleSubMenu($event)"
            (selectItem)="onSelectItem($event)"
            (itemClick)="onItemClick($event)"
            class="menu-item">
        </li>
      </ng-container>
    </ul>
  `,
                styles: [":host ::ng-deep{display:block}:host ::ng-deep .menu-items,:host ::ng-deep .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host ::ng-deep .menu-item a{display:flex;text-decoration:none;align-items:center}:host ::ng-deep .menu-item a .menu-title{flex:1 0 auto}[dir=rtl] :host ::ng-deep .menu-item a .menu-title{text-align:right}:host ::ng-deep .menu-item nb-badge{position:static}:host ::ng-deep .menu-group span{display:flex}\n"]
            },] }
];
NbMenuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NbMenuInternalService },
    { type: Router }
];
NbMenuComponent.propDecorators = {
    tag: [{ type: Input }],
    items: [{ type: Input }],
    autoCollapse: [{ type: Input }]
};
//# sourceMappingURL=menu.component.js.map