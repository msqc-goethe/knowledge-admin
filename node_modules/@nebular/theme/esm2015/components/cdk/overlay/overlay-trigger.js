import { Inject, Injectable } from '@angular/core';
import { EMPTY, fromEvent as observableFromEvent, merge as observableMerge, Subject } from 'rxjs';
import { debounceTime, delay, filter, map, repeat, share, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../../theme.options';
export var NbTrigger;
(function (NbTrigger) {
    NbTrigger["NOOP"] = "noop";
    NbTrigger["CLICK"] = "click";
    NbTrigger["HOVER"] = "hover";
    NbTrigger["HINT"] = "hint";
    NbTrigger["FOCUS"] = "focus";
})(NbTrigger || (NbTrigger = {}));
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
export class NbTriggerStrategyBase {
    constructor(document, host, container) {
        this.document = document;
        this.host = host;
        this.container = container;
        this.destroyed$ = new Subject();
    }
    destroy() {
        this.destroyed$.next();
    }
    isNotOnHostOrContainer(event) {
        return !this.isOnHost(event) && !this.isOnContainer(event);
    }
    isOnHostOrContainer(event) {
        return this.isOnHost(event) || this.isOnContainer(event);
    }
    isOnHost({ target }) {
        return this.host.contains(target);
    }
    isOnContainer({ target }) {
        return this.container() && this.container().location.nativeElement.contains(target);
    }
}
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
export class NbClickTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        // since we should track click for both SHOW and HIDE event we firstly need to track the click and the state
        // of the container and then later on decide should we hide it or show
        // if we track the click & state separately this will case a behavior when the container is getting shown
        // and then hidden right away
        this.click$ = observableFromEvent(this.document, 'click')
            .pipe(map((event) => [!this.container() && this.isOnHost(event), event]), share(), takeUntil(this.destroyed$));
        this.show$ = this.click$
            .pipe(filter(([shouldShow]) => shouldShow), map(([, event]) => event), takeUntil(this.destroyed$));
        this.hide$ = this.click$
            .pipe(filter(([shouldShow, event]) => !shouldShow && !this.isOnContainer(event)), map(([, event]) => event), takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
export class NbHoverTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = observableFromEvent(this.host, 'mouseenter')
            .pipe(filter(() => !this.container()), 
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        delay(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(observableFromEvent(this.host, 'mouseleave')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = observableFromEvent(this.host, 'mouseleave')
            .pipe(switchMap(() => observableFromEvent(this.document, 'mousemove')
            .pipe(debounceTime(100), takeWhile(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)))), takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
export class NbHintTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = observableFromEvent(this.host, 'mouseenter')
            .pipe(
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        delay(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(observableFromEvent(this.host, 'mouseleave')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = observableFromEvent(this.host, 'mouseleave')
            .pipe(takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
export class NbFocusTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.focusOut$ = observableFromEvent(this.host, 'focusout')
            .pipe(switchMap(() => observableFromEvent(this.document, 'focusin')
            .pipe(takeWhile(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)))), takeUntil(this.destroyed$));
        this.clickIn$ = observableFromEvent(this.host, 'click')
            .pipe(filter(() => !this.container()), takeUntil(this.destroyed$));
        this.clickOut$ = observableFromEvent(this.document, 'click')
            .pipe(filter(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)), takeUntil(this.destroyed$));
        this.tabKeyPress$ = observableFromEvent(this.document, 'keydown')
            .pipe(filter((event) => event.keyCode === 9), filter(() => !!this.container()), takeUntil(this.destroyed$));
        this.show$ = observableMerge(observableFromEvent(this.host, 'focusin'), this.clickIn$)
            .pipe(filter(() => !this.container()), debounceTime(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(observableFromEvent(this.host, 'focusout')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = observableMerge(this.focusOut$, this.tabKeyPress$, this.clickOut$)
            .pipe(takeUntil(this.destroyed$));
    }
}
/**
 * Creates empty show and hide event streams.
 * */
export class NbNoopTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = EMPTY;
        this.hide$ = EMPTY;
    }
}
export class NbTriggerStrategyBuilderService {
    constructor(_document) {
        this._document = _document;
    }
    trigger(trigger) {
        this._trigger = trigger;
        return this;
    }
    host(host) {
        this._host = host;
        return this;
    }
    container(container) {
        this._container = container;
        return this;
    }
    build() {
        switch (this._trigger) {
            case NbTrigger.CLICK:
                return new NbClickTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HINT:
                return new NbHintTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HOVER:
                return new NbHoverTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.FOCUS:
                return new NbFocusTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.NOOP:
                return new NbNoopTriggerStrategy(this._document, this._host, this._container);
            default:
                throw new Error('Trigger have to be provided');
        }
    }
}
NbTriggerStrategyBuilderService.decorators = [
    { type: Injectable }
];
NbTriggerStrategyBuilderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
//# sourceMappingURL=overlay-trigger.js.map