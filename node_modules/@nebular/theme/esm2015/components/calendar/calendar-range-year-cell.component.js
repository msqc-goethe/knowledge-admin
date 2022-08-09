/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener, } from '@angular/core';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbBaseCalendarRangeCell } from './base-calendar-range-cell';
export class NbCalendarRangeYearCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
        this.rangeCellClass = true;
    }
    get inRange() {
        return this.hasRange && this.isInRange(this.date, this.selectedValue);
    }
    get rangeStart() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.start);
    }
    get rangeEnd() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.end);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameYearSafe(this.date, this.selectedValue.start);
        }
    }
    get today() {
        return this.dateService.isSameYear(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
    isInRange(date, { start, end }) {
        if (start && end) {
            const cellYear = this.dateService.getYear(date);
            const startYear = this.dateService.getYear(start);
            const endYear = this.dateService.getYear(end);
            return cellYear >= startYear && cellYear <= endYear;
        }
        return this.dateService.isSameYear(date, start);
    }
}
NbCalendarRangeYearCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-year-cell',
                template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeYearCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeYearCellComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    selectedValue: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    rangeStart: [{ type: HostBinding, args: ['class.start',] }],
    rangeEnd: [{ type: HostBinding, args: ['class.end',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    yearCellClass: [{ type: HostBinding, args: ['class.year-cell',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-range-year-cell.component.js.map