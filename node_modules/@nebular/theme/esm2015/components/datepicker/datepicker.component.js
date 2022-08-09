/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ComponentFactoryResolver, Inject, Input, Output, Optional, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { NbAdjustment, NbPosition, NbPositionBuilderService, } from '../cdk/overlay/overlay-position';
import { NbOverlayService, patch } from '../cdk/overlay/overlay-service';
import { NbTrigger, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NB_DOCUMENT } from '../../theme.options';
import { NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NB_DATE_SERVICE_OPTIONS, NbDatepicker } from './datepicker.directive';
import { convertToBoolProperty } from '../helpers';
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
export class NbBasePicker extends NbDatepicker {
    constructor(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions) {
        super();
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.cfr = cfr;
        this.dateService = dateService;
        this.dateServiceOptions = dateServiceOptions;
        this.init$ = new ReplaySubject();
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        this.onChange$ = new Subject();
        this.overlayOffset = 8;
        this.destroy$ = new Subject();
        this.blur$ = new Subject();
    }
    /**
     * Returns picker instance.
     * */
    get picker() {
        return this.pickerRef && this.pickerRef.instance;
    }
    /**
     * Stream of picker value changes.
     * */
    get valueChange() {
        return this.onChange$.asObservable();
    }
    get isShown() {
        return this.ref && this.ref.hasAttached();
    }
    get init() {
        return this.init$.asObservable();
    }
    /**
     * Emits when datepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    attach(hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    }
    getValidatorConfig() {
        return { min: this.min, max: this.max, filter: this.filter };
    }
    show() {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    }
    shouldHide() {
        return this.hideOnSelect && !!this.value;
    }
    hide() {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    }
    createOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    }
    openDatepicker() {
        this.container = this.ref.attach(new NbComponentPortal(NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
        this.pickerRef.changeDetectorRef.markForCheck();
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.COUNTERCLOCKWISE);
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => patch(this.container, { position }));
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.container)
            .build();
    }
    subscribeOnTriggers() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.triggerStrategy.show$.subscribe(() => this.show());
        this.triggerStrategy.hide$.subscribe(() => {
            this.blur$.next();
            this.hide();
        });
    }
    instantiatePicker() {
        this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
    }
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    subscribeOnValueChange() {
        this.pickerValueChange.subscribe(date => {
            this.onChange$.next(date);
        });
    }
    patchWithInputs() {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker._monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.showNavigation = this.showNavigation;
        this.picker.visibleDate = this.visibleDate;
        this.picker.showWeekNumber = this.showWeekNumber;
        this.picker.weekNumberSymbol = this.weekNumberSymbol;
    }
    checkFormat() {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error('Can\'t format native date. To use custom formatting you have to install @nebular/moment or ' +
                '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' +
                'More information at "Formatting issue" ' +
                'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
        const isFormatSet = this.format || (this.dateServiceOptions && this.dateServiceOptions.format);
        if (this.dateService.getId() === 'date-fns' && !isFormatSet) {
            throw new Error('format is required when using NbDateFnsDateModule');
        }
    }
}
export class NbBasePickerComponent extends NbBasePicker {
    constructor(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions) {
        super(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions);
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        this.hideOnSelect = true;
        /**
         * Determines should we show calendars navigation or not.
         * @type {boolean}
         */
        this.showNavigation = true;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        this._showWeekNumber = false;
        /**
         * Determines picker overlay offset (in pixels).
         * */
        this.overlayOffset = 8;
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.checkFormat();
    }
    ngOnChanges(changes) {
        if (changes.format && !changes.format.isFirstChange()) {
            this.checkFormat();
        }
    }
    ngAfterViewInit() {
        this.init$.next();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.init$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    get pickerValueChange() {
        return;
    }
    get value() {
        return undefined;
    }
    set value(value) { }
    writeQueue() {
    }
}
NbBasePickerComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
NbBasePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NbDateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_DATE_SERVICE_OPTIONS,] }] }
];
NbBasePickerComponent.propDecorators = {
    format: [{ type: Input }],
    boundingMonth: [{ type: Input }],
    startView: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    dayCellComponent: [{ type: Input }],
    monthCellComponent: [{ type: Input }],
    yearCellComponent: [{ type: Input }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    hideOnSelect: [{ type: Input }],
    showNavigation: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    overlayOffset: [{ type: Input }]
};
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
export class NbDatepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarComponent;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this.value = date;
    }
    /**
     * Emits date when selected.
     * */
    get dateChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.date : undefined;
    }
    set value(date) {
        if (!this.picker) {
            this.queue = date;
            return;
        }
        if (date) {
            this.visibleDate = date;
            this.picker.visibleDate = date;
            this.picker.date = date;
        }
    }
    get pickerValueChange() {
        return this.picker.dateChange;
    }
    writeQueue() {
        if (this.queue) {
            const date = this.queue;
            this.queue = null;
            this.value = date;
        }
    }
}
NbDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-datepicker',
                template: ''
            },] }
];
NbDatepickerComponent.propDecorators = {
    date: [{ type: Input }],
    dateChange: [{ type: Output }]
};
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
export class NbRangepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarRangeComponent;
    }
    /**
     * Range which will be rendered as selected.
     * */
    set range(range) {
        this.value = range;
    }
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    get rangeChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.range : undefined;
    }
    set value(range) {
        if (!this.picker) {
            this.queue = range;
            return;
        }
        if (range) {
            const visibleDate = range && range.start;
            this.visibleDate = visibleDate;
            this.picker.visibleDate = visibleDate;
            this.picker.range = range;
        }
    }
    get pickerValueChange() {
        return this.picker.rangeChange;
    }
    shouldHide() {
        return super.shouldHide() && !!(this.value && this.value.start && this.value.end);
    }
    writeQueue() {
        if (this.queue) {
            const range = this.queue;
            this.queue = null;
            this.value = range;
        }
    }
}
NbRangepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-rangepicker',
                template: ''
            },] }
];
NbRangepickerComponent.propDecorators = {
    range: [{ type: Input }],
    rangeChange: [{ type: Output }]
};
//# sourceMappingURL=datepicker.component.js.map