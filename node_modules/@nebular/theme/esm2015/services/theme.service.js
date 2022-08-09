/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { map, filter, pairwise, distinctUntilChanged, startWith, share } from 'rxjs/operators';
import { NB_THEME_OPTIONS } from '../theme.options';
import { NbJSThemesRegistry } from './js-themes-registry.service';
import { NbMediaBreakpointsService } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
export class NbThemeService {
    constructor(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new ReplaySubject(1);
        this.appendLayoutClass$ = new Subject();
        this.removeLayoutClass$ = new Subject();
        this.changeWindowWidth$ = new ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    /**
     * Change current application theme
     * @param {string} name
     */
    changeTheme(name) {
        this.themeChanges$.next({ name, previous: this.currentTheme });
        this.currentTheme = name;
    }
    changeWindowWidth(width) {
        this.changeWindowWidth$.next(width);
    }
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme() {
        return this.onThemeChange().pipe(map((theme) => {
            return this.jsThemesRegistry.get(theme.name);
        }));
    }
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange() {
        return this.changeWindowWidth$
            .pipe(startWith(undefined), pairwise(), map(([prevWidth, width]) => {
            return [
                this.breakpointService.getByWidth(prevWidth),
                this.breakpointService.getByWidth(width),
            ];
        }), filter(([prevPoint, point]) => {
            return prevPoint.name !== point.name;
        }), distinctUntilChanged(null, params => params[0].name + params[1].name), share());
    }
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    onThemeChange() {
        return this.themeChanges$.pipe(share());
    }
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    appendLayoutClass(className) {
        this.appendLayoutClass$.next(className);
    }
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    onAppendLayoutClass() {
        return this.appendLayoutClass$.pipe(share());
    }
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    removeLayoutClass(className) {
        this.removeLayoutClass$.next(className);
    }
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    onRemoveLayoutClass() {
        return this.removeLayoutClass$.pipe(share());
    }
}
NbThemeService.decorators = [
    { type: Injectable }
];
NbThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_THEME_OPTIONS,] }] },
    { type: NbMediaBreakpointsService },
    { type: NbJSThemesRegistry }
];
//# sourceMappingURL=theme.service.js.map