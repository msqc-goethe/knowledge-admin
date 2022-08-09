/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, ElementRef, forwardRef, Inject, InjectionToken, Input, ChangeDetectorRef, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { map, takeUntil, filter, take, tap } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../theme.options';
import { NbDateService } from '../calendar-kit/services/date.service';
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
export class NbDatepickerAdapter {
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
export class NbDatepicker {
}
export const NB_DATE_ADAPTER = new InjectionToken('Datepicker Adapter');
export const NB_DATE_SERVICE_OPTIONS = new InjectionToken('Date service options');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule,
 *   ],
 * })
 *
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 * And `filter` predicate that receives date object and has to return a boolean value.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * If you need to pick a time along with the date, you can use nb-date-timepicker
 *
 * ```html
 * <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker">
 * <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
 * ```
 * @stacked-example(Date timepicker, datepicker/date-timepicker-showcase.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 *
 * @stacked-example(Date timepicker single column, datepicker/date-timepicker-single-column.component)

 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 * <span id="formatting-issue"></span>
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * ### NbDateFnsDateModule
 *
 * Format is required when using `NbDateFnsDateModule`. You can set it via `format` input on datepicker component:
 * ```html
 * <nb-datepicker format="dd.MM.yyyy"></nb-datepicker>
 * ```
 * Also format can be set globally with `NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' })` and
 * `NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' })` methods.
 *
 * Please note to use some of the formatting tokens you also need to pass
 * `{ useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }` to date-fns parse and format functions.
 * You can configure options passed this functions by setting `formatOptions` and
 * `parseOptions` of options object passed to `NbDateFnsDateModule.forRoot` and `NbDateFnsDateModule.forChild` methods.
 * ```ts
 * NbDateFnsDateModule.forRoot({
 *   parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 *   formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 * })
 * ```
 * Further info on `date-fns` formatting tokens could be found at
 * [date-fns docs](https://date-fns.org/v2.0.0-alpha.27/docs/Unicode-Tokens).
 *
 * You can also use `parseOptions` and `formatOptions` to provide locale.
 * ```ts
 * import { eo } from 'date-fns/locale';
 *
 * @NgModule({
 *   imports: [
 *     NbDateFnsDateModule.forRoot({
 *       parseOptions: { locale: eo },
 *       formatOptions: { locale: eo },
 *     }),
 *   ],
 * })
 * ```
 *
 * @styles
 *
 * datepicker-background-color:
 * datepicker-border-color:
 * datepicker-border-style:
 * datepicker-border-width:
 * datepicker-border-radius:
 * datepicker-shadow:
 * */
export class NbDatepickerDirective {
    constructor(document, datepickerAdapters, hostRef, dateService, changeDetector) {
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.isDatepickerReady = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = Validators.compose([
            this.parseValidator,
            this.minValidator,
            this.maxValidator,
            this.filterValidator,
        ].map(fn => fn.bind(this)));
        this.subscribeOnInputChange();
    }
    /**
     * Provides datepicker component.
     * */
    set setPicker(picker) {
        this.picker = picker;
        this.setupPicker();
    }
    /**
     * Returns html input element.
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Returns host input value.
     * */
    get inputValue() {
        return this.input.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value) {
        if (this.isDatepickerReady) {
            this.writePicker(value);
            this.writeInput(value);
        }
        else {
            this.queue = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.input.disabled = isDisabled;
    }
    /**
     * Form control validation based on picker validator config.
     * */
    validate() {
        return this.validator(null);
    }
    /**
     * Hides picker, focuses the input
     */
    hidePicker() {
        this.input.focus();
        this.picker.hide();
    }
    /**
     * Validates that we can parse value correctly.
     * */
    parseValidator() {
        /**
         * Date services treat empty string as invalid date.
         * That's why we're getting invalid formControl in case of empty input which is not required.
         * */
        if (this.inputValue === '') {
            return null;
        }
        const isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    }
    /**
     * Validates passed value is greater than min.
     * */
    minValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.min || !date || this.dateService.compareDates(config.min, date) <= 0) ?
            null : { nbDatepickerMin: { min: config.min, actual: date } };
    }
    /**
     * Validates passed value is smaller than max.
     * */
    maxValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.max || !date || this.dateService.compareDates(config.max, date) >= 0) ?
            null : { nbDatepickerMax: { max: config.max, actual: date } };
    }
    /**
     * Validates passed value satisfy the filter.
     * */
    filterValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.filter || !date || config.filter(date)) ?
            null : { nbDatepickerFilter: true };
    }
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    chooseDatepickerAdapter() {
        this.datepickerAdapter = this.datepickerAdapters.find(({ picker }) => this.picker instanceof picker);
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    }
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    setupPicker() {
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.inputValue) {
            this.picker.value = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        }
        // In case datepicker component placed after the input with datepicker directive,
        // we can't read `this.picker.format` on first change detection run,
        // since it's not bound yet, so we have to wait for datepicker component initialization.
        if (!this.isDatepickerReady) {
            this.picker.init
                .pipe(take(1), tap(() => this.isDatepickerReady = true), filter(() => !!this.queue), takeUntil(this.destroy$))
                .subscribe(() => {
                this.writeValue(this.queue);
                this.onChange(this.queue);
                this.changeDetector.detectChanges();
                this.queue = undefined;
            });
        }
        this.picker.valueChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => {
            this.writePicker(value);
            this.writeInput(value);
            this.onChange(value);
            if (this.picker.shouldHide()) {
                this.hidePicker();
            }
        });
        merge(this.picker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.picker.isShown && this.document.activeElement !== this.input))).pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    writePicker(value) {
        this.picker.value = value;
    }
    writeInput(value) {
        const stringRepresentation = this.datepickerAdapter.format(value, this.picker.format);
        this.hostRef.nativeElement.value = stringRepresentation;
    }
    /**
     * Validates if no datepicker adapter provided.
     * */
    noDatepickerAdapterProvided() {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    /**
     * Parses input value and write if it isn't null.
     * */
    handleInputChange(value) {
        const date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    }
    parseInputValue(value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    }
}
NbDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbDatepicker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbDatepickerDirective),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => NbDatepickerDirective),
                        multi: true,
                    },
                ],
            },] }
];
NbDatepickerDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_DATE_ADAPTER,] }] },
    { type: ElementRef },
    { type: NbDateService },
    { type: ChangeDetectorRef }
];
NbDatepickerDirective.propDecorators = {
    setPicker: [{ type: Input, args: ['nbDatepicker',] }]
};
//# sourceMappingURL=datepicker.directive.js.map