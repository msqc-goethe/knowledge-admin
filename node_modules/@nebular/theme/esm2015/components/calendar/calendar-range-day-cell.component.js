/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener, } from '@angular/core';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
export class NbCalendarRangeDayCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.rangeCellClass = true;
        this.dayCellClass = true;
    }
    get inRange() {
        if (this.date && this.hasRange) {
            return this.isInRange(this.date, this.selectedValue);
        }
        return false;
    }
    get start() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.start);
    }
    get end() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.end);
    }
    get today() {
        return this.date && this.dateService.isSameDay(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameDaySafe(this.date, this.selectedValue.start);
        }
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
    isInRange(date, { start, end }) {
        const isGreaterThanStart = this.dateService.compareDates(this.date, start) >= 0;
        const isLessThanEnd = this.dateService.compareDates(this.date, end) <= 0;
        return isGreaterThanStart && isLessThanEnd;
    }
}
NbCalendarRangeDayCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-day-cell',
                template: `
    <div class="cell-content">{{ day }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeDayCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeDayCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    start: [{ type: HostBinding, args: ['class.start',] }],
    end: [{ type: HostBinding, args: ['class.end',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    dayCellClass: [{ type: HostBinding, args: ['class.day-cell',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    boundingMonth: [{ type: HostBinding, args: ['class.bounding-month',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    empty: [{ type: HostBinding, args: ['class.empty',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-range-day-cell.component.js.map