/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';
import { NbDatepickerAdapter } from './datepicker.directive';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbDateTimePickerComponent } from './date-timepicker.component';
export class NbDateAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDatepickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateAdapterService.decorators = [
    { type: Injectable }
];
NbDateAdapterService.ctorParameters = () => [
    { type: NbDateService }
];
export class NbRangeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbRangepickerComponent;
    }
    parse(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format),
        };
    }
    format(range, format) {
        if (!range) {
            return '';
        }
        const start = this.dateService.format(range.start, format);
        const isStartValid = this.dateService.isValidDateString(start, format);
        if (!isStartValid) {
            return '';
        }
        const end = this.dateService.format(range.end, format);
        const isEndValid = this.dateService.isValidDateString(end, format);
        if (isEndValid) {
            return `${start} - ${end}`;
        }
        else {
            return start;
        }
    }
    isValid(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    }
}
NbRangeAdapterService.decorators = [
    { type: Injectable }
];
NbRangeAdapterService.ctorParameters = () => [
    { type: NbDateService }
];
export class NbDateTimeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDateTimePickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateTimeAdapterService.decorators = [
    { type: Injectable }
];
NbDateTimeAdapterService.ctorParameters = () => [
    { type: NbDateService }
];
//# sourceMappingURL=datepicker-adapter.js.map