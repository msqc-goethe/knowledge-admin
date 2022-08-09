/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
export class NbCalendarRangeMonthCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.monthCellClass = true;
        this.rangeCellClass = true;
    }
    get month() {
        return this.dateService.getMonthName(this.date);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue.start);
        }
    }
    get inRange() {
        if (this.hasRange) {
            return this.isInRage(this.date, this.selectedValue);
        }
    }
    get rangeStart() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.start);
        }
    }
    get rangeEnd() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.end);
        }
    }
    get today() {
        return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    }
    monthStart() {
        return this.dateService.getMonthStart(this.date);
    }
    monthEnd() {
        return this.dateService.getMonthEnd(this.date);
    }
    isInRage(date, range) {
        if (range.start && range.end) {
            const cellDate = this.dateService.getMonthStart(date);
            const start = this.dateService.getMonthStart(range.start);
            const end = this.dateService.getMonthStart(range.end);
            const isGreaterThanStart = this.dateService.compareDates(cellDate, start) >= 0;
            const isLessThanEnd = this.dateService.compareDates(cellDate, end) <= 0;
            return isGreaterThanStart && isLessThanEnd;
        }
        return this.dateService.isSameMonth(date, range.start);
    }
}
NbCalendarRangeMonthCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-month-cell',
                template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeMonthCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeMonthCellComponent.propDecorators = {
    date: [{ type: Input }],
    visibleDate: [{ type: Input }],
    selectedValue: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    monthCellClass: [{ type: HostBinding, args: ['class.month-cell',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    rangeStart: [{ type: HostBinding, args: ['class.start',] }],
    rangeEnd: [{ type: HostBinding, args: ['class.end',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-range-month-cell.component.js.map