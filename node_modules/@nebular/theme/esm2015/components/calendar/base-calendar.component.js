/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NbCalendarYearModelService } from '../calendar-kit/services/calendar-year-model.service';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { convertToBoolProperty } from '../helpers';
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
export class NbBaseCalendarComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines active view for calendar.
         * */
        this.activeViewMode = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines whether we should show calendar navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Emits date when selected.
         * */
        this.dateChange = new EventEmitter();
        this.ViewMode = NbCalendarViewMode;
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
        if (!this.visibleDate) {
            this.visibleDate = this.dateService.today();
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    setViewMode(viewMode) {
        this.activeViewMode = viewMode;
    }
    setVisibleDate(visibleDate) {
        this.visibleDate = visibleDate;
    }
    prevMonth() {
        this.changeVisibleMonth(-1);
    }
    nextMonth() {
        this.changeVisibleMonth(1);
    }
    prevYear() {
        this.changeVisibleYear(-1);
    }
    nextYear() {
        this.changeVisibleYear(1);
    }
    prevYears() {
        this.changeVisibleYears(-1);
    }
    nextYears() {
        this.changeVisibleYears(1);
    }
    navigatePrev() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.prevMonth();
            case NbCalendarViewMode.MONTH:
                return this.prevYear();
            case NbCalendarViewMode.YEAR:
                return this.prevYears();
        }
    }
    navigateNext() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.nextMonth();
            case NbCalendarViewMode.MONTH:
                return this.nextYear();
            case NbCalendarViewMode.YEAR:
                return this.nextYears();
        }
    }
    onChangeViewMode() {
        if (this.activeViewMode === NbCalendarViewMode.DATE) {
            return this.setViewMode(NbCalendarViewMode.YEAR);
        }
        this.setViewMode(NbCalendarViewMode.DATE);
    }
    changeVisibleMonth(direction) {
        this.visibleDate = this.dateService.addMonth(this.visibleDate, direction);
    }
    changeVisibleYear(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction);
    }
    changeVisibleYears(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction * this.yearModelService.getYearsInView());
    }
}
NbBaseCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-base-calendar',
                template: "<nb-card>\n  <nb-card-header *ngIf=\"showNavigation\" class=\"calendar-navigation\">\n    <nb-calendar-view-mode [date]=\"visibleDate\"\n                           [viewMode]=\"activeViewMode\"\n                           (changeMode)=\"onChangeViewMode()\">\n    </nb-calendar-view-mode>\n\n    <nb-calendar-pageable-navigation (prev)=\"navigatePrev()\" (next)=\"navigateNext()\">\n    </nb-calendar-pageable-navigation>\n  </nb-card-header>\n\n  <nb-card-body [ngSwitch]=\"activeViewMode\">\n\n    <nb-calendar-day-picker *ngSwitchCase=\"ViewMode.DATE\"\n                            [boundingMonths]=\"boundingMonth\"\n                            [cellComponent]=\"dayCellComponent\"\n                            [min]=\"min\"\n                            [max]=\"max\"\n                            [filter]=\"filter\"\n                            [visibleDate]=\"visibleDate\"\n                            [size]=\"size\"\n                            [date]=\"date\"\n                            [showWeekNumber]=\"showWeekNumber\"\n                            (dateChange)=\"dateChange.emit($any($event))\"\n                            [weekNumberSymbol]=\"weekNumberSymbol\">\n    </nb-calendar-day-picker>\n\n    <nb-calendar-year-picker *ngSwitchCase=\"ViewMode.YEAR\"\n                             [cellComponent]=\"yearCellComponent\"\n                             [date]=\"$any(date)\"\n                             [min]=\"min\"\n                             [max]=\"max\"\n                             [filter]=\"filter\"\n                             [size]=\"size\"\n                             [year]=\"visibleDate\"\n                             (yearChange)=\"setVisibleDate($event); setViewMode(ViewMode.MONTH)\">\n    </nb-calendar-year-picker>\n\n    <nb-calendar-month-picker *ngSwitchCase=\"ViewMode.MONTH\"\n                              [cellComponent]=\"monthCellComponent\"\n                              [min]=\"min\"\n                              [max]=\"max\"\n                              [filter]=\"filter\"\n                              [size]=\"size\"\n                              [month]=\"visibleDate\"\n                              [date]=\"$any(date)\"\n                              (monthChange)=\"setVisibleDate($event); setViewMode(ViewMode.DATE)\">\n    </nb-calendar-month-picker>\n\n  </nb-card-body>\n\n</nb-card>\n"
            },] }
];
NbBaseCalendarComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbBaseCalendarComponent.propDecorators = {
    boundingMonth: [{ type: Input }],
    activeViewMode: [{ type: Input, args: ['startView',] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    dayCellComponent: [{ type: Input }],
    monthCellComponent: [{ type: Input }],
    yearCellComponent: [{ type: Input }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    showNavigation: [{ type: Input }, { type: HostBinding, args: ['class.has-navigation',] }],
    date: [{ type: Input }],
    showWeekNumber: [{ type: Input }, { type: HostBinding, args: ['class.has-week-number',] }],
    weekNumberSymbol: [{ type: Input }],
    dateChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=base-calendar.component.js.map