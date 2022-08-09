import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
export class NbLayoutScrollService {
    constructor() {
        this.scrollPositionReq$ = new Subject();
        this.manualScroll$ = new Subject();
        this.scroll$ = new Subject();
        this.scrollable$ = new Subject();
    }
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    getPosition() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.scrollPositionReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    scrollTo(x = null, y = null) {
        this.manualScroll$.next({ x, y });
    }
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    onScroll() {
        return this.scroll$.pipe(share());
    }
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    onManualScroll() {
        return this.manualScroll$.pipe(share());
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetPosition() {
        return this.scrollPositionReq$;
    }
    onScrollableChange() {
        return this.scrollable$.pipe(share());
    }
    /**
     * @private
     * @param {any} event
     */
    fireScrollChange(event) {
        this.scroll$.next(event);
    }
    scrollable(scrollable) {
        this.scrollable$.next(scrollable);
    }
}
NbLayoutScrollService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=scroll.service.js.map