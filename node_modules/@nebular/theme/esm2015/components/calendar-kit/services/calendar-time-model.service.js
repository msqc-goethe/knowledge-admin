import { Injectable } from '@angular/core';
import { NbDateService } from './date.service';
export class NbCalendarTimeModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.MINUTES_AND_SECONDS = 60;
    }
    getHoursRange(step = this.MINUTES_AND_SECONDS) {
        let date = this.getResetTime();
        const endDate = this.dateService.addDay(date, 1);
        const result = [];
        while (this.dateService.compareDates(date, endDate) < 0) {
            result.push(date);
            date = this.dateService.addMinutes(date, step);
        }
        return result;
    }
    getResetTime() {
        let today = this.dateService.today();
        today = this.dateService.setHours(today, 0);
        today = this.dateService.setMinutes(today, 0);
        today = this.dateService.setSeconds(today, 0);
        today = this.dateService.setMilliseconds(today, 0);
        return today;
    }
    paddToTwoSymbols(n) {
        if (n < 10) {
            return '0' + n;
        }
        return n.toString();
    }
    buildDateFormat(twelveHoursFormat, withSeconds = false) {
        if (twelveHoursFormat) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwelveHoursFormat()}`;
        }
        if (withSeconds) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormatWithSeconds()}`;
        }
        return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormat()}`;
    }
}
NbCalendarTimeModelService.decorators = [
    { type: Injectable }
];
NbCalendarTimeModelService.ctorParameters = () => [
    { type: NbDateService }
];
//# sourceMappingURL=calendar-time-model.service.js.map