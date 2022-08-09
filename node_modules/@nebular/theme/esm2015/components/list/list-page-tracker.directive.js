import { Directive, ContentChildren, Input, ElementRef, Output, EventEmitter, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'intersection-observer';
import { NbListItemComponent } from './list.component';
/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
export class NbListPageTrackerDirective {
    constructor() {
        this.destroy$ = new Subject();
        /**
         * Page to start counting with.
         */
        this.startPage = 1;
        /**
         * Emits when another page become visible.
         */
        this.pageChange = new EventEmitter();
        this.observer = new IntersectionObserver(entries => this.checkForPageChange(entries), { threshold: 0.5 });
    }
    ngAfterViewInit() {
        if (this.listItems && this.listItems.length) {
            this.observeItems();
        }
        this.listItems.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.observeItems());
    }
    ngOnDestroy() {
        this.observer.disconnect && this.observer.disconnect();
    }
    observeItems() {
        this.listItems.forEach(i => this.observer.observe(i.nativeElement));
    }
    checkForPageChange(entries) {
        const mostVisiblePage = this.findMostVisiblePage(entries);
        if (mostVisiblePage && this.currentPage !== mostVisiblePage) {
            this.currentPage = mostVisiblePage;
            this.pageChange.emit(this.currentPage);
        }
    }
    findMostVisiblePage(entries) {
        const intersectionRatioByPage = new Map();
        for (const entry of entries) {
            if (entry.intersectionRatio < 0.5) {
                continue;
            }
            const elementIndex = this.elementIndex(entry.target);
            if (elementIndex === -1) {
                continue;
            }
            const page = this.startPage + Math.floor(elementIndex / this.pageSize);
            let ratio = entry.intersectionRatio;
            if (intersectionRatioByPage.has(page)) {
                ratio += intersectionRatioByPage.get(page);
            }
            intersectionRatioByPage.set(page, ratio);
        }
        let maxRatio = 0;
        let mostVisiblePage;
        intersectionRatioByPage.forEach((ratio, page) => {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisiblePage = page;
            }
        });
        return mostVisiblePage;
    }
    elementIndex(element) {
        return element.parentElement && element.parentElement.children
            ? Array.from(element.parentElement.children).indexOf(element)
            : -1;
    }
}
NbListPageTrackerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbListPageTracker]',
            },] }
];
NbListPageTrackerDirective.ctorParameters = () => [];
NbListPageTrackerDirective.propDecorators = {
    pageSize: [{ type: Input }],
    startPage: [{ type: Input }],
    pageChange: [{ type: Output }],
    listItems: [{ type: ContentChildren, args: [NbListItemComponent, { read: ElementRef },] }]
};
//# sourceMappingURL=list-page-tracker.directive.js.map