import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { filter, take, takeUntil } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import { NbPlatform } from '../cdk/platform/platform-service';
export class NbTimePickerCellComponent {
    constructor(ngZone, platformService) {
        this.ngZone = ngZone;
        this.platformService = platformService;
        this.selectedChange$ = new Subject();
        this.unselected$ = this.selectedChange$.pipe(filter((selected) => !selected));
        this.destroy$ = new Subject();
        this.select = new EventEmitter();
    }
    set selected(selected) {
        if (selected) {
            this._selected = selected;
            this.scrollToElement();
        }
        this.selectedChange$.next(selected);
    }
    ;
    get selected() {
        return this._selected;
    }
    onClick() {
        this.select.emit({ value: this.value });
    }
    ngAfterViewInit() {
        if (this.selected) {
            // Since we render timepicker in the overlay, at the moment this hook called,
            // timepicker could be not fully rendered and placed. Because of it, we're waiting for Angular
            // to finish change detection run and only then scroll to the selected cell.
            this.ngZone.onStable
                .pipe(take(1), takeUntil(merge(this.unselected$, this.destroy$)))
                .subscribe(() => this.scrollToElement());
        }
    }
    scrollToElement() {
        if (this.valueContainerElement && this.platformService.isBrowser) {
            this.ngZone.runOutsideAngular(() => this.valueContainerElement.nativeElement.scrollIntoView({ block: 'center' }));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTimePickerCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-timepicker-cell',
                template: `
    <div #valueContainer>{{ value }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;user-select:none}\n"]
            },] }
];
NbTimePickerCellComponent.ctorParameters = () => [
    { type: NgZone },
    { type: NbPlatform }
];
NbTimePickerCellComponent.propDecorators = {
    selected: [{ type: Input }],
    value: [{ type: Input }],
    select: [{ type: Output }],
    valueContainerElement: [{ type: ViewChild, args: ['valueContainer',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=timepicker-cell.component.js.map