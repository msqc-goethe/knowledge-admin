/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { range, batch } from '../helpers';
import { NbDateService } from './date.service';
export class NbCalendarYearModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.yearsInView = 12;
        this.yearsInRow = 4;
    }
    getYearsInView() {
        return this.yearsInView;
    }
    getYearsInRow() {
        return this.yearsInRow;
    }
    getViewYears(viewYear) {
        const year = this.dateService.getYear(viewYear);
        let viewStartYear;
        if (year >= 0) {
            viewStartYear = year - (year % this.yearsInView);
        }
        else {
            viewStartYear = year - (year % this.yearsInView + this.yearsInView);
        }
        const years = range(this.yearsInView).map(i => this.copyWithYear(viewStartYear + i, viewYear));
        return batch(years, this.yearsInRow);
    }
    copyWithYear(year, date) {
        return this.dateService.createDate(year, this.dateService.getMonth(date), this.dateService.getDate(date));
    }
}
NbCalendarYearModelService.decorators = [
    { type: Injectable }
];
NbCalendarYearModelService.ctorParameters = () => [
    { type: NbDateService }
];
//# sourceMappingURL=calendar-year-model.service.js.map