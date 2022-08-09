import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Layout direction.
 * */
export var NbLayoutDirection;
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));
;
/**
 * Layout direction setting injection token.
 * */
export const NB_LAYOUT_DIRECTION = new InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
export class NbLayoutDirectionService {
    constructor(direction = NbLayoutDirection.LTR) {
        this.direction = direction;
        this.$directionChange = new ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    isLtr() {
        return this.direction === NbLayoutDirection.LTR;
    }
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    isRtl() {
        return this.direction === NbLayoutDirection.RTL;
    }
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    getDirection() {
        return this.direction;
    }
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    setDirection(direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    }
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    onDirectionChange() {
        return this.$directionChange.pipe(share());
    }
}
NbLayoutDirectionService.decorators = [
    { type: Injectable }
];
NbLayoutDirectionService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_LAYOUT_DIRECTION,] }] }
];
//# sourceMappingURL=direction.service.js.map