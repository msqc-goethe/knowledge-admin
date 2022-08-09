import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from '../../../lib/data-set/column';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultFilter implements Filter, OnDestroy {
    delay: number;
    changesSubscription: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
    ngOnDestroy(): void;
    setFilter(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DefaultFilter, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DefaultFilter, "ng-component", never, { "query": "query"; "inputClass": "inputClass"; "column": "column"; }, { "filter": "filter"; }, never, never>;
}
export interface Filter {
    delay?: number;
    changesSubscription?: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
}

//# sourceMappingURL=default-filter.d.ts.map