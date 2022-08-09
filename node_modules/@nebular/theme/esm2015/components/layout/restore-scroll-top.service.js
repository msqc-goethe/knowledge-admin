import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, pairwise, startWith, map } from 'rxjs/operators';
import { getPathPartOfUrl } from '../menu/url-matching-helpers';
/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
export class NbRestoreScrollTopHelper {
    constructor(router) {
        this.router = router;
    }
    shouldRestore() {
        return this.router.events
            .pipe(startWith(null), filter(event => event === null || event instanceof NavigationEnd), pairwise(), map(([prev, current]) => this.pageChanged(prev, current)), filter(res => !!res));
    }
    pageChanged(prev, current) {
        return !prev || getPathPartOfUrl(prev.url) !== getPathPartOfUrl(current.url);
    }
}
NbRestoreScrollTopHelper.decorators = [
    { type: Injectable }
];
NbRestoreScrollTopHelper.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=restore-scroll-top.service.js.map