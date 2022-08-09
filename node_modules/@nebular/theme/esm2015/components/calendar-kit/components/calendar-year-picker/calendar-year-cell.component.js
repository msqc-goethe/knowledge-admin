/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbDateService } from '../../services/date.service';
import { NbCalendarSize } from '../../model';
export class NbCalendarYearCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
    }
    get selected() {
        return this.dateService.isSameYearSafe(this.date, this.selectedValue);
    }
    get today() {
        return this.dateService.isSameYearSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
}
NbCalendarYearCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-year-cell',
                template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarYearCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarYearCellComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    selectedValue: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    yearCellClass: [{ type: HostBinding, args: ['class.year-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=calendar-year-cell.component.js.map