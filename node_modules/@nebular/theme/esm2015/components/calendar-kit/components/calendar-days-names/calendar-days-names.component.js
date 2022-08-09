/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { NbCalendarSize } from '../../model';
import { NbDateService } from '../../services/date.service';
export class NbCalendarDaysNamesComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnInit() {
        const days = this.createDaysNames();
        this.days = this.shiftStartOfWeek(days);
    }
    createDaysNames() {
        return this.dateService.getDayOfWeekNames()
            .map(this.markIfHoliday);
    }
    shiftStartOfWeek(days) {
        for (let i = 0; i < this.dateService.getFirstDayOfWeek(); i++) {
            days.push(days.shift());
        }
        return days;
    }
    markIfHoliday(name, i) {
        return { name, isHoliday: i % 6 === 0 };
    }
}
NbCalendarDaysNamesComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-days-names',
                template: `
    <div class="day" *ngFor="let day of days" [class.holiday]="day.isHoliday">{{ day.name }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center}\n"]
            },] }
];
NbCalendarDaysNamesComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarDaysNamesComponent.propDecorators = {
    size: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-days-names.component.js.map