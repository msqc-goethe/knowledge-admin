import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
export class NbLayoutRulerService {
    constructor() {
        this.contentDimensionsReq$ = new Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    getDimensions() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.contentDimensionsReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetDimensions() {
        return this.contentDimensionsReq$;
    }
}
NbLayoutRulerService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=ruler.service.js.map