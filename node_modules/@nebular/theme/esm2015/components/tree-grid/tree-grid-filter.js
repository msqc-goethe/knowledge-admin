/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class NbFilterDirective {
    filter(filterRequest) {
        this.filterable.filter(filterRequest);
    }
}
NbFilterDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbFilter]' },] }
];
NbFilterDirective.propDecorators = {
    filterable: [{ type: Input, args: ['nbFilter',] }]
};
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
export class NbFilterInputDirective extends NbFilterDirective {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.destroy$ = new Subject();
        /**
         * Debounce time before triggering filter method. Set in milliseconds.
         * Default 200.
         */
        this.debounceTime = 200;
    }
    ngOnInit() {
        this.search$
            .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
            .subscribe((query) => {
            super.filter(query);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.search$.complete();
    }
    filter(event) {
        this.search$.next(event.target.value);
    }
}
NbFilterInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFilterInput]',
                providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective }],
            },] }
];
NbFilterInputDirective.propDecorators = {
    filterable: [{ type: Input, args: ['nbFilterInput',] }],
    debounceTime: [{ type: Input }],
    filter: [{ type: HostListener, args: ['input', ['$event'],] }]
};
//# sourceMappingURL=tree-grid-filter.js.map