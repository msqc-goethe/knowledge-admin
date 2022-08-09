/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, Output, PLATFORM_ID, Inject, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { from, fromEvent, merge, Subject } from 'rxjs';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NB_DOCUMENT } from '../../theme.options';
import { NbRadioComponent } from './radio.component';
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * Radio group supports `ngModel` and reactive forms:
 * @stacked-example(Radio Group with forms, radio/radio-form.component)
 *
 * */
export class NbRadioGroupComponent {
    constructor(hostElement, platformId, document) {
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.destroy$ = new Subject();
        this.onChange = (value) => { };
        this.onTouched = () => { };
        this._status = 'basic';
        this.valueChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateValues();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this.updateNames();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = convertToBoolProperty(disabled);
        this.updateDisabled();
    }
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status() {
        return this._status;
    }
    set status(value) {
        if (this._status !== value) {
            this._status = value;
            this.updateStatus();
        }
    }
    ngAfterContentInit() {
        // In case option 'name' isn't set on nb-radio component,
        // we need to set it's name right away, so it won't overlap with options
        // without names from other radio groups. Otherwise they all would have
        // same name and will be considered as options from one group so only the
        // last option will stay selected.
        this.updateNames();
        this.radios.changes
            .pipe(startWith(this.radios), 
        // 'changes' emit during change detection run and we can't update
        // option properties right of since they already was initialized.
        // Instead we schedule microtask to update radios after change detection
        // run is finished and trigger one more change detection run.
        switchMap((radios) => from(Promise.resolve(radios))), takeUntil(this.destroy$))
            .subscribe(() => this.updateAndSubscribeToRadios());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateAndSubscribeToRadios() {
        this.updateValueFromCheckedOption();
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.updateStatus();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    }
    updateNames() {
        if (this.radios) {
            this.radios.forEach((radio) => radio._setName(this.name));
        }
    }
    updateValues() {
        this.updateAndMarkForCheckRadios((radio) => radio.checked = radio.value === this.value);
    }
    updateDisabled() {
        if (typeof this.disabled !== 'undefined') {
            this.updateAndMarkForCheckRadios((radio) => radio.disabled = this.disabled);
        }
    }
    subscribeOnRadiosValueChange() {
        if (!this.radios || !this.radios.length) {
            return;
        }
        merge(...this.radios.map((radio) => radio.valueChange))
            .pipe(takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe((value) => {
            this.writeValue(value);
            this.propagateValue(value);
        });
    }
    propagateValue(value) {
        this.valueChange.emit(value);
        this.onChange(value);
    }
    subscribeOnRadiosBlur() {
        const hasNoRadios = !this.radios || !this.radios.length;
        if (!isPlatformBrowser(this.platformId) || hasNoRadios) {
            return;
        }
        const hostElement = this.hostElement.nativeElement;
        fromEvent(hostElement, 'focusin')
            .pipe(filter(event => hostElement.contains(event.target)), switchMap(() => merge(fromEvent(this.document, 'focusin'), fromEvent(this.document, 'click'))), filter(event => !hostElement.contains(event.target)), takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe(() => this.onTouched());
    }
    updateStatus() {
        this.updateAndMarkForCheckRadios((radio) => radio.status = this.status);
    }
    updateAndMarkForCheckRadios(updateFn) {
        if (this.radios) {
            this.radios.forEach((radio) => {
                updateFn(radio);
                radio._markForCheck();
            });
        }
    }
    updateValueFromCheckedOption() {
        const checkedRadio = this.radios.find((radio) => radio.checked);
        const isValueMissing = this.value === undefined || this.value === null;
        if (checkedRadio && isValueMissing && checkedRadio.value !== this.value) {
            this.value = checkedRadio.value;
        }
    }
}
NbRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-radio-group',
                template: `
    <ng-content select="nb-radio"></ng-content>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbRadioGroupComponent),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbRadioGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
NbRadioGroupComponent.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    radios: [{ type: ContentChildren, args: [NbRadioComponent, { descendants: true },] }],
    valueChange: [{ type: Output }]
};
//# sourceMappingURL=radio-group.component.js.map