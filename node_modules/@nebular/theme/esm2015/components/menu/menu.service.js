/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { isFragmentContain, isFragmentEqual, isUrlPathContain, isUrlPathEqual } from './url-matching-helpers';
const itemClick$ = new Subject();
const addItems$ = new ReplaySubject(1);
const navigateHome$ = new ReplaySubject(1);
const getSelectedItem$ = new ReplaySubject(1);
const itemSelect$ = new ReplaySubject(1);
const itemHover$ = new ReplaySubject(1);
const submenuToggle$ = new ReplaySubject(1);
const collapseAll$ = new ReplaySubject(1);
// TODO: check if we need both URL and LINK
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
export class NbMenuItem {
    constructor() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full';
    }
    /**
     * @returns item parents in top-down order
     */
    static getParents(item) {
        const parents = [];
        let parent = item.parent;
        while (parent) {
            parents.unshift(parent);
            parent = parent.parent;
        }
        return parents;
    }
    static isParent(item, possibleChild) {
        return possibleChild.parent
            ? possibleChild.parent === item || this.isParent(item, possibleChild.parent)
            : false;
    }
}
// TODO: map select events to router change events
// TODO: review the interface
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
export class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items, tag) {
        addItems$.next({ tag, items });
    }
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    collapseAll(tag) {
        collapseAll$.next({ tag });
    }
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag) {
        navigateHome$.next({ tag });
    }
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag) {
        const listener = new BehaviorSubject(null);
        getSelectedItem$.next({ tag, listener });
        return listener.asObservable();
    }
    onItemClick() {
        return itemClick$.pipe(share());
    }
    onItemSelect() {
        return itemSelect$.pipe(share());
    }
    onItemHover() {
        return itemHover$.pipe(share());
    }
    onSubmenuToggle() {
        return submenuToggle$.pipe(share());
    }
}
NbMenuService.decorators = [
    { type: Injectable }
];
export class NbMenuInternalService {
    constructor(location) {
        this.location = location;
    }
    prepareItems(items) {
        const defaultItem = new NbMenuItem();
        items.forEach(i => {
            this.applyDefaults(i, defaultItem);
            this.setParent(i);
        });
    }
    selectFromUrl(items, tag, collapseOther = false) {
        const selectedItem = this.findItemByUrl(items);
        if (selectedItem) {
            this.selectItem(selectedItem, items, collapseOther, tag);
        }
    }
    selectItem(item, items, collapseOther = false, tag) {
        const unselectedItems = this.resetSelection(items);
        const collapsedItems = collapseOther ? this.collapseItems(items) : [];
        for (const parent of NbMenuItem.getParents(item)) {
            parent.selected = true;
            // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
            if (!unselectedItems.includes(parent)) {
                this.itemSelect(parent, tag);
            }
            const wasNotExpanded = !parent.expanded;
            parent.expanded = true;
            const i = collapsedItems.indexOf(parent);
            // emit event only for items that weren't expanded before.
            // 'collapsedItems' contains items that were expanded, so no need to emit event.
            // in case 'collapseOther' is false, 'collapsedItems' will be empty,
            // so also check if item isn't expanded already ('wasNotExpanded').
            if (i === -1 && wasNotExpanded) {
                this.submenuToggle(parent, tag);
            }
            else {
                collapsedItems.splice(i, 1);
            }
        }
        item.selected = true;
        // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
        if (!unselectedItems.includes(item)) {
            this.itemSelect(item, tag);
        }
        // remaining items which wasn't expanded back after expanding all currently selected items
        for (const collapsedItem of collapsedItems) {
            this.submenuToggle(collapsedItem, tag);
        }
    }
    collapseAll(items, tag, except) {
        const collapsedItems = this.collapseItems(items, except);
        for (const item of collapsedItems) {
            this.submenuToggle(item, tag);
        }
    }
    onAddItem() {
        return addItems$.pipe(share());
    }
    onNavigateHome() {
        return navigateHome$.pipe(share());
    }
    onCollapseAll() {
        return collapseAll$.pipe(share());
    }
    onGetSelectedItem() {
        return getSelectedItem$.pipe(share());
    }
    itemHover(item, tag) {
        itemHover$.next({ tag, item });
    }
    submenuToggle(item, tag) {
        submenuToggle$.next({ tag, item });
    }
    itemSelect(item, tag) {
        itemSelect$.next({ tag, item });
    }
    itemClick(item, tag) {
        itemClick$.next({ tag, item });
    }
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    resetSelection(items) {
        const unselectedItems = [];
        for (const item of items) {
            if (item.selected) {
                unselectedItems.push(item);
            }
            item.selected = false;
            if (item.children) {
                unselectedItems.push(...this.resetSelection(item.children));
            }
        }
        return unselectedItems;
    }
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    collapseItems(items, except) {
        const collapsedItems = [];
        for (const item of items) {
            if (except && (item === except || NbMenuItem.isParent(item, except))) {
                continue;
            }
            if (item.expanded) {
                collapsedItems.push(item);
            }
            item.expanded = false;
            if (item.children) {
                collapsedItems.push(...this.collapseItems(item.children));
            }
        }
        return collapsedItems;
    }
    applyDefaults(item, defaultItem) {
        const menuItem = Object.assign({}, item);
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(child => {
            this.applyDefaults(child, defaultItem);
        });
    }
    setParent(item) {
        item.children && item.children.forEach(child => {
            child.parent = item;
            this.setParent(child);
        });
    }
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    findItemByUrl(items) {
        let selectedItem;
        items.some(item => {
            if (item.children) {
                selectedItem = this.findItemByUrl(item.children);
            }
            if (!selectedItem && this.isSelectedInUrl(item)) {
                selectedItem = item;
            }
            return selectedItem;
        });
        return selectedItem;
    }
    isSelectedInUrl(item) {
        const exact = item.pathMatch === 'full';
        const link = item.link;
        const isSelectedInPath = exact
            ? isUrlPathEqual(this.location.path(), link)
            : isUrlPathContain(this.location.path(), link);
        if (isSelectedInPath && item.fragment != null) {
            return exact
                ? isFragmentEqual(this.location.path(true), item.fragment)
                : isFragmentContain(this.location.path(true), item.fragment);
        }
        return isSelectedInPath;
    }
}
NbMenuInternalService.decorators = [
    { type: Injectable }
];
NbMenuInternalService.ctorParameters = () => [
    { type: Location }
];
//# sourceMappingURL=menu.service.js.map