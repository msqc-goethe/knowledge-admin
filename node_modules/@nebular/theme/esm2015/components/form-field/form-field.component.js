/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, ContentChildren, NgZone, ElementRef, Renderer2, HostBinding, } from '@angular/core';
import { merge, Subject, combineLatest, ReplaySubject } from 'rxjs';
import { takeUntil, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
import { NbFormFieldControl, NbFormFieldControlConfig } from './form-field-control';
function throwFormControlElementNotFound() {
    throw new Error(`NbFormFieldComponent must contain [nbInput]`);
}
/*
 * NbFormFieldComponent
 *
 * @styles
 *
 * form-field-addon-basic-text-color:
 * form-field-addon-basic-highlight-text-color:
 * form-field-addon-primary-text-color:
 * form-field-addon-primary-highlight-text-color:
 * form-field-addon-success-text-color:
 * form-field-addon-success-highlight-text-color:
 * form-field-addon-info-text-color:
 * form-field-addon-info-highlight-text-color:
 * form-field-addon-warning-text-color:
 * form-field-addon-warning-highlight-text-color:
 * form-field-addon-danger-text-color:
 * form-field-addon-danger-highlight-text-color:
 * form-field-addon-control-text-color:
 * form-field-addon-control-highlight-text-color:
 * form-field-addon-disabled-text-color:
 * form-field-addon-tiny-height:
 * form-field-addon-tiny-width:
 * form-field-addon-tiny-icon-size:
 * form-field-addon-tiny-font-size:
 * form-field-addon-tiny-line-height:
 * form-field-addon-tiny-font-weight:
 * form-field-addon-small-height:
 * form-field-addon-small-width:
 * form-field-addon-small-icon-size:
 * form-field-addon-small-font-size:
 * form-field-addon-small-line-height:
 * form-field-addon-small-font-weight:
 * form-field-addon-medium-height:
 * form-field-addon-medium-width:
 * form-field-addon-medium-icon-size:
 * form-field-addon-medium-font-size:
 * form-field-addon-medium-line-height:
 * form-field-addon-medium-font-weight:
 * form-field-addon-large-height:
 * form-field-addon-large-width:
 * form-field-addon-large-icon-size:
 * form-field-addon-large-font-size:
 * form-field-addon-large-line-height:
 * form-field-addon-large-font-weight:
 * form-field-addon-giant-height:
 * form-field-addon-giant-width:
 * form-field-addon-giant-icon-size:
 * form-field-addon-giant-font-size:
 * form-field-addon-giant-line-height:
 * form-field-addon-giant-font-weight:
 **/
export class NbFormFieldComponent {
    constructor(cd, zone, elementRef, renderer) {
        this.cd = cd;
        this.zone = zone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.formControlState$ = new ReplaySubject(1);
        this.prefixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('prefix', s)));
        this.suffixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('suffix', s)));
    }
    ngAfterContentChecked() {
        if (!this.formControl) {
            throwFormControlElementNotFound();
        }
    }
    ngAfterContentInit() {
        this.subscribeToFormControlStateChange();
        this.subscribeToAddonChange();
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    shouldShowPrefix() {
        return this.getFormControlConfig().supportsPrefix && !!this.prefix.length;
    }
    shouldShowSuffix() {
        return this.getFormControlConfig().supportsSuffix && !!this.suffix.length;
    }
    subscribeToFormControlStateChange() {
        const { disabled$, focused$, size$, status$, fullWidth$ } = this.formControl;
        combineLatest([disabled$, focused$, size$, status$, fullWidth$])
            .pipe(map(([disabled, focused, size, status, fullWidth]) => ({ disabled, focused, size, status, fullWidth })), distinctUntilChanged((oldState, state) => this.isStatesEqual(oldState, state)), tap(({ size, fullWidth }) => {
            const formFieldClasses = [`nb-form-field-size-${size}`];
            if (!fullWidth) {
                formFieldClasses.push('nb-form-field-limited-width');
            }
            this.formFieldClasses = formFieldClasses.join(' ');
        }), takeUntil(this.destroy$))
            .subscribe(this.formControlState$);
    }
    subscribeToAddonChange() {
        merge(this.prefix.changes, this.suffix.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    getAddonClasses(addon, state) {
        const classes = [
            'nb-form-field-addon',
            `nb-form-field-${addon}-${state.size}`,
        ];
        if (state.disabled) {
            classes.push(`nb-form-field-addon-disabled`);
        }
        else if (state.focused) {
            classes.push(`nb-form-field-addon-${state.status}-highlight`);
        }
        else {
            classes.push(`nb-form-field-addon-${state.status}`);
        }
        return classes;
    }
    getFormControlConfig() {
        return this.formControlConfig || new NbFormFieldControlConfig();
    }
    isStatesEqual(oldState, state) {
        return oldState.status === state.status &&
            oldState.disabled === state.disabled &&
            oldState.focused === state.focused &&
            oldState.fullWidth === state.fullWidth &&
            oldState.size === state.size;
    }
}
NbFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-form-field',
                template: "<div *ngIf=\"shouldShowPrefix()\" [ngClass]=\"prefixClasses$ | async\">\n  <ng-content select=\"[nbPrefix]\"></ng-content>\n</div>\n\n<div class=\"nb-form-control-container\"\n     [class.nb-form-field-control-with-prefix]=\"shouldShowPrefix()\"\n     [class.nb-form-field-control-with-suffix]=\"shouldShowSuffix()\">\n  <ng-content></ng-content>\n</div>\n\n<div *ngIf=\"shouldShowSuffix()\" [ngClass]=\"suffixClasses$ | async\">\n  <ng-content select=\"[nbSuffix]\"></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;align-items:center}.nb-form-control-container{width:100%}\n"]
            },] }
];
NbFormFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
NbFormFieldComponent.propDecorators = {
    prefix: [{ type: ContentChildren, args: [NbPrefixDirective, { descendants: true },] }],
    suffix: [{ type: ContentChildren, args: [NbSuffixDirective, { descendants: true },] }],
    formControl: [{ type: ContentChild, args: [NbFormFieldControl, { static: false },] }],
    formControlConfig: [{ type: ContentChild, args: [NbFormFieldControlConfig, { static: false },] }],
    formFieldClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=form-field.component.js.map