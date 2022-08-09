/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import { NbDateService } from '../../services/date.service';
export class NbCalendarDayCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.dayCellClass = true;
    }
    get today() {
        return this.dateService.isSameDaySafe(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        return this.dateService.isSameDaySafe(this.date, this.selectedValue);
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
}
NbCalendarDayCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-day-cell',
                template: `
    <div class="cell-content">
      {{ day }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarDayCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarDayCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    boundingMonth: [{ type: HostBinding, args: ['class.bounding-month',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    empty: [{ type: HostBinding, args: ['class.empty',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    dayCellClass: [{ type: HostBinding, args: ['class.day-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-day-cell.component.js.map