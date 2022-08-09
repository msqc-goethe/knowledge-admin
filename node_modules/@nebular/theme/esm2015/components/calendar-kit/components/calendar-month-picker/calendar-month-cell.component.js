/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import { NbDateService } from '../../services/date.service';
export class NbCalendarMonthCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.monthCellClass = true;
    }
    get selected() {
        return this.dateService.isSameMonthSafe(this.date, this.selectedValue);
    }
    get today() {
        return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get month() {
        return this.dateService.getMonthName(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    }
    monthStart() {
        return this.dateService.getMonthStart(this.date);
    }
    monthEnd() {
        return this.dateService.getMonthEnd(this.date);
    }
}
NbCalendarMonthCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-month-cell',
                template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarMonthCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarMonthCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    monthCellClass: [{ type: HostBinding, args: ['class.month-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-month-cell.component.js.map