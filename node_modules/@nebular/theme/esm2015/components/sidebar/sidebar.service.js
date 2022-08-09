/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { share, refCount, publish } from 'rxjs/operators';
export const getSidebarState$ = new Subject();
export const getSidebarResponsiveState$ = new Subject();
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
export class NbSidebarService {
    constructor() {
        this.toggle$ = new Subject();
        this.expand$ = new Subject();
        this.collapse$ = new Subject();
        this.compact$ = new Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle() {
        return this.toggle$.pipe(share());
    }
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand() {
        return this.expand$.pipe(share());
    }
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse() {
        return this.collapse$.pipe(share());
    }
    /**
     * Subscribe to compact evens
     * @returns Observable<{ tag: string }>
     */
    onCompact() {
        return this.compact$.pipe(share());
    }
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact = false, tag) {
        this.toggle$.next({ compact, tag });
    }
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag) {
        this.expand$.next({ tag });
    }
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag) {
        this.collapse$.next({ tag });
    }
    /**
     * Makes sidebar compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    compact(tag) {
        this.compact$.next({ tag });
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar state you need
     */
    getSidebarState(tag) {
        const observer = new ReplaySubject(1);
        getSidebarState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar responsive state you need
     */
    getSidebarResponsiveState(tag) {
        const observer = new ReplaySubject();
        getSidebarResponsiveState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
}
NbSidebarService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=sidebar.service.js.map