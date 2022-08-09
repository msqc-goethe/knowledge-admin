import { QueryList, ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import 'intersection-observer';
/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbListPageTrackerDirective implements AfterViewInit, OnDestroy {
    private destroy$;
    private observer;
    private currentPage;
    /**
     * Items per page.
     */
    pageSize: number;
    /**
     * Page to start counting with.
     */
    startPage: number;
    /**
     * Emits when another page become visible.
     */
    pageChange: EventEmitter<number>;
    listItems: QueryList<ElementRef>;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private observeItems;
    private checkForPageChange;
    private findMostVisiblePage;
    private elementIndex;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbListPageTrackerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NbListPageTrackerDirective, "[nbListPageTracker]", never, { "startPage": "startPage"; "pageSize": "pageSize"; }, { "pageChange": "pageChange"; }, ["listItems"]>;
}

//# sourceMappingURL=list-page-tracker.directive.d.ts.map