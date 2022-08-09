import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, } from '@angular/core';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbPortalOutletDirective } from '../cdk/overlay/mapping';
import { NbTimePickerComponent } from '../timepicker/timepicker.component';
export class NbCalendarWithTimeComponent extends NbCalendarComponent {
    constructor(dateService, cd, calendarTimeModelService) {
        super();
        this.dateService = dateService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
    }
    ngOnInit() {
        if (!this.date) {
            this.date = this.calendarTimeModelService.getResetTime();
        }
    }
    ngAfterViewInit() {
        this.portalOutlet.attachTemplatePortal(this.timepicker.portal);
    }
    onDateValueChange(date) {
        const hours = this.dateService.getHours(this.date);
        const minutes = this.dateService.getMinutes(this.date);
        const seconds = this.dateService.getSeconds(this.date);
        const milliseconds = this.dateService.getMilliseconds(this.date);
        let newDate = this.dateService.setHours(date, hours);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setSeconds(newDate, seconds);
        newDate = this.dateService.setMilliseconds(newDate, milliseconds);
        this.date = newDate;
    }
    onTimeChange(selectedTime) {
        let newDate = this.dateService.clone(this.date);
        newDate = this.dateService.setHours(newDate, this.dateService.getHours(selectedTime.time));
        newDate = this.dateService.setMinutes(newDate, this.dateService.getMinutes(selectedTime.time));
        newDate = this.dateService.setSeconds(newDate, this.dateService.getSeconds(selectedTime.time));
        newDate = this.dateService.setMilliseconds(newDate, this.dateService.getMilliseconds(selectedTime.time));
        this.date = newDate;
    }
    saveValue() {
        this.dateChange.emit(this.date);
    }
    saveCurrentTime() {
        this.dateChange.emit(this.dateService.today());
    }
    /**
     * We don't show seconds with twelve hours format
     * */
    showSeconds() {
        return this.withSeconds && !this.twelveHoursFormat;
    }
    isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarWithTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-with-time',
                template: `
    <nb-card class="calendar-with-time">
      <nb-card-body class="picker-body">
        <nb-base-calendar
          [boundingMonth]="boundingMonth"
          [startView]="startView"
          [date]="date"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [dayCellComponent]="dayCellComponent"
          [monthCellComponent]="monthCellComponent"
          [yearCellComponent]="yearCellComponent"
          [size]="size"
          [visibleDate]="visibleDate"
          [showNavigation]="showNavigation"
          [showWeekNumber]="showWeekNumber"
          [weekNumberSymbol]="weekNumberSymbol"
          (dateChange)="onDateValueChange($event)">
        </nb-base-calendar>
        <div class="timepicker-section"
             [class.size-large]="isLarge()"
             [class.timepicker-single-column-width]="singleColumn"
             [class.timepicker-multiple-column-width]="!singleColumn">
          <div class="picker-title">{{ title }}</div>
          <nb-timepicker
            (onSelectTime)="onTimeChange($event)"
            [date]="date"
            [twelveHoursFormat]="twelveHoursFormat"
            [withSeconds]="showSeconds()"
            [showFooter]="false"
            [singleColumn]="singleColumn"
            [step]="step">
          </nb-timepicker>
          <ng-container nbPortalOutlet></ng-container>
        </div>
      </nb-card-body>
      <nb-card-footer class="picker-footer">
        <nb-calendar-actions
          [applyButtonText]="applyButtonText"
          [currentTimeButtonText]="currentTimeButtonText"
          (setCurrentTime)="saveCurrentTime()"
          (saveValue)="saveValue()"
        ></nb-calendar-actions>
      </nb-card-footer>
    </nb-card>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host ::ng-deep nb-card.nb-timepicker-container{flex:1 0 0;border-radius:0;width:auto;border-right:0;border-bottom:0}[dir=ltr] :host .picker-footer{padding-left:.625rem}[dir=rtl] :host .picker-footer{padding-right:.625rem}.picker-body{align-items:stretch;display:flex;padding:0}.picker-body nb-base-calendar ::ng-deep nb-card{border-radius:0}.calendar-with-time{overflow:hidden}.timepicker-section{display:flex;flex-direction:column}\n"]
            },] }
];
NbCalendarWithTimeComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: ChangeDetectorRef },
    { type: NbCalendarTimeModelService }
];
NbCalendarWithTimeComponent.propDecorators = {
    visibleDate: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }],
    step: [{ type: Input }],
    timeFormat: [{ type: Input }],
    title: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective,] }],
    timepicker: [{ type: ViewChild, args: [NbTimePickerComponent,] }]
};
//# sourceMappingURL=calendar-with-time.component.js.map