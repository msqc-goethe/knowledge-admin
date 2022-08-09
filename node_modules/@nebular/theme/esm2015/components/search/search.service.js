/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Search component service, connects your code to a page-level search component.
 */
export class NbSearchService {
    constructor() {
        this.searchSubmittings$ = new Subject();
        this.searchActivations$ = new Subject();
        this.searchDeactivations$ = new Subject();
        this.searchInput$ = new Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType, tag) {
        this.searchActivations$.next({ searchType, tag });
    }
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType, tag) {
        this.searchDeactivations$.next({ searchType, tag });
    }
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term, tag) {
        this.searchSubmittings$.next({ term, tag });
    }
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    searchInput(term, tag) {
        this.searchInput$.next({ term, tag });
    }
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate() {
        return this.searchActivations$.pipe(share());
    }
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate() {
        return this.searchDeactivations$.pipe(share());
    }
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit() {
        return this.searchSubmittings$.pipe(share());
    }
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchInput() {
        return this.searchInput$.pipe(share());
    }
}
NbSearchService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=search.service.js.map