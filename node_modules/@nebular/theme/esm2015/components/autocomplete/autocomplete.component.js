/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbOptionComponent } from '../option/option.component';
import { NbPortalDirective } from '../cdk/overlay/mapping';
// Component class scoped counter for aria attributes.
let lastAutocompleteId = 0;
/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
export class NbAutocompleteComponent {
    constructor(cd) {
        this.cd = cd;
        this.destroy$ = new Subject();
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-autocomplete-${lastAutocompleteId++}`;
        /**
         * @docs-private
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction.
         */
        this._overlayPosition = '';
        /**
         * Autocomplete size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Flag passed as input to always make first option active.
         * */
        this.activeFirst = false;
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
    }
    get overlayPosition() {
        return this._overlayPosition;
    }
    set overlayPosition(value) {
        this._overlayPosition = value;
        // Need run change detection after first set from NbAutocompleteDirective
        this.cd.detectChanges();
    }
    /**
     * Returns width of the input.
     * */
    get hostWidth() {
        return this.hostRef.nativeElement.getBoundingClientRect().width;
    }
    ngAfterContentInit() {
        this.options.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.selectedChange.emit(selected);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
}
NbAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-autocomplete',
                template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"hostWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"]
            },] }
];
NbAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NbAutocompleteComponent.propDecorators = {
    handleDisplayFn: [{ type: Input }],
    size: [{ type: Input }],
    activeFirst: [{ type: Input }],
    optionsListClass: [{ type: Input }],
    optionsPanelClass: [{ type: Input }],
    selectedChange: [{ type: Output }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }],
    portal: [{ type: ViewChild, args: [NbPortalDirective,] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }]
};
//# sourceMappingURL=autocomplete.component.js.map