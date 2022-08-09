import { NgZone } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NbPlatform } from '../platform/platform-service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbScrollDispatcherAdapter extends ScrollDispatcher {
    protected scrollService: NbLayoutScrollService;
    constructor(ngZone: NgZone, platform: NbPlatform, scrollService: NbLayoutScrollService, document: any);
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbScrollDispatcherAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbScrollDispatcherAdapter>;
}

//# sourceMappingURL=scroll-dispatcher-adapter.d.ts.map