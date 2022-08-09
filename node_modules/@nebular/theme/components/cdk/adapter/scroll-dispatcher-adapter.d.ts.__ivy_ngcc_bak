import { NgZone } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NbPlatform } from '../platform/platform-service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
export declare class NbScrollDispatcherAdapter extends ScrollDispatcher {
    protected scrollService: NbLayoutScrollService;
    constructor(ngZone: NgZone, platform: NbPlatform, scrollService: NbLayoutScrollService, document: any);
    scrolled(auditTimeInMs?: number): Observable<CdkScrollable | void>;
}
