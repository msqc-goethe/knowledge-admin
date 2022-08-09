/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbDateService } from './date.service';
import { batch, range } from '../helpers';
export class NbCalendarMonthModelService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    createDaysGrid(activeMonth, boundingMonth = true) {
        const weeks = this.createDates(activeMonth);
        return this.withBoundingMonths(weeks, activeMonth, boundingMonth);
    }
    createDates(activeMonth) {
        const days = this.createDateRangeForMonth(activeMonth);
        const startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
        return batch(days, this.dateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    }
    withBoundingMonths(weeks, activeMonth, boundingMonth) {
        let withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        return withBoundingMonths;
    }
    addPrevBoundingMonth(weeks, activeMonth, boundingMonth) {
        const firstWeek = weeks.shift();
        const requiredItems = this.dateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift(...this.createPrevBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [firstWeek, ...weeks];
    }
    addNextBoundingMonth(weeks, activeMonth, boundingMonth) {
        const lastWeek = weeks.pop();
        const requiredItems = this.dateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push(...this.createNextBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [...weeks, lastWeek];
    }
    createPrevBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, -1);
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month)
            .slice(daysInMonth - requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    createNextBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month)
            .slice(0, requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    getStartOfWeekDayDiff(date) {
        const startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth);
    }
    getWeekStartDiff(date) {
        return (7 - this.dateService.getFirstDayOfWeek() + this.dateService.getDayOfWeek(date)) % 7;
    }
    isShouldAddPrevBoundingMonth(weeks) {
        return weeks[0].length < this.dateService.DAYS_IN_WEEK;
    }
    isShouldAddNextBoundingMonth(weeks) {
        return weeks[weeks.length - 1].length < this.dateService.DAYS_IN_WEEK;
    }
    createDateRangeForMonth(date) {
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(date);
        return range(daysInMonth, i => {
            const year = this.dateService.getYear(date);
            const month = this.dateService.getMonth(date);
            return this.dateService.createDate(year, month, i + 1);
        });
    }
}
NbCalendarMonthModelService.decorators = [
    { type: Injectable }
];
NbCalendarMonthModelService.ctorParameters = () => [
    { type: NbDateService }
];
//# sourceMappingURL=calendar-month-model.service.js.map