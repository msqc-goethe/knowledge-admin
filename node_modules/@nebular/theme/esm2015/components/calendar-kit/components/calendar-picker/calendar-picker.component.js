/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';
import { NbCalendarSize } from '../../model';
export class NbCalendarPickerComponent {
    constructor() {
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-picker',
                template: `
    <nb-calendar-picker-row
      *ngFor="let row of data"
      [row]="row"
      [visibleDate]="visibleDate"
      [selectedValue]="selectedValue"
      [component]="cellComponent"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [size]="size"
      (select)="select.emit($event)">
    </nb-calendar-picker-row>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarPickerComponent.propDecorators = {
    data: [{ type: Input }],
    visibleDate: [{ type: Input }],
    selectedValue: [{ type: Input }],
    cellComponent: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};
//# sourceMappingURL=calendar-picker.component.js.map