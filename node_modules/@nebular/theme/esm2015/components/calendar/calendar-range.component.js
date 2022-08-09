/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarRangeDayCellComponent } from './calendar-range-day-cell.component';
import { NbCalendarRangeYearCellComponent } from './calendar-range-year-cell.component';
import { NbCalendarRangeMonthCellComponent } from './calendar-range-month-cell.component';
import { convertToBoolProperty } from '../helpers';
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
export class NbCalendarRangeComponent {
    constructor(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for the calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        this.dayCellComponent = NbCalendarRangeDayCellComponent;
        this.monthCellComponent = NbCalendarRangeMonthCellComponent;
        this.yearCellComponent = NbCalendarRangeYearCellComponent;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        this.rangeChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.dayCellComponent = cellComponent;
        }
    }
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _monthCellComponent(cellComponent) {
        if (cellComponent) {
            this.monthCellComponent = cellComponent;
        }
    }
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _yearCellComponent(cellComponent) {
        if (cellComponent) {
            this.yearCellComponent = cellComponent;
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
    onChange(date) {
        this.initDateIfNull();
        this.handleSelected(date);
    }
    initDateIfNull() {
        if (!this.range) {
            this.range = { start: null, end: null };
        }
    }
    handleSelected(date) {
        if (this.selectionStarted()) {
            this.selectEnd(date);
        }
        else {
            this.selectStart(date);
        }
    }
    selectionStarted() {
        const { start, end } = this.range;
        return start && !end;
    }
    selectStart(start) {
        this.selectRange({ start });
    }
    selectEnd(date) {
        const { start } = this.range;
        if (this.dateService.compareDates(date, start) > 0) {
            this.selectRange({ start, end: date });
        }
        else {
            this.selectRange({ start: date, end: start });
        }
    }
    selectRange(range) {
        this.range = range;
        this.rangeChange.emit(range);
    }
}
NbCalendarRangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range',
                template: `
    <nb-base-calendar
      [date]="range"
      (dateChange)="onChange($any($event))"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [startView]="startView"
      [boundingMonth]="boundingMonth"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [size]="size"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
    ></nb-base-calendar>
  `
            },] }
];
NbCalendarRangeComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeComponent.propDecorators = {
    boundingMonth: [{ type: Input }],
    startView: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    _cellComponent: [{ type: Input, args: ['dayCellComponent',] }],
    _monthCellComponent: [{ type: Input, args: ['monthCellComponent',] }],
    monthCellComponent: [{ type: Input }],
    _yearCellComponent: [{ type: Input, args: ['yearCellComponent',] }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    showNavigation: [{ type: Input }],
    range: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    rangeChange: [{ type: Output }]
};
//# sourceMappingURL=calendar-range.component.js.map