/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export class NbDateService {
    constructor() {
        this.DAYS_IN_WEEK = 7;
        /**
         * Number of hours in AM/PM day periods.
         **/
        this.HOURS_IN_DAY_PERIOD = 12;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetween(date, start, end) {
        return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    }
    ;
    /**
     * Checks is two dates have the same day.
     * */
    isSameDaySafe(date1, date2) {
        return date1 && date2 && this.isSameDay(date1, date2);
    }
    ;
    /**
     * Checks is two dates have the same month.
     * */
    isSameMonthSafe(date1, date2) {
        return date1 && date2 && this.isSameMonth(date1, date2);
    }
    /**
     * Checks is two dates have the same year.
     * */
    isSameYearSafe(date1, date2) {
        return date1 && date2 && this.isSameYear(date1, date2);
    }
    isSameHourAndMinute(date1, date2) {
        return this.isSameHour(date1, date2) && this.isSameMinute(date1, date2);
    }
    isSameHour(date1, date2) {
        return this.getHours(date1) === this.getHours(date2);
    }
    isSameMinute(date1, date2) {
        return this.getMinutes(date1) === this.getMinutes(date2);
    }
    getTwentyFourHoursFormat() {
        return 'HH:mm';
    }
    getTwentyFourHoursFormatWithSeconds() {
        return 'HH:mm:ss';
    }
    getTwelveHoursFormatWithSeconds() {
        return 'hh:mm:ss a';
    }
    getDayPeriod(date) {
        const isFirstDayPeriod = this.getHours(date) < this.HOURS_IN_DAY_PERIOD;
        if (isFirstDayPeriod) {
            return "AM" /* AM */;
        }
        else {
            return "PM" /* PM */;
        }
    }
}
//# sourceMappingURL=date.service.js.map