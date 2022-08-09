import { Inject, Injectable, NgZone } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { merge } from 'rxjs';
import { NbPlatform } from '../platform/platform-service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import { NB_DOCUMENT } from '../../../theme.options';
export class NbScrollDispatcherAdapter extends ScrollDispatcher {
    constructor(ngZone, platform, scrollService, document) {
        super(ngZone, platform, document);
        this.scrollService = scrollService;
    }
    scrolled(auditTimeInMs) {
        return merge(super.scrolled(auditTimeInMs), this.scrollService.onScroll());
    }
}
NbScrollDispatcherAdapter.decorators = [
    { type: Injectable }
];
NbScrollDispatcherAdapter.ctorParameters = () => [
    { type: NgZone },
    { type: NbPlatform },
    { type: NbLayoutScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
//# sourceMappingURL=scroll-dispatcher-adapter.js.map