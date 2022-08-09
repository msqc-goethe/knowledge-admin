/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import { NbCalendarYearCellComponent } from './calendar-year-cell.component';
import { NbDateService } from '../../services/date.service';
import { NbCalendarYearModelService } from '../../services/calendar-year-model.service';
export class NbCalendarYearPickerComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.cellComponent = NbCalendarYearCellComponent;
        this.size = NbCalendarSize.MEDIUM;
        this.yearChange = new EventEmitter();
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges() {
        this.years = this.yearModelService.getViewYears(this.year);
    }
    onSelect(year) {
        this.yearChange.emit(year);
    }
}
NbCalendarYearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-year-picker',
                template: `
    <nb-calendar-picker
      [data]="years"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="year"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarYearPickerComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbCalendarYearPickerComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    _cellComponent: [{ type: Input, args: ['cellComponent',] }],
    size: [{ type: Input }],
    year: [{ type: Input }],
    yearChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-year-picker.component.js.map