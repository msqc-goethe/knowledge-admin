/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FormatWidth, getLocaleTimeFormat } from '@angular/common';
import { DatePipe, FormStyle, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth, } from '@angular/common';
import { NbDateService } from './date.service';
/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
export class NbNativeDateService extends NbDateService {
    constructor(locale) {
        super();
        this.setLocale(locale);
    }
    setLocale(locale) {
        super.setLocale(locale);
        this.datePipe = new DatePipe(locale);
    }
    setHours(date, hour) {
        const result = this.clone(date);
        result.setHours(hour);
        return result;
    }
    setMinutes(date, minute) {
        const result = this.clone(date);
        result.setMinutes(minute);
        return result;
    }
    setSeconds(date, second) {
        const result = this.clone(date);
        result.setSeconds(second);
        return result;
    }
    setMilliseconds(date, second) {
        const result = this.clone(date);
        result.setMilliseconds(second);
        return result;
    }
    isValidDateString(date, format) {
        return !isNaN(this.parse(date, format).getTime());
    }
    isValidTimeString(date, format) {
        return this.isValidDateString(date, format);
    }
    today() {
        return new Date();
    }
    getLocaleTimeFormat() {
        return getLocaleTimeFormat(this.locale, FormatWidth.Short);
    }
    getDate(date) {
        return date.getDate();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getYear(date) {
        return date.getFullYear();
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek() {
        return getLocaleFirstDayOfWeek(this.locale);
    }
    getMonthName(date, style = TranslationWidth.Abbreviated) {
        const index = date.getMonth();
        return this.getMonthNameByIndex(index, style);
    }
    getMonthNameByIndex(index, style = TranslationWidth.Abbreviated) {
        return getLocaleMonthNames(this.locale, FormStyle.Format, style)[index];
    }
    getDayOfWeekNames() {
        return [...getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Short)];
    }
    format(date, format) {
        return this.datePipe.transform(date, format);
    }
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date, format) {
        return new Date(Date.parse(date));
    }
    addDay(date, num) {
        return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
    }
    addMonth(date, num) {
        const month = this.createDate(date.getFullYear(), date.getMonth() + num, 1);
        // In case of date has more days than calculated month js Date will change that month to the next one
        // because of the date overflow.
        month.setDate(Math.min(date.getDate(), this.getMonthEnd(month).getDate()));
        return month;
    }
    addMinutes(date, minute) {
        const result = new Date(date);
        result.setMinutes(date.getMinutes() + minute);
        return result;
    }
    addHours(date, hour) {
        const result = new Date(date);
        result.setHours(date.getHours() + hour);
        return result;
    }
    getHours(date) {
        return date.getHours();
    }
    getMinutes(date) {
        return date.getMinutes();
    }
    getSeconds(date) {
        return date.getSeconds();
    }
    getMilliseconds(date) {
        return date.getMilliseconds();
    }
    addYear(date, num) {
        return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
    }
    clone(date) {
        return new Date(date.getTime());
    }
    compareDates(date1, date2) {
        return date1.getTime() - date2.getTime();
    }
    createDate(year, month, date) {
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(result.getFullYear() - 1900);
        }
        return result;
    }
    getMonthEnd(date) {
        return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getMonthStart(date) {
        return this.createDate(date.getFullYear(), date.getMonth(), 1);
    }
    getNumberOfDaysInMonth(date) {
        return this.getMonthEnd(date).getDate();
    }
    getYearEnd(date) {
        return this.createDate(date.getFullYear(), 11, 31);
    }
    getYearStart(date) {
        return this.createDate(date.getFullYear(), 0, 1);
    }
    valueOf(date) {
        return date.valueOf();
    }
    isSameDay(date1, date2) {
        return this.isSameMonth(date1, date2) &&
            date1.getDate() === date2.getDate();
    }
    isSameMonth(date1, date2) {
        return this.isSameYear(date1, date2) &&
            date1.getMonth() === date2.getMonth();
    }
    isSameYear(date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    }
    getId() {
        return 'native';
    }
    getWeekNumber(date) {
        return parseInt(this.datePipe.transform(date, 'w'), 10);
    }
    getDateFormat() {
        return 'yyyy-MM-dd';
    }
    getTwelveHoursFormat() {
        return 'hh:mm a';
    }
}
NbNativeDateService.decorators = [
    { type: Injectable }
];
NbNativeDateService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
//# sourceMappingURL=native-date.service.js.map