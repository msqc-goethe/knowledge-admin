import { Inject, Injectable, NgZone } from '@angular/core';
import { BlockScrollStrategy, ScrollDispatcher, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
export class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    constructor(document, viewportRuler, scrollService) {
        super(viewportRuler, document);
        this.scrollService = scrollService;
    }
    enable() {
        super.enable();
        this.scrollService.scrollable(false);
    }
    disable() {
        super.disable();
        this.scrollService.scrollable(true);
    }
}
NbBlockScrollStrategyAdapter.decorators = [
    { type: Injectable }
];
NbBlockScrollStrategyAdapter.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbViewportRulerAdapter },
    { type: NbLayoutScrollService }
];
export class NbScrollStrategyOptions extends ScrollStrategyOptions {
    constructor(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        super(scrollDispatcher, viewportRuler, ngZone, document);
        this.scrollService = scrollService;
        this.scrollDispatcher = scrollDispatcher;
        this.viewportRuler = viewportRuler;
        this.ngZone = ngZone;
        this.document = document;
        this.block = () => new NbBlockScrollStrategyAdapter(this.document, this.viewportRuler, this.scrollService);
    }
}
NbScrollStrategyOptions.decorators = [
    { type: Injectable }
];
NbScrollStrategyOptions.ctorParameters = () => [
    { type: NbLayoutScrollService },
    { type: ScrollDispatcher },
    { type: NbViewportRulerAdapter },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
//# sourceMappingURL=block-scroll-strategy-adapter.js.map