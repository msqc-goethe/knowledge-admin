import { Directive, Input, HostListener, ElementRef, EventEmitter, Output, ContentChildren, } from '@angular/core';
import { forkJoin, of as observableOf, interval, timer, Subject } from 'rxjs';
import { filter, switchMap, map, takeUntil, take } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbLayoutScrollService } from '../../services/scroll.service';
import { NbLayoutRulerService } from '../../services/ruler.service';
import { NbListItemComponent } from './list.component';
export class NbScrollableContainerDimentions {
}
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to a given threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
export class NbInfiniteListDirective {
    constructor(elementRef, scrollService, dimensionsService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.dimensionsService = dimensionsService;
        this.destroy$ = new Subject();
        this.windowScroll = false;
        /**
         * Emits when distance between list bottom and current scroll position is less than threshold.
         */
        this.bottomThreshold = new EventEmitter(true);
        /**
         * Emits when distance between list top and current scroll position is less than threshold.
         */
        this.topThreshold = new EventEmitter(true);
    }
    get elementScroll() {
        return !this.windowScroll;
    }
    /**
     * By default component observes list scroll position.
     * If set to `true`, component will observe position of page scroll instead.
     */
    set listenWindowScroll(value) {
        this.windowScroll = convertToBoolProperty(value);
    }
    onElementScroll() {
        if (this.elementScroll) {
            this.checkPosition(this.elementRef.nativeElement);
        }
    }
    ngAfterViewInit() {
        this.scrollService.onScroll()
            .pipe(filter(() => this.windowScroll), switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe(dimentions => this.checkPosition(dimentions));
        this.listItems.changes
            .pipe(
        // For some reason, changes are emitted before list item removed from dom,
        // so dimensions will be incorrect.
        // Check every 50ms for a second if dom and query are in sync.
        // Once they synchronized, we can get proper dimensions.
        switchMap(() => interval(50).pipe(filter(() => this.inSyncWithDom()), take(1), takeUntil(timer(1000)))), switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe(dimentions => this.checkPosition(dimentions));
        this.getContainerDimensions().subscribe(dimentions => this.checkPosition(dimentions));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkPosition({ scrollHeight, scrollTop, clientHeight }) {
        const initialCheck = this.lastScrollPosition == null;
        const manualCheck = this.lastScrollPosition === scrollTop;
        const scrollUp = scrollTop < this.lastScrollPosition;
        const scrollDown = scrollTop > this.lastScrollPosition;
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;
        if ((initialCheck || manualCheck || scrollDown) && distanceToBottom <= this.threshold) {
            this.bottomThreshold.emit();
        }
        if ((initialCheck || scrollUp) && scrollTop <= this.threshold) {
            this.topThreshold.emit();
        }
        this.lastScrollPosition = scrollTop;
    }
    getContainerDimensions() {
        if (this.elementScroll) {
            const { scrollTop, scrollHeight, clientHeight } = this.elementRef.nativeElement;
            return observableOf({ scrollTop, scrollHeight, clientHeight });
        }
        return forkJoin([this.scrollService.getPosition(), this.dimensionsService.getDimensions()])
            .pipe(map(([scrollPosition, dimensions]) => ({
            scrollTop: scrollPosition.y,
            scrollHeight: dimensions.scrollHeight,
            clientHeight: dimensions.clientHeight,
        })));
    }
    inSyncWithDom() {
        return this.elementRef.nativeElement.children.length === this.listItems.length;
    }
}
NbInfiniteListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbInfiniteList]',
            },] }
];
NbInfiniteListDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbLayoutScrollService },
    { type: NbLayoutRulerService }
];
NbInfiniteListDirective.propDecorators = {
    threshold: [{ type: Input }],
    listenWindowScroll: [{ type: Input }],
    bottomThreshold: [{ type: Output }],
    topThreshold: [{ type: Output }],
    onElementScroll: [{ type: HostListener, args: ['scroll',] }],
    listItems: [{ type: ContentChildren, args: [NbListItemComponent,] }]
};
//# sourceMappingURL=infinite-list.directive.js.map