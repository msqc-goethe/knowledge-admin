import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, LOCALE_ID, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import { NbPlatform } from '../cdk/platform/platform-service';
import { NbDateService } from '../calendar-kit/services/date.service';
import { range, rangeFromTo } from '../calendar-kit/helpers';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, NB_TIME_PICKER_CONFIG, } from './model';
/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
export class NbTimePickerComponent {
    constructor(config, platformService, locale, cd, calendarTimeModelService, dateService) {
        this.config = config;
        this.platformService = platformService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.blur$ = new Subject();
        this.dayPeriodColumnOptions = ["AM" /* AM */, "PM" /* PM */];
        this.isAM = true;
        /**
         * In timepicker value should be always true
         * In calendar-with-time.component  should set to false
         * @docs-private
         */
        this.showFooter = true;
        /**
         * Emits date when selected.
         * */
        this.onSelectTime = new EventEmitter();
        this.initFromConfig(this.config);
    }
    /**
     * Emits when timepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Defines time format string.
     * */
    get timeFormat() {
        return this._timeFormat;
    }
    set timeFormat(timeFormat) {
        this._timeFormat = timeFormat;
    }
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    ;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    ;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step) {
        this._step = step;
    }
    get step() {
        return this._step;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this._date = date;
        this.isAM = this.dateService.getDayPeriod(this.date) === "AM" /* AM */;
        this.buildColumnOptions();
        this.cd.markForCheck();
    }
    get date() {
        return this._date;
    }
    ngOnInit() {
        this.timeFormat = this.setupTimeFormat();
    }
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn, }) {
        this.timeFormat = this.setupTimeFormat();
        const isConfigChanged = step || twelveHoursFormat || withSeconds || singleColumn;
        if (isConfigChanged || !this.fullTimeOptions) {
            this.buildColumnOptions();
        }
    }
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    attach(hostRef) {
        this.hostRef = hostRef;
    }
    setCurrentTime() {
        this.date = this.dateService.today();
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    setHour(value) {
        this.updateValue(this.dateService.setHours(this.date, value));
    }
    setMinute(value) {
        this.updateValue(this.dateService.setMinutes(this.date, value));
    }
    setSecond(value) {
        this.updateValue(this.dateService.setSeconds(this.date, value));
    }
    selectFullTime(value) {
        this.updateValue(value);
    }
    changeDayPeriod(dayPeriodToSet) {
        if (this.dateService.getDayPeriod(this.date) === dayPeriodToSet) {
            return;
        }
        // Subtract hours when switching to AM (before midday, 0-11 in 24-hour) from PM (after midday, 12-24 in 24-hour),
        // otherwise add hours because switching to PM from AM.
        const direction = dayPeriodToSet === "AM" /* AM */ ? -1 : 1;
        const increment = direction * this.dateService.HOURS_IN_DAY_PERIOD;
        this.updateValue(this.dateService.addHours(this.date, increment));
    }
    updateValue(date) {
        this.onSelectTime.emit({ time: date });
    }
    saveValue() {
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    trackByTimeValues(index, item) {
        return item.value;
    }
    trackBySingleColumnValue(index, item) {
        return this.dateService.valueOf(item);
    }
    trackByDayPeriod(index, item) {
        return item;
    }
    showSeconds() {
        return this.withSeconds && !this.singleColumn;
    }
    isSelectedHour(val) {
        if (this.date) {
            return this.dateService.getHours(this.date) === val;
        }
        return false;
    }
    isSelectedMinute(val) {
        if (this.date) {
            return this.dateService.getMinutes(this.date) === val;
        }
        return false;
    }
    isSelectedSecond(val) {
        if (this.date) {
            return this.dateService.getSeconds(this.date) === val;
        }
        return false;
    }
    isSelectedDayPeriod(dayPeriod) {
        if (this.date) {
            return dayPeriod === this.dateService.getDayPeriod(this.date);
        }
        return false;
    }
    getFullTimeString(item) {
        return this.dateService.format(item, this.timeFormat).toUpperCase();
    }
    isSelectedFullTimeValue(value) {
        if (this.date) {
            return this.dateService.isSameHourAndMinute(value, this.date);
        }
        return false;
    }
    buildColumnOptions() {
        this.timeFormat = this.setupTimeFormat();
        this.fullTimeOptions = this.singleColumn
            ? this.calendarTimeModelService.getHoursRange(this.step)
            : [];
        this.hoursColumnOptions = this.generateHours();
        this.minutesColumnOptions = this.generateMinutesOrSeconds();
        this.secondsColumnOptions = this.withSeconds ? this.generateMinutesOrSeconds() : [];
    }
    /**
     * @docs-private
     */
    isFirefox() {
        return this.platformService.FIREFOX;
    }
    generateHours() {
        if (!this.twelveHoursFormat) {
            return range(24, (v) => {
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
            });
        }
        if (this.isAM) {
            return (range(12, (v) => {
                const text = v === 0 ? 12 : v;
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
            }));
        }
        return (rangeFromTo(12, 24, (v) => {
            const text = v === 12 ? 12 : (v - 12);
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
        }));
    }
    generateMinutesOrSeconds() {
        return range(60, (v) => {
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
        });
    }
    setupTimeFormat() {
        if (!this.timeFormat) {
            return this.config.format || this.buildTimeFormat();
        }
        return this.timeFormat;
    }
    /**
     * @docs-private
     */
    buildTimeFormat() {
        if (this.twelveHoursFormat) {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwelveHoursFormatWithSeconds()
                : this.dateService.getTwelveHoursFormat()}`;
        }
        else {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwentyFourHoursFormatWithSeconds()
                : this.dateService.getTwentyFourHoursFormat()}`;
        }
    }
    initFromConfig(config) {
        var _a;
        if (config) {
            this.twelveHoursFormat = config.twelveHoursFormat;
        }
        else {
            this.twelveHoursFormat = this.dateService.getLocaleTimeFormat().includes('h');
        }
        const localeConfig = Object.assign(Object.assign({}, NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG), (_a = config === null || config === void 0 ? void 0 : config.localization) !== null && _a !== void 0 ? _a : {});
        this.hoursText = localeConfig.hoursText;
        this.minutesText = localeConfig.minutesText;
        this.secondsText = localeConfig.secondsText;
        this.ampmText = localeConfig.ampmText;
    }
}
NbTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-timepicker',
                template: "<nb-card *nbPortal\n         [class.supports-scrollbar-theming]=\"!isFirefox()\"\n         class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">{{ ampmText }}</div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\">\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\">\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n",
                exportAs: 'nbTimepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"]
            },] }
];
NbTimePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_TIME_PICKER_CONFIG,] }] },
    { type: NbPlatform },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ChangeDetectorRef },
    { type: NbCalendarTimeModelService },
    { type: NbDateService }
];
NbTimePickerComponent.propDecorators = {
    timeFormat: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }],
    step: [{ type: Input }],
    date: [{ type: Input }],
    showFooter: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    hoursText: [{ type: Input }],
    minutesText: [{ type: Input }],
    secondsText: [{ type: Input }],
    ampmText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    onSelectTime: [{ type: Output }],
    portal: [{ type: ViewChild, args: [NbPortalDirective, { static: true },] }]
};
//# sourceMappingURL=timepicker.component.js.map