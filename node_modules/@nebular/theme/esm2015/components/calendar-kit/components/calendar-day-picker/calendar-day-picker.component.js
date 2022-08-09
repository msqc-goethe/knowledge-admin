/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NbCalendarMonthModelService } from '../../services/calendar-month-model.service';
import { NbCalendarDayCellComponent } from './calendar-day-cell.component';
import { NbCalendarSize } from '../../model';
import { convertToBoolProperty } from '../../../helpers';
/**
 * Provides capability pick days.
 * */
export class NbCalendarDayPickerComponent {
    constructor(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        this._showWeekNumber = false;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set setCellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
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
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges({ visibleDate, boundingMonths }) {
        if (visibleDate || boundingMonths) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    }
    onSelect(day) {
        this.dateChange.emit(day);
    }
}
NbCalendarDayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-day-picker',
                template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex}.days-container{width:100%}\n"]
            },] }
];
NbCalendarDayPickerComponent.ctorParameters = () => [
    { type: NbCalendarMonthModelService }
];
NbCalendarDayPickerComponent.propDecorators = {
    visibleDate: [{ type: Input }],
    boundingMonths: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    setCellComponent: [{ type: Input, args: ['cellComponent',] }],
    size: [{ type: Input }],
    date: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    dateChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-day-picker.component.js.map