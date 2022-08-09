import { OnDestroy, OnInit } from '@angular/core';
import { NbFilterable } from './data-source/tree-grid-data-source';
export declare class NbFilterDirective {
    filterable: NbFilterable;
    filter(filterRequest: string): void;
}
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
export declare class NbFilterInputDirective extends NbFilterDirective implements OnInit, OnDestroy {
    private search$;
    private destroy$;
    filterable: NbFilterable;
    /**
     * Debounce time before triggering filter method. Set in milliseconds.
     * Default 200.
     */
    debounceTime: number;
    ngOnInit(): void;
    ngOnDestroy(): void;
    filter(event: any): void;
}
