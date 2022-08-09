import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Inject, Input, Optional, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_DOCUMENT } from '../../theme.options';
import { NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarWithTimeComponent } from './calendar-with-time.component';
import { NbBasePickerComponent } from './datepicker.component';
import { NB_DATE_SERVICE_OPTIONS } from './datepicker.directive';
export class NbDateTimePickerComponent extends NbBasePickerComponent {
    constructor(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions, calendarWithTimeModelService) {
        super(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions);
        this.calendarWithTimeModelService = calendarWithTimeModelService;
        this.pickerClass = NbCalendarWithTimeComponent;
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
            this.picker.cd.markForCheck();
        }
    }
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.format = this.format || this.buildTimeFormat();
    }
    patchWithInputs() {
        this.picker.singleColumn = this.singleColumn;
        this.picker.twelveHoursFormat = this.twelveHoursFormat;
        this.picker.withSeconds = this.withSeconds;
        this.picker.step = this.step;
        this.picker.title = this.title;
        this.picker.applyButtonText = this.applyButtonText;
        this.picker.currentTimeButtonText = this.currentTimeButtonText;
        if (this.twelveHoursFormat) {
            this.picker.timeFormat = this.dateService.getTwelveHoursFormat();
        }
        else {
            this.picker.timeFormat = this.withSeconds ? this.dateService.getTwentyFourHoursFormatWithSeconds() :
                this.dateService.getTwentyFourHoursFormat();
        }
        super.patchWithInputs();
        this.picker.cd.markForCheck();
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
    buildTimeFormat() {
        if (this.singleColumn) {
            return this.calendarWithTimeModelService.buildDateFormat(this.twelveHoursFormat);
        }
        else {
            return this.calendarWithTimeModelService.buildDateFormat(this.twelveHoursFormat, this.withSeconds);
        }
    }
}
NbDateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-date-timepicker',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbDateTimePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NbDateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_DATE_SERVICE_OPTIONS,] }] },
    { type: NbCalendarTimeModelService }
];
NbDateTimePickerComponent.propDecorators = {
    step: [{ type: Input }],
    title: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }]
};
//# sourceMappingURL=date-timepicker.component.js.map