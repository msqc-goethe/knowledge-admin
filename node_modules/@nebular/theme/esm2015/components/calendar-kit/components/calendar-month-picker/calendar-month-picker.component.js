/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { batch } from '../../helpers';
import { NbCalendarSize } from '../../model';
import { NbCalendarMonthCellComponent } from './calendar-month-cell.component';
import { NbDateService } from '../../services/date.service';
export const MONTHS_IN_VIEW = 12;
export const MONTHS_IN_COLUMN = 4;
export class NbCalendarMonthPickerComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.monthChange = new EventEmitter();
        this.cellComponent = NbCalendarMonthCellComponent;
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.month) {
            this.initMonths();
        }
    }
    initMonths() {
        const date = this.dateService.getDate(this.month);
        const year = this.dateService.getYear(this.month);
        const firstMonth = this.dateService.createDate(year, 0, date);
        const months = [firstMonth];
        for (let monthIndex = 1; monthIndex < MONTHS_IN_VIEW; monthIndex++) {
            months.push(this.dateService.addMonth(firstMonth, monthIndex));
        }
        this.months = batch(months, MONTHS_IN_COLUMN);
    }
    onSelect(month) {
        this.monthChange.emit(month);
    }
}
NbCalendarMonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-month-picker',
                template: `
    <nb-calendar-picker
      [data]="months"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="month"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarMonthPickerComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarMonthPickerComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    month: [{ type: Input }],
    date: [{ type: Input }],
    monthChange: [{ type: Output }],
    _cellComponent: [{ type: Input, args: ['cellComponent',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-month-picker.component.js.map